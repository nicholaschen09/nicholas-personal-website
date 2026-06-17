'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function AgentContextBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-are-context-and-skills', title: 'what are context and skills?' },
      { id: 'brainstorming', title: 'brainstorming' },
      { id: 'final-solution', title: 'the final solution' },
      { id: 'agent-context', title: 'agent context' },
      { id: 'skills', title: 'skills' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'agent context and skills for creative tools | Nicholas Chen';
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
              agent context and skills for creative tools
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              nicholas chen · june 16, 2026 · 5 min read
            </p>

            <figure className="mb-6">
              <img
                src="/blogs/agent-context/canvas.png"
                alt="Melius canvas with interconnected image, video, and text nodes"
                className="w-full"
              />
            </figure>
            <hr className="border-stone-700 mb-8" />

            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>
                  at{' '}
                  <a
                    href="https://www.melius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 underline hover:text-orange-500 transition-colors"
                  >
                    melius
                  </a>
                  , we work with lots of creative designers, marketing teams and growth / GTM
                  people. recently, there has been a rise in ai generated media and many people come
                  to melius to build their creative workflows for what would usually take weeks in
                  minutes.
                </p>
                <p className="mt-4">
                  as we onboarded more and more users, a request that often came up was allowing the
                  agent to use a set of pre-defined custom branding for all of the generative media
                  it creates. so, we built agent context.
                </p>
              </section>

              <section>
                <h2
                  id="what-are-context-and-skills"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  what are context and skills?
                </h2>
                <p>
                  context is the shared instruction layer for the agent. it captures the brand,
                  product details, visual preferences and other defaults that should show up across a
                  team&apos;s generated media. skills are more specific presets that the agent can
                  apply for a certain type of output, like a brand style, product shot direction or
                  repeatable creative workflow.
                </p>
              </section>

              <section>
                <h2
                  id="brainstorming"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  brainstorming
                </h2>
                <p>
                  before building out this feature, we thought a lot and iterated upon our
                  initial ideas many times. having to think through the user experience and how users
                  would actually use and apply agent context to their generative media workflows was
                  different from the traditional ai saas tool because our platform is a canvas filled
                  with generated media vs a large amount of text. we went through ideas of having context images per team,
                  skills and also allowing the agent to reference an image based on its description.
                </p>
              </section>

              <section>
                <h2
                  id="final-solution"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the final solution
                </h2>
                <p>
                  the final solution we landed on that was actually scalable was to have a general
                  text prompt for each team&apos;s context and store the team&apos;s specific custom
                  branding / styles each under different skills.
                </p>
              </section>

              <section>
                <h2
                  id="agent-context"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  agent context
                </h2>
                <p>
                  we modeled the db to look like this for the text instructions in agent context:
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`table team.custom_context
├── id           uuid
├── team_id      uuid  → teams.id
├── name         text  ("Brand voice", "Photo style", ...)
└── instructions text  (the free-form prompt, up to 4k chars)`}
                </pre>
                <p className="mt-4">
                  each team has a row in a custom_context table with a text column called
                  instructions. when the agent runs, we load that row, wrap it in a message, and
                  prepend it to the llm call. no vector store, no chunking, it&apos;s just a string
                  that gets pasted into the prompt on every turn. the prompt is defined for all the
                  projects / canvases within a team because we thought it would be a good idea to
                  allow users to have some general guidelines for the agent to follow.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/pocky-skill.jpeg"
                    alt="Melius agent settings showing team context with brand guidelines"
                    className="w-full"
                  />
                </figure>
                <p className="mt-4">
                  agent context, at the end of the day was just a system prompt and didn&apos;t
                  allow our users to really cater to their specific workflow needs.
                </p>
              </section>

              <section>
                <h2
                  id="skills"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  skills
                </h2>
                <p>
                  this is why we added skills. apart from general instructions, we also added skills.
                  we defined skills more as a way for users to utilize multiple different types of
                  agent context packages that could all be stored within a team. instead of forcing every brand rule, visual
                  preference, and product detail instruction into one giant prompt, we made it
                  possible for teams to create separate skills for different workflows. this decision
                  was made after many iterations of testing and user feedback. we figured that skills
                  were the best for these specific instructions to be applied to the agent, but also
                  be able to have it turned on / off frequently. we also wanted users to add media to
                  context, but considered that they would likely want different types of branding or
                  themes. this was another use-case that reinforced adding skills. traditionally,
                  skills were not for images, but we did something different and added that in our
                  app!
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/skills.png"
                    alt="Melius skills page showing a 3d art design skill and controls to import or add skills"
                    className="w-full"
                  />
                </figure>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/skill-edit.png"
                    alt="Melius edit skill modal showing name, description, instructions, and reference images"
                    className="w-full"
                  />
                </figure>
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
