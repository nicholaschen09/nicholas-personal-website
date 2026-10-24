import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Feedback ETL Pipeline',
  description:
    'A Python ETL pipeline for collecting, processing, and analyzing customer feedback.',
};

export default function CustomerFeedbackEtlPipelinePage() {
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
          <span className="text-stone-400">Customer Feedback ETL Pipeline</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">
              Customer Feedback ETL Pipeline
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · April 2025 ·{' '}
              <a
                href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-400 md:text-sm">
            A Python ETL pipeline for aggregating customer feedback, cleaning and transforming the
            data, and generating insights to help improve customer satisfaction.
          </p>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
