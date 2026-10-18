function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-stone-100 md:text-xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-stone-700 bg-stone-900 p-4 font-mono text-[10.625px] leading-relaxed text-stone-200 md:text-xs">
      {children}
    </pre>
  );
}

const taskExample = `@dataclass
class AgentTask:
    id: str
    instruction: str       # e.g. "Find a Python library for OCR..."
    input_context: str     # e.g. "Use this specific PDF layout..."
    success_keywords: list # e.g. ["pytesseract", "pdf2image"]`;

const agentLoop = `# Pseudo-code of the MARB agent loop
def run_agent(task, search_client, model):
    # 1. Plan: Model generates search queries based on task
    queries = model.plan_queries(task.instruction)

    # 2. Retrieve: Search API returns raw results
    search_results = []
    for q in queries:
        items = search_client.search(q)
        search_results.extend(items)

    # 3. Answer: Model synthesizes final response
    return model.answer(task.instruction, context=search_results)`;

const searchClient = `class SearchClient(Protocol):
    name: str

    def search(self, query: str, top_k: int = 10) -> List[SearchResult]:
        """
        Standard interface for all providers.
        Returns normalized SearchResult objects.
        """
        pass`;

const resultsTable = `Provider        Agent                Solved     Total      Success%
-----------------------------------------------------------------
none            simple_llm_agent     6          8          75.0
serpapi         simple_llm_agent     5          8          62.5
exa             simple_llm_agent     7          8          87.5
parallel        simple_llm_agent     6          8          75.0
tavily          simple_llm_agent     6          8          75.0`;

const environmentVariables = `EXA_API_KEY=...
GEMINI_API_KEY=...    # The LLM backbone
PARALLEL_API_KEY=...  # Optional
SERPAPI_API_KEY=...   # Optional
TAVILY_API_KEY=...   # Optional`;

const runCommands = `# Install dependencies
pip install -r requirements.txt

# Run MARB against all configured providers
python -m exa_benchmark.cli \\
  --provider none \\
  --provider exa \\
  --provider parallel \\
  --provider serpapi \\
  --provider tavily \\
  --tasks marb_tasks`;

export function BenchmarkTaskSection() {
  return (
    <Section title="MARB: Multi-Step Agent Retrieval Benchmark">
      <p>
        MARB is a small but realistic benchmark that evaluates web search in the context of LLM
        agents completing multi-step software tasks. Each task is something an engineer might
        actually delegate to a capable agent.
      </p>
      <p>
        Unlike generic QA datasets, MARB tasks are designed to be unsolvable without external
        knowledge or hallucination-prone if the model relies solely on training data. They target
        specific, often niche, library versions or configuration syntax.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>“Find a Python library for OCR, read the docs, and write code to extract text from PDFs.”</li>
        <li>“Find recent best practices for Dockerfiles and optimize this example file.”</li>
        <li>“Given a simple Kubernetes Deployment, add a HorizontalPodAutoscaler with sane defaults.”</li>
      </ul>
      <p>
        For each task, the agent can optionally call a search provider, read the returned documents,
        and then synthesize a final answer.
      </p>
      <CodeBlock>{taskExample}</CodeBlock>
    </Section>
  );
}

export function AgentProtocolSection() {
  return (
    <Section title="Agent loop &amp; evaluation protocol">
      <p>
        The benchmark uses a very simple, model-agnostic agent loop with three phases. We keep the
        loop intentionally simple to isolate retrieval quality as the primary variable.
      </p>
      <CodeBlock>{agentLoop}</CodeBlock>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>Planning:</strong> Given a MARB task, the model proposes a small set of concrete
          web search queries. This tests if the search engine can handle the phrasing an agent
          naturally produces.
        </li>
        <li>
          <strong>Retrieval:</strong> The benchmark calls a configured web search API (e.g. Exa,
          Parallel, Brave, SerpAPI) with those queries and collects top-k results. We normalize
          these into a standard format (URL, title, snippet) to ensure fair comparison.
        </li>
        <li>
          <strong>Answering:</strong> The model receives the original task plus the retrieved
          documents and produces a final answer.
        </li>
      </ol>
      <p>
        To stay focused on retrieval, MARB keeps the LLM backbone fixed (in the reference
        implementation, a{' '}
        <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-stone-100">
          Gemini 2.5 Flash
        </a>{' '}
        model via <code>GEMINI_API_KEY</code>) and only swaps out the search provider.
      </p>
      <p>
        Each task comes with lightweight success criteria. We use deterministic keyword matching as
        a proxy for correctness. For example, if a task asks to “extract text from PDFs”, finding{' '}
        <code>pytesseract</code> or <code>pdf2image</code> in the answer counts as a success. This
        avoids the variance and cost of “LLM-as-a-judge” while remaining directionally accurate
        for engineering tasks.
      </p>
    </Section>
  );
}

