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
      { id: 'brainstorming', title: 'brainstorming ideas' },
      { id: 'agent-context', title: 'agent context' },
      { id: 'evals', title: 'evals' },
      { id: 'agent-skills', title: 'agent skills' },
      { id: 'mcp', title: 'the mcp' },
      { id: 'references', title: 'references' },
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
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                melius canvas with generated media and agent workflow nodes
              </figcaption>
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
                  team&apos;s generated media.
                </p>
                <p className="mt-4">
                  skills are more specific presets that the agent can apply for a certain type of
                  output, like a brand style, product shot direction or repeatable creative workflow.
                </p>
              </section>

              <section>
                <h2
                  id="brainstorming"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  brainstorming ideas
                </h2>
                <p>
                  before building out this feature, we thought a lot and iterated upon our
                  initial ideas many times. having to think through the user experience and how users
                  would actually use and apply agent context to their generative media workflows was
                  different from the traditional ai saas tool because our platform is a canvas filled
                  with generated media vs a large amount of text. we went through ideas of having context images per team,
                  skills and also allowing the agent to reference an image based on its description.
                </p>
                <p className="mt-4">
                  the final solution we landed on that was actually scalable was to have a general
                  text prompt for each team&apos;s context and store each team&apos;s specific custom
                  branding / styles under different skills.
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
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    team-level agent context for shared brand guidelines
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="evals"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  evals
                </h2>
                <p>
                  we also used braintrust-backed evals to make sure agent context was doing the
                  right things. our eval harness creates real projects, canvases and agent sessions
                  against the deployed api, attaches fixture-defined custom context, runs the agent
                  conversation and then scores the final canvas and messages. for example, a canary
                  might attach a brand rule, ask the agent to create a campaign or visual direction
                  and then check that the generated text still includes the required phrase or style.
                </p>
                <p className="mt-4">
                  braintrust gives us a place to log each run, inspect the canvas url, compare
                  outputs across changes and track telemetry like prompt size, image count, tool
                  calls, latency and reasoning tokens. today these are mostly custom-context
                  adherence canaries, but the same fixture setup supports multi-turn follow-up
                  prompts for testing whether older context still survives after a longer workflow.
                </p>
                <p className="mt-4">
                  an eval for this kind of case could look something like this:
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`cases:
  - id: canary-brand-context-survives-followups
    prompt: "create a launch concept for nova studio."
    custom_context:
      name: "nova studio brand rules"
      instructions: |
        keep the tone calm and editorial.
        use the phrase "designed for creative teams".
        avoid hype words like revolutionary or game-changing.
    follow_up_prompts:
      - "add three image directions."
      - "turn those into a short campaign outline."
      - "now write the final headline and subheadline."
    expected:
      generated_text_contains_all:
        - "designed for creative teams"
      generated_text_excludes_all:
        - "revolutionary"
        - "game-changing"`}
                </pre>
              </section>

              <section>
                <h2
                  id="agent-skills"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  agent skills
                </h2>
                <p>
                  agent context, at the end of the day was just a system prompt and didn&apos;t
                  allow our users to really cater to their specific workflow needs.
                </p>
                <p className="mt-4">
                  this is why we added skills. we defined skills more as a way for users to utilize multiple different types of
                  agent context packages that could all be stored within a team. instead of forcing every brand rule, visual
                  preference, and product detail instruction into one giant prompt, we made it
                  possible for teams to create separate skills for different workflows. this decision
                  was made after many iterations of testing and user feedback. we figured that skills
                  were the best for these specific instructions to be applied to the agent, but also
                  be able to have it turned on / off frequently.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/skills.png"
                    alt="Melius skills page showing a 3d art design skill and controls to import or add skills"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    skills list with a reusable 3d art design prompt
                  </figcaption>
                </figure>
                <p className="mt-4">
                  we also added images to skills so users could reference visual examples directly
                  when they wanted a certain brand look, product direction or theme. traditionally,
                  skills were not for images, but we did something different and made those reference
                  images part of the skill itself.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/skill-edit.png"
                    alt="Melius edit skill modal showing name, description, instructions, and reference images"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    edit skill modal with instructions and image references
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="mcp"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the mcp
                </h2>
                <p>
                  the mcp was also a core part of the product because a lot of users work with melius
                  through external agent surfaces. mcp is not the same thing as skills. skills define
                  reusable behavior, while mcp is the tool and context bridge that lets an external
                  agent access melius capabilities and apply those skills to live product state.
                </p>
                <p className="mt-4">
                  instead of stuffing every skill, canvas detail, model capability and asset into the
                  initial prompt, the agent can fetch only what it needs. for skills, that means an
                  agent can list team skills, load a specific skill, load its image assets and then
                  use that context before planning nodes, prompts, edges, models or generations. one
                  tricky part was working around the overloaded word skills: claude mcp skills and
                  melius skills are not the same object, so we had to make the mcp instructions clear
                  about when to load a melius team skill versus when to rely on the agent&apos;s own
                  skill system.
                </p>
                <p className="mt-4">
                  mcp also became an engineering boundary. external agents should not directly poke
                  database tables or internal service methods; they should call declared tools with
                  schemas and instructions. once we had multiple agent surfaces, the native agent
                  prompt and mcp instructions also had to keep shared canvas and domain rules in sync
                  so behavior did not drift between the in-app agent and external agents.
                </p>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3
                  id="references"
                  className="text-sm md:text-base font-semibold text-stone-200 mb-3 scroll-mt-8"
                >
                  references
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a
                      href="https://www.melius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      melius.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.melius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      docs.melius.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://agentskills.io/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      agentskills.io/home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.braintrust.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      braintrust.dev
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modelcontextprotocol.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      modelcontextprotocol.io
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
