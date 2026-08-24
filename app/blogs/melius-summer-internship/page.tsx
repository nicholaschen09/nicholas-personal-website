'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

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
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="contents" />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
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

            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              my summer internship with melius
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              nicholas chen · august 20, 2026 · 7 min read
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
              <figcaption className="text-stone-500 text-xs mt-4 text-center italic">
                the Melius team in the office
              </figcaption>
            </figure>
            <hr className="border-stone-700 mb-8" />

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
                  my internship at Melius has been an awesome learning experience for me as an
                  engineer and a creative. over the past few months, i had the opportunity to work
                  on small and large projects that directly impacted customers, while also getting
                  to see the product scale and the team grow alongside it. as i wrap up my last
                  week, i wanted to summarize everything i worked on, learned, and enjoyed about
                  Melius.
                </p>
                <p className="mt-4">
                  for context, Melius is an agents lab for creatives, marketing teams, and
                  filmmakers to generate beautiful scenes and videos with access to image and video
                  models through a single interface. Mel, our AI agent, does the tedious work, so
                  users are able to generate anything from their imagination without ever leaving
                  the app.
                </p>
                <p className="mt-4">
                  in the past, i have worked at other startups and larger companies, but at Melius,
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
                  our agent. the idea originally came up when we wanted Mel to follow certain
                  instructions, but only during specific sessions. when we first started
                  brainstorming solutions, we looked at how skills and context are typically used
                  with AI agents. both can essentially be represented as Markdown files containing
                  instructions for the model, but the key difference is when they are applied.
                  context is applied automatically on every agent turn, while skills are selectively
                  applied when they are relevant to a specific task.
                </p>
                <p className="mt-4">
                  since Melius offers a creative canvas, we also wanted our skills to go beyond the
                  typical Markdown file. a lot of creative direction is easier to show than
                  describe, so we designed our skills to include reference images alongside written
                  instructions. this opens up a bunch of useful workflows: a product photography
                  skill could include instructions and references for a specific composition, while
                  a character skill could help maintain consistency across generations. context, on
                  the other hand, could capture things that should always apply, like team
                  conventions, brand guidelines, or other preferences Mel should know on every turn.
                </p>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mt-6 mb-3">
                  how agent skills and context work together
                </h3>
                <p>
                  the goal of both features is ultimately to make prompting less repetitive. you
                  tell Mel what you want to create, context gives it what it should already know,
                  and your selected skills provide the task-specific instructions and references it
                  needs. a big part of building this was also figuring out the product UX and making
                  sure these features felt intuitive within the existing creative workflow.
                </p>
                <p className="mt-4">
                  working on this ended up being one of my favorite projects because it sat at the
                  intersection of engineering, product, and creative tooling. i got to think through
                  the agent architecture, build the underlying system, and figure out how to make it
                  feel intuitive inside a creative workflow.
                </p>
              </section>

              <section>
                <h2
                  id="playground"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the playground
                </h2>
                <p>
                  another fun project i got to work on was the Playground. before this, Melius
                  started off as a creative canvas where users could create generation workflows
                  together, make edits, and build out entire scenes in an infinite space. but not
                  every creative task needs a full canvas, so we wanted to give users a faster way
                  to simply type a prompt and start creating.
                </p>
                <p className="mt-4">
                  the Playground is a simpler, more intuitive way to create: you describe what you
                  want, pick a model and format, choose how many variations, and hit generate. the
                  Playground mirrored the canvas experience, making it easy for existing Melius
                  users to bring over their work while still being approachable for new users. all
                  the generations in the Playground are saved to each user's personal history within
                  their team, making it easy to revisit their work later.
                </p>
                <p className="mt-4">
                  what i like most about how we built it is that under the hood, every Playground
                  session is still a real canvas. nothing you make is throwaway, so the moment you
                  want more control, you can open it in the full canvas and keep working with all of
                  Mel's tools. that let the Playground lower the barrier to entry without cutting
                  anyone off from the depth underneath.
                </p>
                <p className="mt-4">
                  this was another project that made me think hard about UX. the whole point was to
                  remove friction for people who might be intimidated by a blank canvas, so a lot of
                  the work came down to small product decisions: what information to show upfront,
                  what to hide until it was needed, how users selected models and formats, and how
                  we could make the path from an idea to a generation as simple as possible.
                </p>
                <p className="mt-4">
                  this was probably the most fun project i got to work on during my internship, and
                  i was really happy with how it turned out. seeing so many users using the
                  Playground after we shipped it was especially rewarding and made all the small
                  product and UX decisions feel worth it. lots of learning came out of this and i
                  couldn't have done it without Ray, who helped get it to the finish line.
                </p>
              </section>

              <section>
                <h2
                  id="work-hard-play-hard"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  work hard, play hard
                </h2>
                <p>
                  of course, the internship was not all work. some of my favorite memories at Melius
                  came from the things we did together outside of our usual day-to-day. we had team
                  dinners, did yoga together, and generally spent a lot of time getting to know each
                  other beyond work. most of our days ended with playing a few games of Super Smash
                  Bros.
                </p>
                <p className="mt-4">
                  one of the highlights was our team off-site in upstate New York leading up to
                  launch. we spent three or four days together in a huge house, basically living and
                  working under the same roof. we were revamping major parts of the app, fixing
                  things that had not mattered as much at a smaller scale, and making sure the
                  product and infrastructure were ready for a much larger wave of users.
                </p>
                <p className="mt-4">
                  everyone was jumping between whatever needed to get done, and it was really cool
                  getting to experience that side of building and launching a product firsthand. the
                  off-site brought us closer as a team and made the internship that much more
                  memorable. after all the prep, seeing Melius finally launch was really cool.
                </p>
              </section>

              <section>
                <h2
                  id="takeaways"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  key takeaways
                </h2>
                <p>
                  my two biggest takeaways from being on the engineering team at Melius were
                  developing a stronger product engineering mindset and improving my communication
                  skills.
                </p>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mt-6 mb-3">
                  think like a product engineer
                </h3>
                <p>
                  on the product side, i learned to think beyond whether something simply works and
                  focus more on how it actually feels to use. at Melius, this was especially
                  important since we were building for prosumers, many of whom are not technical, so
                  features like agents and generative models need to feel intuitive and
                  approachable. this taught me to hold a much higher bar for UX when shipping
                  customer-facing features and to care about the small details that shape the
                  overall experience.
                </p>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mt-6 mb-3">
                  communicate clearly
                </h3>
                <p>
                  i also learned that communication is a huge part of being an effective engineer.
                  whether it is discussing technical decisions with other engineers or explaining
                  ideas to non-engineers, being able to communicate clearly and efficiently keeps
                  everyone aligned and allows the team to move faster.
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
                  overall, i am incredibly grateful for everything i got to experience. i came into
                  the internship hoping to grow as an engineer, but i am leaving with a much better
                  understanding of what it means to build a product end-to-end. from owning larger
                  projects, to thinking deeply about UX, and working across different parts of the
                  stack, i was constantly learning something new.
                </p>
                <p className="mt-4">
                  what made the experience especially memorable was the amount of ownership and
                  trust i was given. being on a small team meant i got to work on things that
                  shipped directly to customers and see the impact of what i was building. more than
                  anything, i am grateful for the people i got to work with while building something
                  i genuinely enjoyed working on.
                </p>
                <p className="mt-4">
                  i am excited to take everything i learned at Melius with me into whatever i build
                  next. a huge thank you to Young, Joowon, Arnav, Ray, Jahow, Alex, Winson,
                  Samantha, and Max for making these past few months such a memorable experience.
                </p>
              </section>
            </div>
          </article>
        </ImageLightbox>
      </div>
      <Footer />
    </main>
  );
}