export function WhyBenchmarkSection() {
  return (
    <Section title="Why a benchmark for Exa &amp; agentic workflows?">
      <p>
        Exa is a search engine made for AIs, with APIs like <code>/search</code> and{' '}
        <code>/contents</code> that surface high-signal technical content for models to consume
        directly (see the official docs for more:{' '}
        <a href="https://exa.ai/docs/search/quickstart" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-stone-100">
          Exa – Getting Started
        </a>
        ).
      </p>
      <p>
        Most existing benchmarks (like MTEB) focus on static embedding quality. They&apos;re useful,
        but they don&apos;t answer the question many Exa customers actually care about:
      </p>
      <blockquote className="border-l-2 border-stone-600 pl-4 text-stone-400">
        “If I plug Exa into my LLM agent instead of a generic web search API, do I solve more real
        multi-step tasks?”
      </blockquote>
    </Section>
  );
}

export function ProviderComparisonSection() {
  return (
    <Section title="Comparing Exa against baseline web search">
      <p>
        The reference MARB implementation is intentionally provider-agnostic. It defines a tiny{' '}
        <code>SearchClient</code> interface. This abstraction allows us to plug in any search API
        by simply writing a small adapter class.
      </p>
      <CodeBlock>{searchClient}</CodeBlock>
      <p>Currently supported providers include:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>No search – Baseline. The agent relies only on its pretraining.</li>
        <li>
          Exa – via the <code>/search</code> API (
          <a href="https://exa.ai/docs/search/quickstart" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-stone-100">
            docs
          </a>
          ).
        </li>
        <li>
          Parallel – via their{' '}
          <a href="https://parallel.ai/blog/parallel-search-api" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-stone-100">
            Search API
          </a>
          .
        </li>
        <li>Brave Search API – privacy-focused web search.</li>
        <li>SerpAPI – a meta-search wrapper around Google and others.</li>
      </ul>
      <p>
        Running MARB for all of them yields a simple comparison of task success rate: for each
        provider, what percentage of tasks did the agent complete end-to-end? The CLI also records
        wall-clock runtime per provider, so you can see not just which search engine helps the
        agent solve more tasks, but how long each one takes to do so.
      </p>
      <CodeBlock>{resultsTable}</CodeBlock>
    </Section>
  );
}

export function RunBenchmarkSection() {
  return (
    <Section title="How to run the benchmark">
      <p>
        The entire benchmark is open source. To run it yourself, you&apos;ll need to set up your
        environment variables in a <code>.env</code> file:
      </p>
      <CodeBlock>{environmentVariables}</CodeBlock>
      <p>
        Then, you can run the full comparison with a single CLI command. This script iterates
        through the providers, runs the agent loop for each task, and prints the final summary
        table.
      </p>
      <CodeBlock>{runCommands}</CodeBlock>
      <p>
        Under the hood, the CLI runs all selected providers in parallel using a thread pool. Each
        provider gets its own progress bar, so you can see Exa, Parallel, SerpAPI, Tavily, and the
        no-search baseline all advancing at the same time while the benchmark executes. The summary
        table at the end includes both success rate and wall-clock time per provider.
      </p>
    </Section>
  );
}

