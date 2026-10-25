import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diff Digest',
  description: 'A web app that turns GitHub pull request diffs into dual-tone release notes.',
};

export default function DiffDigestPage() {
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
          <span className="text-stone-400">Diff Digest</span>
        </header>

        <section className="page-content-after-header">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Diff Digest</h1>
            <p className="mt-1 text-sm text-stone-500">
              <span className="block">Nicholas Chen · May 2025</span>
              <span className="project-meta-links">
                <a
                  href="https://diff-digest-appp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-stone-100"
                >
                  Website
                </a>{' '}
                ·{' '}
                <a
                  href="https://github.com/nicholaschen09/diff-digest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-stone-100"
                >
                  GitHub
                </a>
              </span>
            </p>
          </div>

          <p className="mb-5 text-xs font-normal leading-relaxed text-stone-300 md:text-sm">
            A web app that turns GitHub pull request diffs into dual-tone release notes, with
            technical details for developers and clear summaries for everyone else.
          </p>

          <Image
            src="/diff-digest-screenshot.png"
            alt="Diff Digest dashboard showing pull request stats and merged pull requests"
            width={2389}
            height={1908}
            className="h-auto w-full rounded-md border border-stone-800"
            priority
          />
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
