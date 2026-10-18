import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Benchmarking',
  description:
    'A benchmark comparing web search APIs on realistic multi-step tasks completed by LLM agents.',
};

export default function LLMBenchmarkingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[30rem] flex-col">
        <header className="flex items-center gap-1 text-xs font-normal leading-none md:text-sm">
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

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">
              LLM Benchmarking
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · December 2025 ·{' '}
              <a
                href="https://llm-benchmarking-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                Website
              </a>
              {' · '}
              <a
                href="https://github.com/nicholaschen09/llm-benchmarking"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-sm leading-relaxed text-stone-400">
            A Multi-Step Agent Retrieval Benchmark that compares web search APIs by measuring how
            well LLM agents solve realistic, multi-step software and infrastructure tasks.
          </p>

          <ImageLightbox>
            <div className="mt-5 overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/llm-benchmarking.png"
                alt="LLM Benchmarking page showing the Exa-style semantic retrieval benchmark and accuracy results"
                width={2503}
                height={1358}
                className="h-auto w-full"
              />
            </div>
          </ImageLightbox>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
