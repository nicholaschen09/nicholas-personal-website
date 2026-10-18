import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Benchmarking',
  description:
    'A benchmark comparing search providers on realistic multi-step software tasks completed by LLM agents.',
};

const agentLoop = `def run_agent(task, search_client, model):
    queries = model.plan_queries(task.instruction)

    search_results = []
    for query in queries:
        search_results.extend(search_client.search(query))

    return model.answer(task.instruction, context=search_results)`;

const taskExample = `@dataclass
class AgentTask:
    id: str
    instruction: str
    input_context: str
    success_keywords: list[str]`;

const runCommands = `# Install dependencies
pip install -r requirements.txt

# Run the benchmark against each configured provider
python -m exa_benchmark.cli \\
  --provider none \\
  --provider exa \\
  --provider parallel \\
  --provider serpapi \\
  --provider tavily \\
  --tasks marb_tasks`;

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

export default function LLMBenchmarkingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <article className="mx-auto w-full max-w-[30rem]">
        <header className="sticky top-0 z-40 -mt-4 -mx-6 mb-4 flex items-center gap-1 bg-[#1a1a1a]/95 px-6 py-4 text-xs font-normal leading-none backdrop-blur md:-mx-12 md:px-12 md:text-sm lg:-mx-0 lg:px-0">
          <Link
            href="/"
            className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
          >
            Nicholas Chen
          </Link>
          <span className="text-stone-500"> / </span>
          <Link href="/projects" className="text-stone-400 transition-colors hover:text-stone-200">
            Projects
          </Link>
          <span className="text-stone-500"> / </span>
          <span className="text-stone-400">LLM Benchmarking</span>
        </header>

        <h1 className="mb-3 text-[22px] font-medium text-white md:text-[28px]">
          LLM Benchmarking
        </h1>
        <p className="mb-6 text-sm text-stone-500">
          Nicholas Chen · December 2025 ·{' '}
          <Link
            href="https://llm-benchmarking-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-stone-100"
          >
            Website
          </Link>
          {' · '}
          <Link
            href="https://github.com/nicholaschen09/llm-benchmarking"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-stone-100"
          >
            GitHub repository
          </Link>
        </p>

        <div className="space-y-8 text-xs leading-relaxed md:text-sm">
          <section className="space-y-4">
            <p>
              I built the Multi-Step Agent Retrieval Benchmark (MARB) to test a practical question:
              do LLM agents complete real software and infrastructure tasks more successfully when
              they can search the web, and does the search provider matter?
            </p>
            <p>
              Instead of measuring retrieval against a static collection of questions, MARB gives
              an agent tasks that require current or niche technical knowledge. The benchmark then
              compares the agent with no search and with providers such as Exa, Parallel, SerpAPI,
              and Tavily.
            </p>
          </section>

          <ImageLightbox>
            <div className="overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/llm-benchmarking.png"
                alt="MARB benchmark overview showing retrieval accuracy across five search configurations"
                width={2503}
                height={1358}
                className="h-auto w-full"
              />
            </div>
          </ImageLightbox>

          <Section title="Why benchmark search for agents?">
            <p>
              Exa offers search APIs designed for AI applications, including endpoints that return
              content for models to use directly. But embedding quality alone doesn&apos;t answer the
              question an agent builder cares about: does a search tool help an agent finish a
              multi-step engineering task?
            </p>
            <p>
              MARB focuses on realistic work such as finding an OCR library and using its docs,
              improving a Dockerfile with current guidance, or adding a Kubernetes
              HorizontalPodAutoscaler to an existing deployment. These tasks are difficult to
              solve reliably from model memory alone.
            </p>
          </Section>

          <Section title="Task design">
            <p>
              Each task includes an instruction, optional input context, and lightweight success
              criteria. A criterion can be a keyword that should appear in a correct answer, such
              as <code>pytesseract</code> or <code>pdf2image</code> for a task about extracting text
              from PDFs.
            </p>
            <CodeBlock>{taskExample}</CodeBlock>
            <p>
              These criteria keep the benchmark reproducible and avoid the expense and variability
              of an LLM judge. Keyword matching is only a proxy for correctness, so the results are
              directional rather than a complete assessment of answer quality.
            </p>
          </Section>

          <Section title="Agent loop">
            <p>
              The reference agent follows three simple phases: plan search queries, retrieve
              results, and synthesize an answer. I keep the LLM backbone fixed while swapping the
              search provider, so the comparison focuses on retrieval.
            </p>
            <CodeBlock>{agentLoop}</CodeBlock>
            <p>
              Search responses are normalized into a shared result format with a URL, title, and
              snippet. That lets each provider use the same agent interface and gives the model a
              consistent structure to work with.
            </p>
          </Section>

          <Section title="Benchmark snapshot">
            <p>
              In this eight-task snapshot, Exa completed seven tasks. The no-search baseline,
              Parallel, and Tavily each completed six, while SerpAPI completed five.
            </p>
            <div className="overflow-x-auto rounded-md border border-stone-700">
              <table className="w-full min-w-[20rem] text-left text-xs md:text-sm">
                <thead className="border-b border-stone-700 bg-stone-900 text-stone-200">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">Provider</th>
                    <th scope="col" className="px-3 py-2 font-semibold">Solved</th>
                    <th scope="col" className="px-3 py-2 font-semibold">Success rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-800">
                    <th scope="row" className="px-3 py-2 font-medium">No search</th>
                    <td className="px-3 py-2">6 / 8</td>
                    <td className="px-3 py-2">75.0%</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <th scope="row" className="px-3 py-2 font-medium">Exa</th>
                    <td className="px-3 py-2">7 / 8</td>
                    <td className="px-3 py-2">87.5%</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <th scope="row" className="px-3 py-2 font-medium">SerpAPI</th>
                    <td className="px-3 py-2">5 / 8</td>
                    <td className="px-3 py-2">62.5%</td>
                  </tr>
                  <tr className="border-b border-stone-800">
                    <th scope="row" className="px-3 py-2 font-medium">Parallel</th>
                    <td className="px-3 py-2">6 / 8</td>
                    <td className="px-3 py-2">75.0%</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-3 py-2 font-medium">Tavily</th>
                    <td className="px-3 py-2">6 / 8</td>
                    <td className="px-3 py-2">75.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The CLI also records each provider&apos;s runtime. With only eight tasks, the table is
              a useful snapshot for exploring the benchmark, not a broad leaderboard or a
              statistically conclusive ranking.
            </p>
          </Section>

          <Section title="Providers and reproducibility">
            <p>
              MARB uses a small <code>SearchClient</code> interface, making it possible to add a
              provider adapter without changing the agent loop. The benchmark includes a no-search
              baseline and adapters for Exa, Parallel, Brave Search, SerpAPI, and Tavily.
            </p>
            <p>
              The reference implementation uses Gemini 2.5 Flash as its fixed model. API keys are
              supplied through environment variables, and the CLI runs the selected providers in
              parallel.
            </p>
            <CodeBlock>{runCommands}</CodeBlock>
          </Section>

          <Section title="What I learned">
            <p>
              Agent-oriented search has a different goal from ordinary web search: it needs to
              surface current, actionable material that helps complete a task. In this snapshot,
              Exa produced the highest success rate, while MARB made it straightforward to compare
              that result against other providers and against using no search at all.
            </p>
            <p>
              The benchmark is deliberately small and opinionated. Its value is in making a
              practical comparison repeatable and in creating a foundation for more tasks, better
              scoring, and deeper analysis of where each provider helps or falls short.
            </p>
          </Section>
        </div>

        <Footer className="mt-8" />
      </article>
    </main>
  );
}
