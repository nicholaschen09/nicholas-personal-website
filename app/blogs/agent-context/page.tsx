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
      { id: 'evals', title: 'evals for agent context' },
      { id: 'agent-skills', title: 'agent skills' },
      { id: 'mcp', title: 'mcp' },
      { id: 'whats-next', title: "what's next?" },
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
              nicholas chen · june 17, 2026 · 8 min read
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
                  that gets pasted into the prompt on every turn. our in-app agent runs on gemini
                  3.5 flash, so keeping the context small and predictable mattered. the prompt is
                  defined for all the projects / canvases within a team because we thought it would
                  be a good idea to allow users to have some general guidelines for the agent to
                  follow.
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
                <p className="mt-4">
                  because agent context is set at the team level, it is automatically applied to
                  every agent call across that team&apos;s projects and canvases. users do not have
                  to remember to re-add the same brand rules each time; the agent always receives
                  that shared context before deciding what to create.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/context-canvas.png"
                    alt="Melius canvas showing Pocky product shot variations generated with agent context"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    pocky product shot variations generated with agent context
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="evals"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  evals for agent context
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
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/braintrust-evals.png"
                    alt="Braintrust eval comparison table showing graph integrity scores for agent runs"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    braintrust comparison view for agent context eval runs
                  </figcaption>
                </figure>
                <p className="mt-4">
                  the example below is a simplified version of one of those canaries. it seeds a
                  project with a small custom context block, asks the agent to create an initial
                  concept, then sends a few follow-up prompts to make sure the same context survives
                  across the whole conversation. the scorer checks that the required brand phrase is
                  still present and that banned language does not creep back into the final output.
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
                <p className="mt-4">
                  the db model for saved team skills was pretty simple: one main team-scoped skill
                  table for metadata and instructions, plus a join table that attaches optional image
                  assets through our shared asset system.
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`table team.agent_skill
├── id                 uuid
├── team_id            uuid  → team.team
├── created_by_user_id uuid  → team member
├── name               text
├── kind               enum  (USE_CASE | BRAND_IDENTITY)
├── description        text
├── instructions       text  (the reusable prompt / procedure)
└── deleted_at         timestamp

table team.agent_skill_asset
├── id             uuid
├── team_id        uuid  → team.team
├── agent_skill_id uuid  → team.agent_skill
├── asset_id       uuid  → asset.asset
├── description    text
└── deleted_at     timestamp`}
                </pre>
                <p className="mt-4">
                  skills are soft-deleted, scoped by team and unique by name within a team while
                  they are active. image files do not live directly on the skill row; the join table
                  points to normal asset records created with an agent-skill source. those asset
                  records store the actual file metadata like media type, s3 bucket, s3 key, file
                  type and file size, while the skill asset row stores the relationship and optional
                  per-image description. the slash command is also not stored in the db. it is
                  derived from the skill name at response time, which keeps the stored model small
                  while still letting users invoke a skill from chat.
                </p>
                <p className="mt-4">
                  imported skills go through the same normalization path too: we parse the imported
                  instructions and metadata into the team skill model instead of treating them as a
                  separate runtime concept.
                </p>
                <p className="mt-4">
                  we also added product limits around the model: up to 200 skills per team, 20 images
                  per skill, 10 mb per image, 80 characters for the skill name, 200 for the
                  description and 50,000 for instructions.
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
                <p className="mt-4">
                  we also shared a short{' '}
                  <a
                    href="https://x.com/trymelius/status/2066941446247108899?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 underline hover:text-orange-500 transition-colors"
                  >
                    demo
                  </a>
                  {' '}for agent skills!
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
                <p className="mt-4">
                  applying a skill had two separate paths: skill text and skill assets. the text path
                  starts in chat, where the selected skill instructions are wrapped with delimiters
                  before the actual user message.
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`⟦skill:/some-skill⟧
...skill instructions...
⟦/skill⟧
actual user message`}
                </pre>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/skill-applied-canvas.png"
                    alt="Melius canvas where a 3d art design skill is applied to generate a translucent crystal bird"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    applied 3d art design skill generating a crystal bird on canvas
                  </figcaption>
                </figure>
                <p className="mt-4">
                  on the backend, those leading skill blocks are parsed out of the user&apos;s actual
                  request and turned into a separate model message for the turn. the final model
                  context is ordered roughly as prior messages, custom context, applied skill context
                  and then the current user prompt. importantly, the skill text is not secretly
                  copied into every node prompt. it is used as context for deciding what to do.
                </p>
                <p className="mt-4">
                  skill assets take a different path. they are stored as normal asset records and
                  linked through the skill asset table, then loaded at runtime as signed image urls.
                  those urls are used as hidden generation inputs, not visible chat attachments,
                  canvas file nodes or canvas edges. if no skill is applied, hidden image urls are
                  rejected; if a skill is applied, the backend loads image assets for that skill,
                  dedupes them and injects them into image or video generations.
                </p>
              </section>

              <section>
                <h2
                  id="mcp"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  mcp
                </h2>
                <p>
                  one of the core features of the melius product is the mcp, and because of that, a
                  lot of users work with melius through external agent surfaces. skills define
                  reusable behavior, so with mcp, the tool and context bridge lets an external agent
                  access melius capabilities, apply those skills and create workflows on our
                  node-based canvas.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/mcp-team-skills.png"
                    alt="Claude.ai using Melius MCP tools to list team skills"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    claude.ai listing melius team skills through mcp
                  </figcaption>
                </figure>
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

              <section>
                <h2
                  id="whats-next"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  what&apos;s next?
                </h2>
                <p>
                  we are also looking into agent learning, where the agent could improve from how
                  teams repeatedly use context, skills and the canvas over time. that may or may not
                  be implemented soon, but it is one direction we have been thinking about as these
                  workflows become more personalized.
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
                      href="https://app.melius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500 underline"
                    >
                      app.melius.com
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
