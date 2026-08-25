'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function NeuralVideoCompressionBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'challenge', title: 'The challenge' },
      { id: 'research-notes', title: 'Research notes' },
      { id: 'approach', title: 'The compression approach' },
      { id: 'results', title: 'Results' },
      { id: 'recipe', title: 'Final recipe' },
      { id: 'next-steps', title: 'What I would try next' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'Learning How to Optimize Video Compression for Neural Networks';
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="" className="lg:mt-14" />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
            <header className="mb-6 text-xs font-normal leading-none md:text-sm">
              <Link
                href="/"
                className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
              >
                Nicholas Chen
              </Link>
              <span className="text-stone-500"> / </span>
              <Link
                href="/writing"
                className="text-stone-400 transition-colors hover:text-stone-200"
              >
                Writing
              </Link>
              <span className="text-stone-500"> / </span>
              <span className="text-stone-400">Neural Video Compression</span>
            </header>

            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              Learning How to Optimize Video Compression for Neural Networks
            </h1>
            <p className="text-stone-500 text-sm mb-6">Nicholas Chen · April 2026</p>

            <figure className="mb-6">
              <Image
                src="/blogs/neural-video-compression/cover.png"
                alt="PoseNet and SegNet error charts from the video compression challenge"
                width={822}
                height={329}
                priority
                className="w-full object-cover"
              />
            </figure>

            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>
                  I&apos;ve seen a few comma.ai posts on X in the past and thought their product was
                  pretty cool. Recently, I noticed that they were hosting challenges for people to
                  compete in, so I decided to give the{' '}
                  <Link
                    href="https://github.com/commaai/comma_video_compression_challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-500 underline-offset-2 transition-colors hover:text-stone-100 hover:decoration-stone-300"
                  >
                    video compression challenge
                  </Link>{' '}
                  a shot.
                </p>
                <p className="mt-4">
                  The goal was to shrink a 37MB dashcam clip as much as possible while ensuring two
                  specific neural networks, PoseNet and SegNet, could still accurately perceive
                  motion and objects. I hadn&apos;t ever done anything like this before, so I knew it
                  would be a steep learning curve, but I wanted to see how much I could challenge
                  myself.
                </p>
              </section>

              <section>
                <h2
                  id="challenge"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  The challenge
                </h2>
                <p>
                  The scoring function rewards small files, but only if the compressed video still
                  preserves the information the evaluation models need. That made this less like
                  normal visual compression and more like asking: what parts of the video matter to
                  a neural network?
                </p>
              </section>

              <section>
                <h2
                  id="research-notes"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  Research notes
                </h2>
                <p>
                  Before starting the challenge, I did some research and took notes on how the two
                  neural networks were being evaluated.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">PoseNet:</span> a real-time deep
                  learning model for pose estimation. It takes two consecutive frames from the video
                  and predicts six values that represent 3D movement: three translation values
                  (x, y, z) and three rotational values (pitch, yaw, roll). PoseNet distortion is
                  the difference between the motion predicted on the original frames and the motion
                  predicted on compressed frames.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">SegNet:</span> a segmentation
                  network that looks at semantic objects like cars, lane lines, vehicles, sidewalks,
                  and sky. It is measured by calculating the average class disagreement between the
                  original and compressed frames, which reflects how well the AI can still identify
                  objects.
                </p>
                <p className="mt-4">
                  Looking at top submissions, I noticed a few recurring patterns: AV1 encoding with
                  SVT-AV1, sharpness filters to reduce jitter in confidence scores, and Lanczos
                  resampling to downscale while keeping important edges clean.
                </p>
              </section>

              <section>
                <h2
                  id="approach"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  The compression approach
                </h2>
                <p>
                  Since I wanted to do this in two hours, I focused on optimizing one file and
                  improving <code className="text-stone-200">compress.sh</code> for the time being.
                  The main shift was moving from H.265 to AV1 through{' '}
                  <code className="text-stone-200">libsvtav1</code> at preset 6. AV1&apos;s motion
                  prediction is significantly more efficient, allowing the models to infer details
                  from a lower-quality stream that H.265 would have mangled.
                </p>
                <p className="mt-4">
                  I systematically tested scales from 10% to 45% to strip junk data like the sky and
                  dashboard. I settled on 35% using a Lanczos resampler to keep lane edges sharp
                  enough for the models to distinguish.
                </p>
                <p className="mt-4">
                  I also used an unsharp mask to pop vehicle edges and film grain synthesis
                  (<code className="text-stone-200">film-grain=8</code>) to strip space-heavy
                  natural noise, then fake texture back in during playback so the models
                  wouldn&apos;t get confused by flat, compressed surfaces.
                </p>
                <p className="mt-4">
                  Finally, I set <code className="text-stone-200">keyint=180</code> to save a full
                  frame only once every nine seconds. Relying on motion vectors for the intervals
                  saved massive space without losing the consistent motion data the AI requires.
                </p>
              </section>

              <section>
                <h2
                  id="results"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  Results
                </h2>
                <p>
                  After about 30 iterations of guessing, checking, and monitoring how CRF affected
                  the blindness of the models, I dropped my overall score from the baseline of 4.43
                  down to 3.08.
                </p>
                <pre className="mt-4 rounded-md border border-stone-700 bg-stone-900 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`=== Evaluation config ===
  batch_size: 16
  device: mps
  num_threads: 2
  prefetch_queue_depth: 4
  report: submissions/nic_compression/report.txt
  seed: 1234
  submission_dir: submissions/nic_compression
  uncompressed_dir: /Users/nicholas/comma_video_compression_challenge/videos
  video_names_file: /Users/nicholas/comma_video_compression_challenge/public_test_video_names.txt
=== Evaluation results over 600 samples ===
  Average PoseNet Distortion: 0.31859472
  Average SegNet Distortion: 0.00694903
  Submission file size: 901,066 bytes
  Original uncompressed size: 37,545,489 bytes
  Compression Rate: 0.02399931
  Final score: 100*segnet_dist + √(10*posenet_dist) + 25*rate = 3.08`}
                </pre>
                <figure className="mt-6">
                  <Image
                    src="/blogs/neural-video-compression/leaderboard.png"
                    alt="Leaderboard table from the comma.ai video compression challenge"
                    width={637}
                    height={1200}
                    className="w-full object-cover"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Challenge leaderboard, where lower scores are better
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="recipe"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  Final recipe
                </h2>
                <p>Here is the code that got me this overall score:</p>
                <pre className="mt-4 rounded-md border border-stone-700 bg-stone-900 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`# final recipe
ffmpeg -i "$in" \
  -vf "scale=trunc(iw*0.35/2)*2:trunc(ih*0.35/2)*2:flags=lanczos, unsharp=3:3:0.8" \
  -pix_fmt yuv420p -c:v libsvtav1 -preset 6 -crf 33 \
  -svtav1-params "keyint=180:film-grain=8" \
  "$out"`}
                </pre>
                <p className="mt-4">
                  It was a long process of failed ffmpeg commands, but a great deep dive into how to
                  prioritize data that actually matters to a neural network.
                </p>
              </section>

              <section>
                <h2
                  id="next-steps"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  What I would try next
                </h2>
                <p>
                  Looking back and reflecting on this challenge, if I had more time I would have
                  moved beyond the shell script and started hacking on the other Python files and
                  shell infrastructure.
                </p>
                <p className="mt-4">
                  I&apos;d implement custom post-processing, potentially using a lightweight AI
                  upscaler or a super-resolution model to reconstruct the downscaled frames in{' '}
                  <code className="text-stone-200">compress.py</code> and{' '}
                  <code className="text-stone-200">inflate.py</code> before they are fed into the
                  evaluation neural nets. I would also optimize the decompression pipeline to handle
                  more complex multi-pass decoding in{' '}
                  <code className="text-stone-200">inflate.sh</code>, allowing for even higher
                  compression ratios during the initial pass.
                </p>
                <p className="mt-4">
                  I didn&apos;t get anywhere near the top score, but I definitely learned a lot and
                  had a lot of fun doing this challenge.
                </p>
              </section>
            </div>

            <Footer className="mt-10" />
          </article>
        </ImageLightbox>
        <div className="hidden lg:block" />
      </div>
    </main>
  );
}
