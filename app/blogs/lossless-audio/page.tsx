'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import MathText from '@/components/MathText';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';
import QualitySlider from './components/QualitySlider';
import LosslessComparisonPlayer from './components/LosslessComparisonPlayer';

export default function LosslessBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is-lossless', title: 'what is lossless audio?' },
      { id: 'lossless-vs-lossy', title: 'lossless vs lossy' },
      { id: 'common-formats', title: 'common formats' },
      { id: 'mp3-under-the-hood', title: 'mp3: under the hood' },
      { id: 'why-it-matters', title: 'why does it matter?' },
      { id: 'how-lossless-compressed', title: 'how is lossless audio compressed?' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'how lossless audio compression works' + ' | Nicholas Chen';
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="contents" />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-500 btn-interactive mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              back
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              how lossless audio compression works
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              nicholas chen · january 15, 2026 · 10 min read
            </p>

            {/* Cover image */}
            <img src="/blogs/lossless-audio/FLAC.png" alt="FLAC" className="w-full mb-6" />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>
                  with the rise of high-speed internet and cheap storage, lossless audio has moved
                  from a niche audiophile obsession to a mainstream feature on platforms like apple
                  music and tidal. but what is it, exactly? and can you even hear the difference?
                </p>
                <h2
                  id="what-is-lossless"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  what is lossless audio?
                </h2>
                <p>
                  lossless audio refers to any audio format that preserves all of the data from the
                  original source—usually a cd or a studio master. unlike lossy formats (like mp3 or
                  aac), lossless compression doesn't throw away any information to save space. if
                  you take a lossless file, decompress it, and compare it bit-for-bit to the
                  original, they will be identical.
                </p>
              </section>

              <section>
                <h2
                  id="lossless-vs-lossy"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  lossless vs lossy
                </h2>
                <p className="mb-4">
                  lossy formats like mp3 work by using psychoacoustics to identify and remove parts
                  of the sound that the human ear is less likely to hear. for example, if there's a
                  very loud sound at one frequency and a much quieter sound at a nearby frequency,
                  the mp3 encoder might just delete the quiet sound because your brain would "mask"
                  it anyway.
                </p>
                <p className="mb-6">
                  lossless formats, on the other hand, don't care about what you can or can't hear.
                  they treat the audio signal as a pure mathematical sequence and use advanced
                  algorithms (like flac's linear prediction) to pack that data more efficiently
                  without losing a single bit.
                </p>

                <div id="visualizers" className="mt-8 scroll-mt-8 space-y-8">
                  <QualitySlider />
                </div>

                <figure className="mt-6">
                  <img
                    src="/blogs/lossless-audio/audio-compression.png"
                    alt="Spectral representation of compressed sound"
                    className="w-full rounded-md border border-stone-700"
                  />
                  <figcaption className="mt-2 text-[11px] md:text-xs text-stone-400">
                    Spectral representation of compressed sound.
                  </figcaption>
                </figure>

                <h2
                  id="common-formats"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  common formats
                </h2>
                <p className="mb-6">
                  there are several common lossless formats you'll encounter, each with its own pros
                  and cons:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">what is FLAC?</h3>
                    <p>
                      FLAC (free lossless audio codec) is the gold standard for lossless audio. it's
                      open-source, widely supported, and offers excellent compression ratios
                      (typically 50-60% of the original size). it also has great metadata support
                      and is widely used for archiving music collections.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      ALAC (apple lossless audio codec)
                    </h3>
                    <p>
                      ALAC is apple's equivalent to flac. it's used by apple music and is the native
                      lossless format for ios and macos devices. while it's now open-source, it's
                      still primarily used within the apple ecosystem.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">WAV / AIFF</h3>
                    <p>
                      these are uncompressed formats. they are literally just the raw pulse-code
                      modulation (pcm) data. they don't use any compression at all, so they are
                      perfectly lossless but take up about twice as much space as a flac or alac
                      file.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  id="mp3-under-the-hood"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  mp3: under the hood
                </h2>
                <p>
                  mp3 compression is fascinatingly complex. it uses a combination of subband coding,
                  huffman coding, and a mdct (modified discrete cosine transform) to break the audio
                  into small chunks and compress them. the result is a file that's roughly 10% of
                  the original size but still sounds "good enough" for most people in most
                  situations.
                </p>
              </section>

              <section>
                <h2
                  id="why-it-matters"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  why does it matter?
                </h2>
                <p className="mb-4">
                  for most casual listeners on bluetooth headphones, lossless audio won't make a
                  difference because bluetooth itself uses lossy compression to transmit sound.
                  however, if you have a high-quality wired setup (a good dac/amp and decent
                  headphones), you might notice a wider "soundstage" and more clarity in complex
                  passages of music.
                </p>
                <p className="mb-8">
                  let's be honest: for 99% of listening, a high-bitrate (320kbps) mp3 is
                  indistinguishable from lossless. the real value of lossless is for archiving
                  (having a perfect copy you can always transcode later) and for the peace of mind
                  of knowing you're hearing exactly what the artist intended.
                </p>
                <LosslessComparisonPlayer />
              </section>

              <section>
                <h2
                  id="how-lossless-compressed"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  how is lossless audio compressed?
                </h2>
                <p className="mb-6">
                  lossless compression works by finding patterns in the data and representing them
                  more efficiently. the most common technique used in audio is linear prediction.
                </p>

                <h3
                  id="linear-prediction-depth"
                  className="text-lg font-medium text-white mb-4 mt-6 scroll-mt-8"
                >
                  a deeper look into linear prediction
                </h3>
                <p className="mb-6">
                  <MathText text="In digital audio, we have a sequence of samples: \(x[n], x[n-1], x[n-2], \ldots\). These are the amplitudes of the sound wave at specific points in time." />
                </p>
                <p className="mb-6">
                  <MathText text="Audio isn't random noise. If a sample is at a certain level, the next sample is likely to be very close to it. Linear prediction uses this fact to 'guess' the next sample based on previous ones." />
                </p>
                <p className="mb-6 whitespace-pre-line">
                  <MathText
                    text="The prediction \( \hat{x}[n] \) is a weighted sum of previous samples:
                    \[ \hat{x}[n] = \sum_{k=1}^p a_k x[n-k] \]
                    where \( a_k \) are the predictor coefficients and \( p \) is the 'order' of the predictor (how many previous samples we look at)."
                  />
                </p>
                <pre className="mb-6 rounded-md border border-stone-700 bg-stone-800/50 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`// Same example: p=3, coefficients a1=1.5, a2=-0.7, a3=0.2
const a = [1.5, -0.7, 0.2];
const prev = [100, 90, 80];  // x[n-1], x[n-2], x[n-3]

let pred = 0;
for (let k = 0; k < a.length; k++) pred += a[k] * prev[k];
// pred = 1.5*100 + (-0.7)*90 + 0.2*80 = 103

const xActual = 105;
const residual = xActual - pred;  // e[n] = 105 - 103 = 2
// Store residual (small) instead of 105 (large) → compression.`}
                </pre>

                <h3 className="text-lg font-medium text-white mb-2 mt-8">
                  how do we find the best coefficients?
                </h3>
                <p className="mb-4">
                  the encoder's job is to find the coefficients \( a_k \) that minimize the average
                  size of the residuals. this is usually done using the levinson-durbin recursion or
                  by solving the yule-walker equations.
                </p>
                <p className="mb-6">
                  <MathText
                    text="We want to minimize the mean squared error:
                    \[ \min_{a_1 \ldots a_p} \sum_n e[n]^2 = \min \sum_n \left(x[n] - \sum_{k=1}^p a_k x[n-k]\right)^2 \]"
                  />
                </p>
                <p className="mb-6">
                  by finding the 'best fit' line for the audio waveform in each small block of time,
                  we can make the residuals as small as possible, which means we can represent them
                  with fewer bits.
                </p>

                <h3 className="text-lg font-medium text-white mb-2 mt-6">
                  <MathText text="The Predictor Order (\( p \))" />
                </h3>
                <p className="mb-6">
                  <MathText text="Higher orders of \( p \) allow for more accurate predictions but require more computation. FLAC typically uses orders between 1 and 32. Simple signals like silence or pure sine waves only need low orders, while complex music might benefit from higher ones." />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">the key point</h3>
                <p className="mb-8">
                  <MathText text="We aren't throwing away any data. The original sample is just \( x[n] = \hat{x}[n] + e[n] \). As long as we store the coefficients and the residuals, we can perfectly reconstruct the original signal." />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">what is 'n'?</h3>
                <p className="mb-6">
                  <MathText text="'n' is the index of the current sample. In a standard CD-quality file, there are 44,100 samples per second. So \( n \) goes from 0 up to 44,100 for each second of audio." />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">residuals: the 'leftovers'</h3>
                <p className="mb-4">
                  <MathText text="The residual \( e[n] \) is the difference between what we predicted and what actually happened. Because our predictions are usually quite good, most residuals are very small numbers (close to zero)." />
                </p>
                <p className="mb-4">
                  storing small numbers takes fewer bits than storing large numbers. instead of
                  using a full 16 bits for every sample, we might only need 2 or 3 bits for the
                  residual of a well-predicted sample.
                </p>
                <p className="mb-4">
                  <MathText text="The residuals follow a Laplace distribution (centered at zero). We use entropy coding (like Rice coding) to assign shorter bit-sequences to the most common (smaller) residuals." />
                </p>
                <p className="mb-6">
                  <MathText text="This is how we get a smaller file size while still guaranteeing that every bit can be restored during playback." />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">reconstructing the sound</h3>
                <p className="mb-4">
                  <MathText text="During playback, your computer reads the coefficients and the sequence of residuals from the file. It then runs the same prediction formula and adds the residual back to get the exact original sample." />
                </p>
                <pre className="mb-0 rounded-md border border-stone-700 bg-stone-800/50 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`// Decoder: prediction + residual → original sample
const pred = 103;   // from same coefficients + previous samples
const residual = 2; // stored in the bitstream
const xReconstructed = pred + residual;  // 103 + 2 = 105 ✓`}
                </pre>
              </section>

              <section>
                <h2
                  id="rice-coding"
                  className="text-lg font-medium text-white mb-4 mt-8 scroll-mt-8"
                >
                  Rice Coding: Packing the Residuals
                </h2>
                <p className="mb-6">
                  rice coding is a form of entropy coding that's particularly efficient for data
                  following a laplace distribution (like audio residuals). it's a way to turn those
                  small numbers into the shortest possible sequence of bits.
                </p>
                <p className="mb-6">
                  <MathText text="Rice coding uses a parameter \( k \). We split each number into two parts: a quotient and a remainder. The remainder is stored in binary, and the quotient is stored in unary." />
                </p>
                <p className="mb-6">
                  <MathText
                    text="For example, if we have a residual \( e = 6 \) and we use \( k = 2 \):
                    \[ q = \lfloor e / 2^k \rfloor = \lfloor 6 / 4 \rfloor = 1 \]
                    \[ r = e \pmod{2^k} = 6 \pmod{4} = 2 \]"
                  />
                </p>
                <p className="mb-6">
                  <MathText text="The quotient (1) in unary is '01'. The remainder (2) in binary is '10'. So 6 is stored as '0110'." />
                </p>
                <p className="mb-4">
                  <MathText text="Here's a comparison of how different residuals are stored with \( k = 2 \):" />
                </p>
                <div className="mb-6 overflow-x-auto">
                  <table className="w-full min-w-[200px] border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-stone-600">
                        <th className="py-2 pr-3 font-medium text-stone-400">residual (e)</th>
                        <th className="py-2 pr-3 font-medium text-stone-400">
                          standard binary (4-bit)
                        </th>
                        <th className="py-2 font-medium text-stone-400">Rice code (k=2)</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">0</td>
                        <td className="py-2 pr-3">0000</td>
                        <td className="py-2">0 (1 bit)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">1</td>
                        <td className="py-2 pr-3">0001</td>
                        <td className="py-2">010 (3 bits)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">2</td>
                        <td className="py-2 pr-3">0010</td>
                        <td className="py-2">011 (3 bits)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">4</td>
                        <td className="py-2 pr-3">0100</td>
                        <td className="py-2">10100 (5 bits)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-0">
                  <MathText text="By choosing the optimal \( k \) for each block of audio, FLAC can ensure that the residuals take up the absolute minimum amount of space possible." />
                </p>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  references
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a
                      href="https://xiph.org/flac/format.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      xiph.org/flac/format.html
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://michaeldipperstein.github.io/rice.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      Rice (Golomb) coding – discussion and implementation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://techblog.paalijarvi.fi/2014/06/23/a-short-study-on-audio-compression/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      a short study on audio compression
                    </a>
                  </li>
                </ul>
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
