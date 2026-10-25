import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  AgentProtocolSection,
  BenchmarkTaskSection,
  ImprovementStrategiesSection,
  MappingOutcomesSection,
  ProviderComparisonSection,
  ReferencesSection,
  RunBenchmarkSection,
  WhyBenchmarkSection,
} from '@/components/LLMBenchmarkingSections';

export const metadata: Metadata = {
  title: 'LLM Benchmarking',
  description:
    'A benchmark comparing search providers on realistic multi-step software tasks completed by LLM agents.',
};

export default function LLMBenchmarkingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <article className="mx-auto w-full max-w-[30rem]">
        <header className="sticky top-0 z-40 -mt-4 -mx-6 flex items-center gap-1 bg-[#1a1a1a]/95 px-6 pt-4 text-xs font-normal leading-none backdrop-blur md:-mx-12 md:px-12 md:text-sm lg:-mx-0 lg:px-0">
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

        <h1 className="page-content-after-header mb-3 text-[22px] font-medium text-white md:text-[28px]">
          LLM Benchmarking
        </h1>
        <p className="mb-6 text-sm text-stone-500">
          <span className="block">Nicholas Chen · December 2025</span>
          <span className="project-meta-links">
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
              GitHub
            </Link>
          </span>
        </p>

        <div className="space-y-8 text-xs leading-relaxed md:text-sm">
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-stone-100 md:text-xl">
              I built an agent benchmark around Exa-style semantic retrieval.
            </h2>
            <p>
              The Multi-Step Agent Retrieval Benchmark (MARB) evaluates how much better LLM agents
              perform on real coding and infra tasks when you swap in Exa search instead of generic
              web search—or no search at all.
            </p>
          </section>

          <ImageLightbox>
            <div className="overflow-hidden rounded-md border border-stone-800 bg-white">
              <Image
                src="/llm-benchmarking/marb-results.png"
                alt="MARB results chart showing success rates for no search, Exa, SerpAPI, Parallel, and Tavily"
                width={676}
                height={480}
                className="h-auto w-full"
              />
            </div>
          </ImageLightbox>

          <WhyBenchmarkSection />
          <BenchmarkTaskSection />
          <AgentProtocolSection />
          <ProviderComparisonSection />
          <RunBenchmarkSection />
          <MappingOutcomesSection />
          <ImprovementStrategiesSection />
          <ReferencesSection />
        </div>

        <Footer className="mt-8" />
      </article>
    </main>
  );
}