export function MappingOutcomesSection() {
  return (
    <Section title="Mapping search quality to real engineering outcomes">
      <p>
        MARB is deliberately small and opinionated rather than exhaustive. The goal is not to
        publish a leaderboard; it&apos;s to give Exa and potential customers a concrete,
        reproducible way to answer:
      </p>
      <blockquote className="border-l-2 border-stone-600 pl-4 text-stone-400">
        “On the kinds of coding and infra tasks we care about, does Exa actually help our agents
        ship more things, faster?”
      </blockquote>
      <p>
        Because the tasks are grounded in realistic workflows (Dockerfiles, CI, k8s, FastAPI,
        logging, LLM eval harnesses), improvements on this benchmark should correlate with less time
        debugging agents and more tasks completed automatically.
      </p>
    </Section>
  );
}

export function ImprovementStrategiesSection() {
  return (
    <Section title="How to improve benchmark performance">
      <p>
        Based on the results from MARB, here are several strategies to improve search provider
        performance on agent-based tasks:
      </p>
      <h3 className="text-base font-semibold text-stone-100">For providers scoring below 70%</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Improve query understanding: Focus on better semantic parsing of technical queries and domain-specific terminology.</li>
        <li>Enhance result relevance: Implement better ranking algorithms that prioritize authoritative technical documentation and recent content.</li>
        <li>Optimize snippet extraction: Ensure snippets contain actionable code examples and configuration patterns, not just descriptions.</li>
      </ul>
      <h3 className="text-base font-semibold text-stone-100">For providers scoring 70-85%</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Fine-tune context windows: Experiment with different amounts of context returned to balance comprehensiveness with relevance.</li>
        <li>Add re-ranking mechanisms: Implement a second-pass ranking based on task-specific signals like recency, code presence, and source authority.</li>
        <li>Support structured queries: Allow agents to specify filters like date ranges, file types, or specific domains for more targeted results.</li>
      </ul>
      <h3 className="text-base font-semibold text-stone-100">For all providers</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Analyze failure patterns: Review tasks that commonly fail to identify gaps in coverage or retrieval strategy.</li>
        <li>Implement query expansion: Automatically expand technical terms with synonyms and related concepts (e.g., “k8s” → “Kubernetes”).</li>
        <li>Cache and learn from usage: Build provider-specific knowledge of what types of queries work best and optimize accordingly.</li>
        <li>Consider hybrid approaches: Combine multiple search strategies (semantic + keyword) or multiple providers for better coverage.</li>
      </ul>
      <p>
        The key insight from MARB is that agent-oriented search differs from human search. Agents
        need structured, actionable information with working code examples, not just conceptual
        explanations. Providers that optimize for these needs—like Exa&apos;s focus on technical
        content—consistently outperform generic web search on engineering tasks.
      </p>
    </Section>
  );
}

export function ReferencesSection() {
  return (
    <section className="mt-8">
      <h3 className="mb-3 text-sm font-semibold text-stone-200 md:text-base">References</h3>
      <ul className="space-y-2 text-xs text-stone-400 md:text-sm">
        <li>
          <a href="https://exa.ai/docs/search/quickstart" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            Exa – Getting Started (search API docs)
          </a>
        </li>
        <li>
          <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            Gemini API documentation
          </a>
        </li>
        <li>
          <a href="https://parallel.ai/blog/parallel-search-api" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            Parallel Search API
          </a>
        </li>
        <li>
          <a href="https://serpapi.com/" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            SerpAPI documentation
          </a>
        </li>
        <li>
          <a href="https://docs.tavily.com/documentation/api-reference/introduction" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            Tavily Search API docs
          </a>
        </li>
        <li>
          <a href="https://api.search.brave.com/app/documentation/web-search/get-started" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            Brave Search API documentation
          </a>
        </li>
        <li>
          <a href="https://github.com/nicholaschen09/llm-benchmarking" target="_blank" rel="noopener noreferrer" className="block no-underline text-stone-400 transition-colors hover:text-pink-300 focus-visible:text-pink-300">
            MARB benchmark repository (this project)
          </a>
        </li>
      </ul>
    </section>
  );
}
