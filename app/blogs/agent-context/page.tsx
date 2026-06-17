'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function AgentContextBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'problem', title: 'the problem' },
      { id: 'wrong-tool', title: 'text-first thinking' },
      { id: 'iterations', title: 'ideas we tried' },
      { id: 'agent-context', title: 'agent context' },
      { id: 'under-the-hood', title: 'under the hood' },
      { id: 'not-enough', title: 'why it was not enough' },
      { id: 'skills', title: 'skills' },
      { id: 'skills-and-media', title: 'skills + media' },
      { id: 'context-vs-skills', title: 'context vs skills' },
      { id: 'lessons', title: 'what we learned' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'agent context / skills for creative tools | Nicholas Chen';
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
              agent context / skills for creative tools
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              nicholas chen · june 16, 2026 · 8 min read
            </p>

            <figure className="mb-6">
              <img
                src="/blogs/agent-context/canvas.png"
                alt="Melius canvas with interconnected image, video, and text nodes"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                A Melius canvas — nodes, edges, and generative media wired together in one workflow
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
                  , we work with a lot of creative designers, marketing teams, and growth / GTM
                  people. as ai-generated media became mainstream, more of them came to melius to
                  build creative workflows that used to take weeks — in minutes. brief mel, watch
                  the canvas assemble node by node, steer the output until it lands.
                </p>
                <p className="mt-4">
                  one request kept coming up during onboarding: let the agent use a set of
                  pre-defined custom branding for everything it generates. not just copy tone, but
                  photo style, color palette, product details, logo placement — the whole package.
                  so we built agent context.
                </p>
                <p className="mt-4">
                  this post is about how we got there. the first version was simpler than you might
                  expect. the final version required us to rethink what "context" even means on a
                  media-heavy platform.
                </p>
              </section>

              <section>
                <h2
                  id="problem"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the problem
                </h2>
                <p>
                  generative media tools are good at producing something. they are much worse at
                  producing something that looks like <em>your</em> brand. every new canvas started
                  from zero — users re-pasted brand guidelines, re-uploaded reference images, and
                  re-explained photography rules in chat. for a single hero image that is annoying.
                  for a campaign with fifty variants across six channels it is untenable.
                </p>
                <p className="mt-4">
                  our users wanted persistent branding: rules the agent would follow automatically,
                  without being re-briefed every session. the constraint was that melius is not a
                  chatbot with a text box. it is a visual canvas where agents orchestrate image,
                  video, audio, and copy nodes. whatever we built had to work across all of that.
                </p>
              </section>

              <section>
                <h2
                  id="wrong-tool"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  text-first thinking
                </h2>
                <p>
                  most ai saas products treat context as a RAG problem: chunk documents, embed them,
                  retrieve relevant pieces at query time. that works when the output is text and the
                  context is documentation. melius is different. the output is pixels and frames.
                  the context is often visual — a mood board, a logo lockup, a reference photo with
                  a specific lighting setup.
                </p>
                <p className="mt-4">
                  we spent a lot of time thinking through the user experience before writing code.
                  how would a marketing team actually apply branding across a canvas workflow? how
                  often would they switch between brand voices? would they want the agent to pick
                  reference images on its own, or always use the same ones? these questions do not
                  come up when you are building a text assistant.
                </p>
              </section>

              <section>
                <h2
                  id="iterations"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  ideas we tried
                </h2>
                <p>we went through several iterations before landing on the final design:</p>
                <ul className="mt-3 ml-4 space-y-2 text-stone-300">
                  <li>
                    • <span className="text-stone-100">context images per team.</span> store a
                    fixed set of brand images the agent could pull from. simple, but teams have
                    different workflows — a product shoot needs different references than a social
                    campaign.
                  </li>
                  <li>
                    • <span className="text-stone-100">description-based image lookup.</span> let
                    the agent find a reference image by its description ("the warm lifestyle hero
                    from Q3"). clever, but unreliable — embeddings over image descriptions are fuzzy,
                    and users could not predict what the agent would pick.
                  </li>
                  <li>
                    • <span className="text-stone-100">one giant prompt per team.</span> cram every
                    brand rule, visual preference, and product detail into a single instructions
                    field. easy to build, hard to maintain, and impossible to toggle parts on and
                    off.
                  </li>
                </ul>
                <p className="mt-4">
                  the pattern that kept emerging from user feedback: teams wanted general guidelines
                  that always apply, plus specific instruction packages they could turn on and off
                  depending on the workflow. that split became the foundation of the final design.
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
                  the first piece we shipped was team-wide context — a free-form text prompt (up to
                  4,000 characters) that applies to every agent call across all projects and
                  canvases within a team. think of it as the baseline rules mel should never forget:
                  brand voice, color palette, naming conventions, things to avoid.
                </p>
                <p className="mt-4">good things to put in context:</p>
                <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                  <li>• use a polished editorial tone.</li>
                  <li>• prefer square compositions unless the user asks otherwise.</li>
                  <li>• never use competitor logos.</li>
                  <li>• our brand colors are cobalt blue, white, and charcoal.</li>
                </ul>
                <figure className="mt-6">
                  <img
                    src="/blogs/agent-context/pocky-skill.jpeg"
                    alt="Melius agent settings showing Pocky brand context — voice, palette, and naming rules"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Team context in Melius — brand voice, hex codes, and naming rules that run on
                    every agent call
                  </figcaption>
                </figure>
                <p className="mt-4">
                  bad things to put in context: one-off task instructions ("make this image taller")
                  or workflow-specific rules that only apply sometimes ("for product shots, use a
                  white backdrop"). those belong elsewhere.
                </p>
              </section>

              <section>
                <h2
                  id="under-the-hood"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  under the hood
                </h2>
                <p>
                  the implementation is deliberately boring — and that is the point. we modeled the
                  database like this:
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`table team.custom_context
├── id           uuid
├── team_id      uuid  → teams.id
├── name         text  ("Brand voice", "Photo style", ...)
└── instructions text  (free-form prompt, up to 4k chars)`}
                </pre>
                <p className="mt-4">
                  each team has a row in <code className="text-stone-200">custom_context</code> with
                  an <code className="text-stone-200">instructions</code> column. when the agent
                  runs, we load that row, wrap it in a message, and prepend it to the llm call. no
                  vector store. no chunking. no retrieval step. it is just a string that gets pasted
                  into the prompt on every turn.
                </p>
                <p className="mt-4">
                  we chose simplicity over sophistication because the failure mode of RAG on brand
                  guidelines is subtle — the agent might retrieve the wrong chunk, miss a critical
                  "never do X" rule, or hallucinate a style that was not in the retrieved context.
                  for rules that must always apply, always injecting the full text is more reliable
                  than hoping retrieval gets it right.
                </p>
                <p className="mt-4">
                  the tradeoff is token cost. 4,000 characters on every call adds up. but for teams
                  running high-volume creative workflows, consistent branding is worth more than
                  saving a few hundred tokens per request.
                </p>
              </section>

              <section>
                <h2
                  id="not-enough"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  why it was not enough
                </h2>
                <p>
                  agent context, at the end of the day, was just a system prompt. it worked for
                  general guidelines — tone, palette, global rules — but it did not let users cater
                  to their actual workflow needs. a team doing both product photography and social
                  campaign copy does not want the same detailed instructions active for both. forcing
                  everything into one prompt made it long, brittle, and impossible to partially
                  disable.
                </p>
                <p className="mt-4">
                  users also wanted to attach media to context — reference images, mood boards, logo
                  files — but with the ability to use different visual references for different
                  workflows. a single text field cannot express "use this pack shot style for product
                  nodes but this lifestyle reference for social nodes."
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
                  that is where skills came in. we defined skills as reusable agent context packages
                  stored within a team — separate instruction sets that can be applied on demand and
                  toggled on and off per message. instead of one giant prompt, teams create skills
                  for different workflows:
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`/portrait-retouch

Retouch portraits naturally. Preserve skin texture,
avoid plastic smoothing, keep lighting realistic,
and do not change facial identity.`}
                </pre>
                <p className="mt-4">
                  to use a skill, you type its slash command at the start of an agent message, or
                  select it from the chat dropdown. active skills show up as chips in the input and
                  are applied only to that message — not baked into every call like context is.
                </p>
                <p className="mt-4">
                  this decision came after many rounds of testing and user feedback. skills were the
                  best fit for instructions that are specific, workflow-dependent, and frequently
                  switched — photo retouching rules for one canvas, campaign copy guidelines for
                  another, product shot constraints for a third.
                </p>
              </section>

              <section>
                <h2
                  id="skills-and-media"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  skills + media
                </h2>
                <p>
                  traditionally, "skills" in agent systems are text-only prompt presets. we did
                  something different: skills can include reference images. when you select a skill
                  with images attached, mel can use those images as references for generation. they
                  are not added to the canvas automatically — they are injected into the model call
                  as visual context, the same way a user might drag a mood board into a prompt.
                </p>
                <p className="mt-4">
                  this was the use case that reinforced the skills model. teams wanted different
                  types of branding or themes available as opt-in packages: a product photography
                  skill with pack shot references, a social campaign skill with lifestyle mood
                  boards, a motion skill with animation style frames. context handles the always-on
                  rules; skills handle the situational ones, text and images together.
                </p>
                <p className="mt-4">
                  teams can also import skills from markdown files — the file's name frontmatter or
                  first heading becomes the skill name, and the body becomes the instructions. that
                  makes it easy to version-control brand workflows alongside code.
                </p>
              </section>

              <section>
                <h2
                  id="context-vs-skills"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  context vs skills
                </h2>
                <p>the split ended up clean:</p>
                <ul className="mt-3 ml-4 space-y-2 text-stone-300">
                  <li>
                    • <span className="text-stone-100">context</span> — rules that should always
                    apply. brand voice, global constraints, naming conventions. prepended on every
                    agent turn.
                  </li>
                  <li>
                    • <span className="text-stone-100">skills</span> — reusable instructions that
                    apply only when selected. workflow-specific rules, style presets, reference
                    images. toggled per message via slash commands.
                  </li>
                  <li>
                    • <span className="text-stone-100">chat prompt</span> — one-off instructions
                    for the current task. "make this image taller," "add a gradient background."
                  </li>
                </ul>
                <p className="mt-4">
                  three layers, three lifetimes. context is permanent, skills are reusable, the chat
                  prompt is ephemeral. that separation maps to how creative teams actually work: a
                  brand book that never changes, a set of production playbooks for different
                  deliverables, and ad-hoc direction on the specific asset in front of them.
                </p>
              </section>

              <section>
                <h2
                  id="lessons"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  what we learned
                </h2>
                <p>
                  building context for a media platform taught us a few things that would not have
                  been obvious from building a text assistant:
                </p>
                <ul className="mt-3 ml-4 space-y-2 text-stone-300">
                  <li>
                    • <span className="text-stone-100">simplicity beats retrieval for always-on
                    rules.</span> a string prepended to every call is less elegant than RAG, but
                    more predictable. for brand guidelines, predictability wins.
                  </li>
                  <li>
                    • <span className="text-stone-100">one prompt does not fit all
                    workflows.</span> creative teams switch contexts constantly. skills let them
                    do that without maintaining multiple team accounts or duplicating projects.
                  </li>
                  <li>
                    • <span className="text-stone-100">images are context too.</span> attaching
                    reference media to skills — not just text — was the feature that made the
                    whole system click for design-heavy teams.
                  </li>
                  <li>
                    • <span className="text-stone-100">the ux matters as much as the
                    architecture.</span> the hardest part was not the database schema or the llm
                    integration. it was figuring out when users want rules to be permanent vs.
                    opt-in, and designing the interface so that distinction is obvious.
                  </li>
                </ul>
                <p className="mt-4">
                  if you are building agent tooling for creative workflows, the question is not
                  "how do we give the agent more context?" it is "which context should be permanent,
                  which should be selectable, and which should live only in the current message?"
                  get that split right and the rest follows.
                </p>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  references
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a
                      href="https://www.melius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md hover:bg-orange-500/10 hover:text-orange-500 transition-colors underline"
                    >
                      melius.com — the creative canvas for agents
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.melius.com/settings/agent.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md hover:bg-orange-500/10 hover:text-orange-500 transition-colors underline"
                    >
                      docs.melius.com — agent settings (context & skills)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.melius.com/help-center/marketers/brand-anchor.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md hover:bg-orange-500/10 hover:text-orange-500 transition-colors underline"
                    >
                      docs.melius.com — brand anchor guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.melius.com/mcp/overview.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md hover:bg-orange-500/10 hover:text-orange-500 transition-colors underline"
                    >
                      docs.melius.com — MCP server overview
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
