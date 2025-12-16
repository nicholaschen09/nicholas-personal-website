'use client';

import Link from 'next/link';

export default function ContextCompactionBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-8 text-sm px-2 py-1 -ml-2 rounded-md"
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
          context compaction
        </h1>
        <p className="text-stone-500 text-sm mb-6">nicholas chen · december 16, 2025 · 8 min read</p>

        {/* Cover image - you can add one later */}
        {/* <img src="/blogs/context-compaction/cover.png" alt="Context Compaction" className="w-full mb-6" /> */}
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              language models have a fundamental limitation: they can only process a fixed amount of text at once. this context window determines how much conversation history, code, or documents the model can "see" when generating a response. as we push ai systems to handle longer conversations and more complex tasks, we hit this wall constantly. context compaction is the technique that helps us break through it.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the context window problem
            </h2>
            <p>
              imagine trying to debug a large codebase with an ai assistant. you need the model to see the error message, the relevant code files, the test cases, and the conversation history about what you've tried. that's easily tens of thousands of tokens. most models max out at 128k tokens, and some are much smaller.
            </p>
            <p className="mt-4">
              the naive solution is to just use a bigger context window. but this has problems: longer contexts are slower and more expensive to process, attention degrades over long sequences (models lose focus), and most importantly, you eventually hit the hard limit no matter how large the window is.
            </p>
            <p className="mt-4">
              context compaction gives us a smarter approach: compress the information we need into a smaller representation that preserves what matters.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              how context compaction works
            </h2>
            <p>
              the core idea is simple: use the model itself to summarize and compress information. instead of keeping every message in a conversation, you periodically compress older messages into a condensed summary.
            </p>
            <p className="mt-4">
              here's a typical flow: you keep the most recent messages in full detail, compress the middle section of the conversation into a summary, and potentially discard or archive very old information that's no longer relevant.
            </p>
            <p className="mt-4">
              the key insight is that not all information has equal value. recent context usually matters more than old context. specific technical details matter more than casual conversation. the compaction strategy should preserve what's important and compress what isn't.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              different compaction strategies
            </h2>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              sliding window
            </h3>
            <p>
              the simplest approach: keep only the last n tokens. this works for many chat applications where old conversation doesn't matter. but you lose all historical context, which breaks down for complex multi-turn tasks.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              summarization
            </h3>
            <p>
              use the llm to generate a summary of older messages. for example, compress the last 20 messages into a 200-word summary of key points and decisions made. this preserves important information while dramatically reducing token count.
            </p>
            <p className="mt-4">
              the challenge is deciding what to summarize. you want to preserve: decisions and outcomes from the conversation, important context about the task or codebase, specific technical details that might be referenced later, and user preferences or constraints.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              semantic compression
            </h3>
            <p>
              instead of text summaries, encode information into embeddings. you can store large amounts of context as vectors and retrieve relevant pieces when needed. this is essentially rag (retrieval-augmented generation) applied to conversation history.
            </p>
            <p className="mt-4">
              this works well for coding assistants: embed all the code files, functions, and documentation. when the user asks a question, retrieve the most relevant pieces. store conversation history as embeddings and pull in relevant past exchanges.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              hierarchical compression
            </h3>
            <p>
              compress at multiple levels of detail. keep recent messages verbatim, compress medium-old messages into summaries, and compress very old messages into one-line takeaways or key facts.
            </p>
            <p className="mt-4">
              this mimics how human memory works - recent events are vivid, older memories are summarized, and very old memories are just key facts.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              practical implementation
            </h2>
            <p>
              implementing context compaction requires careful engineering. you need to monitor token usage in real-time, trigger compaction before hitting the context limit, and preserve critical information that must not be lost.
            </p>
            <p className="mt-4">
              a typical implementation might work like this: track current token count after each exchange. when you hit 80% of the context limit, identify the oldest "compactable" messages (usually skip the system prompt and recent messages). send those messages to the llm with a prompt like "summarize these messages preserving all important decisions, technical details, and context." replace the original messages with the summary.
            </p>
            <p className="mt-4">
              one critical detail: you need to preserve message structure. if you're building a coding assistant, don't compress code changes or function definitions - those need to stay exact. compress the conversational reasoning instead.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              when compaction fails
            </h2>
            <p>
              context compaction isn't magic. it has real failure modes that you need to handle.
            </p>
            <p className="mt-4">
              information loss is inevitable. summarization is lossy compression. you will lose details, and sometimes those details matter. a user might reference something from 50 messages ago that got compressed away.
            </p>
            <p className="mt-4">
              compaction costs tokens too. every time you summarize, you're running an llm call. for very long conversations, you might spend more tokens on summarization than you save.
            </p>
            <p className="mt-4">
              timing matters. compress too early and you lose useful context. compress too late and you hit the context limit. finding the right trigger point requires experimentation.
            </p>
            <p className="mt-4">
              the solution is to be strategic: identify what absolutely cannot be compressed (system prompts, current task context, recent code changes) and what can safely be summarized (conversational back-and-forth, explanations that led to a decision, exploratory questions). give users control - let them mark important messages as "don't compress" or manually trigger compaction.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              advanced techniques
            </h2>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              learned compression
            </h3>
            <p>
              train a specialized model to compress context. instead of using the llm itself for summarization, train a smaller, faster model specifically for this task. this can be much more efficient and preserve task-specific information better.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              selective attention
            </h3>
            <p>
              some newer architectures support "sparse attention" where the model only pays attention to relevant parts of the context. this is built into the model rather than requiring explicit compression, but achieves similar goals.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              external memory
            </h3>
            <p>
              store information in a structured database rather than as text. for coding assistants, maintain a graph of the codebase structure, function calls, and dependencies. pull in only the relevant subgraph for each query.
            </p>
            <p className="mt-4">
              this is more complex but can be dramatically more efficient than text-based approaches.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the future of context
            </h2>
            <p>
              context windows keep growing. we've gone from 4k tokens to 128k to experimental models with millions of tokens. but this doesn't make compaction obsolete - it just changes the trade-offs.
            </p>
            <p className="mt-4">
              longer contexts enable new use cases: analyzing entire codebases at once, processing hours of conversation history, and reading complete books for analysis. but they're still limited, and compaction techniques make them go further.
            </p>
            <p className="mt-4">
              the real breakthrough will be models that handle compression natively. imagine a model that automatically identifies what to "remember" in detail versus what to compress, learns over time what information is important for different types of tasks, and seamlessly retrieves compressed information when needed.
            </p>
            <p className="mt-4">
              we're moving toward ai systems with much more human-like memory - detailed short-term memory, compressed long-term memory, and the ability to recall specific details when needed. context compaction is a stepping stone toward that future.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              practical takeaways
            </h2>
            <p>
              if you're building with llms, here's what to implement:
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• monitor token usage and plan for compaction before hitting limits</li>
              <li>• preserve recent messages and critical context without compression</li>
              <li>• use summarization for conversational context that's less critical</li>
              <li>• consider rag/embeddings for large reference materials like documentation</li>
              <li>• give users visibility and control over what gets compressed</li>
              <li>• test compaction strategies with real usage patterns, not toy examples</li>
            </ul>
            <p className="mt-4">
              context compaction isn't sexy, but it's essential for building ai systems that actually work at scale. the models get smarter, but they'll always have limits. smart compression is how we work within those limits without sacrificing capability.
            </p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://arxiv.org/abs/2307.06945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  arxiv.org/abs/2307.06945 - lost in the middle: how language models use long contexts
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/index/long-context-windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  anthropic.com - long context windows
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2310.06825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  arxiv.org/abs/2310.06825 - compressing context to enhance inference efficiency
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
