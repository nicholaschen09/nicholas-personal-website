'use client';

import type { ReactNode } from 'react';
import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

function BlogFigure({
  src,
  alt,
  width,
  height,
  caption,
  className = 'mt-6',
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: ReactNode;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image src={src} alt={alt} width={width} height={height} className="w-full object-cover" />
      <figcaption className="text-stone-500 text-xs mt-2 italic">{caption}</figcaption>
    </figure>
  );
}

export default function MeliusSummerInternshipBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'starting', title: 'starting my engineering internship' },
      { id: 'agent-context', title: 'agent context and skills' },
      { id: 'playground', title: 'the playground' },
      { id: 'work-hard-play-hard', title: 'work hard, play hard' },
      { id: 'takeaways', title: 'key takeaways' },
      { id: 'wrapping-up', title: 'wrapping up' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'my summer internship with melius';
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
                writing
              </Link>
              <span className="text-stone-500"> / </span>
              <span className="text-stone-400">melius-summer-internship</span>
            </header>

            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              my summer internship with melius
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              Nicholas Chen · August 2026
            </p>

            <figure className="mb-6">
              <Image
                src="/blogs/melius-summer-internship/cover.png"
                alt="the melius team in the office"
                width={1200}
                height={480}
                priority
                className="w-full object-cover"
              />
            </figure>

            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <h2
                  id="starting"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  starting my engineering internship
                </h2>
                <p>
                  my internship at melius has been an awesome learning experience for me as an
                  engineer and a creative. over the past few months, i had the opportunity to work
                  on small and large projects that directly impacted our customers and also got to
                  see the product scale and the team grow alongside it. i’m now wrapping up my last
                  week and wanted to summarize everything i worked on, learned and enjoyed about
                  melius.
                </p>
                <p className="mt-4">
                  for context, melius is an agents lab for creatives, marketing teams, and
                  filmmakers to generate beautiful scenes and videos with access to image and video
                  models through a single interface. mel, our ai agent, does all the tedious work,
                  so users are able to generate anything from their imagination without ever leaving
                  the app.
                </p>
                <p className="mt-4">
                  in the past, i’ve worked at other startups and larger companies, but at melius,
                  what i loved most was being able to take on larger projects, have more ownership
                  over the product, and wear many hats throughout the term.
                </p>
              </section>

              <section>
                <h2
                  id="agent-context"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  agent context and skills
                </h2>
                <p>
                  one of the larger projects i got to own was building out skills and context for
                  our agent. the idea originally came up when we wanted mel to follow certain
                  instructions, but only during specific sessions. when we first started
                  brainstorming solutions, we looked at how skills and context are typically used
                  with ai agents. both can essentially be represented as markdown files containing
                  instructions for the model, but the key difference is when they&apos;re applied.
                  context is applied automatically on every agent turn, while skills are selectively
                  applied when they&apos;re relevant to a specific task.
                </p>
                <p className="mt-4">
                  since melius offers a creative canvas, we also wanted our skills to go beyond the
                  typical markdown file. a lot of creative direction is easier to show than
                  describe, so we designed our skills to include reference images alongside written
                  instructions. this opens up a bunch of useful workflows: a product photography
                  skill could include instructions and references for a specific composition, while
                  a character skill could help maintain consistency across generations. context, on
                  the other hand, could capture things that should always apply, like team
                  conventions, brand guidelines, or other preferences mel should know on every turn.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/blogs/melius-summer-internship/agent-context-skills.png"
                    alt="diagram showing how agent skills and team context work together"
                    width={1200}
                    height={712}
                    className="w-full object-cover"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    how agent skills and context work together
                  </figcaption>
                </figure>
                <p className="mt-4">
                  the goal of both features is ultimately to make prompting less repetitive. you
                  tell mel what you want to create, context gives it what it should already know,
                  and your selected skills provide the task-specific instructions and references it
                  needs. a big part of building this was also figuring out the product ux and making
                  sure these features felt intuitive within the existing creative workflow.
                </p>
                <p className="mt-4">
                  working on this ended up being one of my favorite projects because it sat at the
                  intersection of engineering, product, and creative tooling. i got to think through
                  the agent architecture, build the underlying system, and figure out how to make it
                  feel intuitive inside a creative workflow.
                </p>
                <p className="mt-4">
                  here&apos;s a demo of the{' '}
                  <Link
                    href="https://x.com/trymelius/status/2066941446247108899?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-500 underline-offset-2 transition-colors hover:text-stone-100 hover:decoration-stone-300"
                  >
                    feature
                  </Link>
                  .
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/agent-settings.png"
                  alt="agent skills and context in the melius app settings"
                  width={1974}
                  height={906}
                  caption="agent skills and context in the melius app settings"
                />
              </section>

              <section>
                <h2
                  id="playground"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the playground
                </h2>
                <p>
                  another fun project i got to work on was the playground. before this, melius
                  started off as a creative canvas where users could create generation workflows
                  together, make edits, and build out entire scenes in an infinite space. but not
                  every creative task needs a full canvas, so we wanted to give users a faster way
                  to simply type a prompt and start creating.
                </p>
                <p className="mt-4">
                  the playground is a simpler, more intuitive way to create: you describe what you
                  want, pick a model and format, choose how many variations, and hit generate. the
                  playground mirrored the canvas experience, making it easy for existing melius
                  users to bring over their work while still being approachable for new users. all
                  the generations in the playground are saved to each user’s personal history within
                  their team, making it easy to revisit their work later.
                </p>
                <p className="mt-4">
                  what i like most about how we built it is that under the hood, every playground
                  session is still a real canvas. nothing you make is throwaway so the moment you
                  want more control, you can open it in the full canvas and keep working with all of
                  mel’s tools. that let the playground lower the barrier to entry without cutting
                  anyone off from the depth underneath.
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/playground-architecture.png"
                  alt="diagram of the playground architecture under the hood"
                  width={1199}
                  height={247}
                  caption="the playground architecture under the hood"
                />
                <p className="mt-4">
                  this was another project that made me think hard about ux. the whole point was to
                  remove friction for people who might be intimidated by a blank canvas, so a lot of
                  the work came down to small product decisions: what information to show upfront,
                  what to hide until it was needed, how users selected models and formats, and how
                  we could make the path from an idea to a generation as simple as possible. at the
                  same time, we wanted the playground to fit naturally into the rest of melius, so
                  users could start with something simple and move into the canvas when they needed
                  more control or more advanced workflows. (shoutout to winson for the designs!)
                </p>
                <p className="mt-4">
                  this was probably the most fun project i got to work on during my internship, and
                  i was really happy with how it turned out. seeing so many users using the
                  playground after we shipped it was especially rewarding and made all the small
                  product and ux decisions feel worth it. lots of learning came out of this and i
                  couldn’t have done it without ray, who helped get it to the finish line.
                </p>
                <p className="mt-4">
                  <Link
                    href="https://x.com/trymelius/status/2080757663139520622?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-500 underline-offset-2 transition-colors hover:text-stone-100 hover:decoration-stone-300"
                  >
                    showcase of the playground in melius
                  </Link>
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/playground-showcase.png"
                  alt="showcase of the playground in melius"
                  width={1200}
                  height={804}
                  caption="an example image generated in the playground"
                />
              </section>

              <section>
                <h2
                  id="work-hard-play-hard"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  work hard, play hard
                </h2>
                <p>
                  of course, the internship wasn&apos;t all work. some of my favorite memories at
                  melius came from the things we did together outside of our usual day-to-day. we
                  had team dinners, did yoga together, and generally spent a lot of time getting to
                  know each other beyond work. most of our days ended with playing a few games of
                  super smash bros.
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/yoga.png"
                  alt="the melius team doing yoga in the morning"
                  width={800}
                  height={438}
                  caption="the melius team doing yoga at 8am in the morning"
                />
                <p className="mt-4">
                  one of the highlights was our team off-site in upstate new york leading up to
                  launch. we spent three or four days together in a huge house, basically living and
                  working under the same roof. we were revamping major parts of the app, fixing
                  things that hadn&apos;t mattered as much at a smaller scale, and making sure the
                  product and infrastructure was ready for a much larger wave of users. everyone was
                  jumping between whatever needed to get done, and it was really cool getting to
                  experience that side of building and launching a product firsthand. the off-site
                  brought us closer as a team and made the internship that much more memorable.
                </p>
                <p className="mt-4">
                  after all the prep, seeing melius finally launch was really cool! check out the
                  launch{' '}
                  <Link
                    href="https://x.com/n0w00j/status/2075594907285139867?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-500 underline-offset-2 transition-colors hover:text-stone-100 hover:decoration-stone-300"
                  >
                    here
                  </Link>
                  .
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/offsite-dinner.png"
                  alt="the team working on the app during dinner at the offsite"
                  width={1199}
                  height={653}
                  caption="the team working on the app pre-launch during dinner at the offsite"
                />
              </section>

              <section>
                <h2
                  id="takeaways"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  key takeaways
                </h2>
                <p>
                  my two biggest takeaways from being on the engineering team here at melius were
                  developing a stronger product engineering mindset and improving my communication
                  skills.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">
                    think like a product engineer
                  </span>{' '}
                  – on the product side, i learned to think beyond whether something simply works
                  and focus more on how it actually feels to use. at melius, this was especially
                  important since we’re building for prosumers, many of whom aren’t technical, so
                  features like agents and generative models need to feel intuitive and
                  approachable. this taught me to hold a much higher bar for ux when shipping
                  customer-facing features and to care about the small details that shape the
                  overall experience.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">communicate clearly</span> – i also
                  learned that communication is a huge part of being an effective engineer. whether
                  it’s discussing technical decisions with other engineers or explaining ideas to
                  non-engineers, being able to communicate clearly and efficiently keeps everyone
                  aligned and allows the team to move faster.
                </p>
              </section>

              <section>
                <h2
                  id="wrapping-up"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  wrapping up
                </h2>
                <p>
                  overall, i’m incredibly grateful for everything i got to experience. i came into
                  the internship hoping to grow as an engineer, but i’m leaving with a much better
                  understanding of what it means to build a product end-to-end. from owning larger
                  projects, to thinking deeply about ux, and working across different parts of the
                  stack, i was constantly learning something new.
                </p>
                <p className="mt-4">
                  what made the experience especially memorable was the amount of ownership and
                  trust i was given. being on a small team meant i got to work on things that
                  shipped directly to customers and see the impact of what i was building. more than
                  anything, i’m grateful for the people i got to work with while building something
                  i genuinely enjoyed working on.
                </p>
                <p className="mt-4">
                  i’m excited to take everything i learned at melius with me into whatever i build
                  next! a huge thank you to young, joowon, arnav, ray, jahow, alex, winson, samantha
                  and max for making these past few months such a memorable experience.
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
