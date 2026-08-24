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
              Nicholas Chen · August 20, 2026
            </p>

            <figure className="mb-6">
              <Image
                src="/blogs/melius-summer-internship/cover.png"
                alt="The Melius team in the office"
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
                  My internship at Melius has been an awesome learning experience for me as an
                  engineer and a creative. Over the past few months, I had the opportunity to work
                  on small and large projects that directly impacted our customers and also got to
                  see the product scale and the team grow alongside it. I’m now wrapping up my last
                  week and wanted to summarize everything I worked on, learned and enjoyed about
                  Melius.
                </p>
                <p className="mt-4">
                  For context, Melius is an agents lab for creatives, marketing teams, and
                  filmmakers to generate beautiful scenes and videos with access to image and video
                  models through a single interface. Mel, our AI agent, does all the tedious work,
                  so users are able to generate anything from their imagination without ever leaving
                  the app.
                </p>
                <p className="mt-4">
                  In the past, I’ve worked at other startups and larger companies, but at Melius,
                  what I loved most was being able to take on larger projects, have more ownership
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
                  One of the larger projects I got to own was building out skills and context for
                  our agent. The idea originally came up when we wanted Mel to follow certain
                  instructions, but only during specific sessions. When we first started
                  brainstorming solutions, we looked at how skills and context are typically used
                  with AI agents. Both can essentially be represented as Markdown files containing
                  instructions for the model, but the key difference is when they&apos;re applied.
                  Context is applied automatically on every agent turn, while skills are selectively
                  applied when they&apos;re relevant to a specific task.
                </p>
                <p className="mt-4">
                  Since Melius offers a creative canvas, we also wanted our skills to go beyond the
                  typical Markdown file. A lot of creative direction is easier to show than
                  describe, so we designed our skills to include reference images alongside written
                  instructions. This opens up a bunch of useful workflows: a product photography
                  skill could include instructions and references for a specific composition, while
                  a character skill could help maintain consistency across generations. Context, on
                  the other hand, could capture things that should always apply, like team
                  conventions, brand guidelines, or other preferences Mel should know on every turn.
                </p>
                <p className="mt-6 font-medium text-stone-200">
                  How agent skills and context work together
                </p>
                <figure className="mt-4">
                  <Image
                    src="/blogs/melius-summer-internship/agent-context-skills.png"
                    alt="Diagram showing how agent skills and team context work together"
                    width={1200}
                    height={712}
                    className="w-full object-cover"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    How agent skills and context work together
                  </figcaption>
                </figure>
                <p className="mt-4">
                  The goal of both features is ultimately to make prompting less repetitive. You
                  tell Mel what you want to create, context gives it what it should already know,
                  and your selected skills provide the task-specific instructions and references it
                  needs. A big part of building this was also figuring out the product UX and making
                  sure these features felt intuitive within the existing creative workflow.
                </p>
                <p className="mt-4">
                  Working on this ended up being one of my favorite projects because it sat at the
                  intersection of engineering, product, and creative tooling. I got to think through
                  the agent architecture, build the underlying system, and figure out how to make it
                  feel intuitive inside a creative workflow.
                </p>
                <p className="mt-4">Here&apos;s a demo of the feature.</p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/agent-settings.png"
                  alt="Agent skills and context in the Melius app settings"
                  width={1974}
                  height={906}
                  caption="Agent skills and context in the Melius app settings"
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
                  Another fun project I got to work on was the Playground. Before this, Melius
                  started off as a creative canvas where users could create generation workflows
                  together, make edits, and build out entire scenes in an infinite space. But not
                  every creative task needs a full canvas, so we wanted to give users a faster way
                  to simply type a prompt and start creating.
                </p>
                <p className="mt-4">
                  The Playground is a simpler, more intuitive way to create: you describe what you
                  want, pick a model and format, choose how many variations, and hit generate. The
                  Playground mirrored the canvas experience, making it easy for existing Melius
                  users to bring over their work while still being approachable for new users. All
                  the generations in the Playground are saved to each user’s personal history within
                  their team, making it easy to revisit their work later.
                </p>
                <p className="mt-4">
                  What I like most about how we built it is that under the hood, every Playground
                  session is still a real canvas. Nothing you make is throwaway so the moment you
                  want more control, you can open it in the full canvas and keep working with all of
                  Mel’s tools. That let the Playground lower the barrier to entry without cutting
                  anyone off from the depth underneath.
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/playground-architecture.png"
                  alt="Diagram of the Playground architecture under the hood"
                  width={1199}
                  height={247}
                  caption="The playground architecture under the hood"
                />
                <p className="mt-4">
                  This was another project that made me think hard about UX. The whole point was to
                  remove friction for people who might be intimidated by a blank canvas, so a lot of
                  the work came down to small product decisions: what information to show upfront,
                  what to hide until it was needed, how users selected models and formats, and how
                  we could make the path from an idea to a generation as simple as possible. At the
                  same time, we wanted the Playground to fit naturally into the rest of Melius, so
                  users could start with something simple and move into the canvas when they needed
                  more control or more advanced workflows. (Shoutout to Winson for the designs!)
                </p>
                <p className="mt-4">
                  This was probably the most fun project I got to work on during my internship, and
                  I was really happy with how it turned out. Seeing so many users using the
                  Playground after we shipped it was especially rewarding and made all the small
                  product and UX decisions feel worth it. Lots of learning came out of this and I
                  couldn’t have done it without Ray, who helped get it to the finish line.
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/playground-showcase.png"
                  alt="Showcase of the Playground in Melius"
                  width={1200}
                  height={804}
                  caption={
                    <>
                      <span className="block">Showcase of the Playground in Melius</span>
                      <span className="block">An example image generated in the Playground</span>
                    </>
                  }
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
                  Of course, the internship wasn&apos;t all work. Some of my favorite memories at
                  Melius came from the things we did together outside of our usual day-to-day. We
                  had team dinners, did yoga together, and generally spent a lot of time getting to
                  know each other beyond work. Most of our days ended with playing a few games of
                  Super Smash Bros.
                </p>
                <BlogFigure
                  src="/blogs/melius-summer-internship/yoga.png"
                  alt="The Melius team doing yoga in the morning"
                  width={800}
                  height={438}
                  caption="The Melius team doing yoga at 8am in the morning"
                />
                <p className="mt-4">
                  One of the highlights was our team off-site in upstate New York leading up to
                  launch. We spent three or four days together in a huge house, basically living and
                  working under the same roof. We were revamping major parts of the app, fixing
                  things that hadn&apos;t mattered as much at a smaller scale, and making sure the
                  product and infrastructure was ready for a much larger wave of users. Everyone was
                  jumping between whatever needed to get done, and it was really cool getting to
                  experience that side of building and launching a product firsthand. The off-site
                  brought us closer as a team and made the internship that much more memorable.
                </p>
                <p className="mt-4">
                  After all the prep, seeing Melius finally launch was really cool! Check out the
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
                  alt="The team working on the app during dinner at the offsite"
                  width={1199}
                  height={653}
                  caption="The team working on the app pre-launch during dinner at the offsite"
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
                  My two biggest takeaways from being on the engineering team here at Melius were
                  developing a stronger product engineering mindset and improving my communication
                  skills.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">
                    Think Like a Product Engineer
                  </span>{' '}
                  – On the product side, I learned to think beyond whether something simply works
                  and focus more on how it actually feels to use. At Melius, this was especially
                  important since we’re building for prosumers, many of whom aren’t technical, so
                  features like agents and generative models need to feel intuitive and
                  approachable. This taught me to hold a much higher bar for UX when shipping
                  customer-facing features and to care about the small details that shape the
                  overall experience.
                </p>
                <p className="mt-4">
                  <span className="font-semibold text-stone-200">Communicate Clearly</span> – I also
                  learned that communication is a huge part of being an effective engineer. Whether
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
                  Overall, I’m incredibly grateful for everything I got to experience. I came into
                  the internship hoping to grow as an engineer, but I’m leaving with a much better
                  understanding of what it means to build a product end-to-end. From owning larger
                  projects, to thinking deeply about UX, and working across different parts of the
                  stack, I was constantly learning something new.
                </p>
                <p className="mt-4">
                  What made the experience especially memorable was the amount of ownership and
                  trust I was given. Being on a small team meant I got to work on things that
                  shipped directly to customers and see the impact of what I was building. More than
                  anything, I’m grateful for the people I got to work with while building something
                  I genuinely enjoyed working on.
                </p>
                <p className="mt-4">
                  I’m excited to take everything I learned at Melius with me into whatever I build
                  next! A huge thank you to Young, Joowon, Arnav, Ray, Jahow, Alex, Winson, Samantha
                  and Max for making these past few months such a memorable experience.
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
