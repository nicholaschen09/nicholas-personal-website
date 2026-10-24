import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schema Diff',
  description: 'A visualizer that compares database schemas and highlights migration changes.',
};

export default function SchemaDiffPage() {
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
          <span className="text-stone-400">Schema Diff</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Schema Diff</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · March 2026 ·{' '}
              <a
                href="https://schema-diff-gray.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                Website
              </a>
              {' · '}
              <a
                href="https://github.com/nicholaschen09/schema-diff"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-400 md:text-sm">
            Compare database schemas and see added, removed, or changed tables and columns in a
            clear migration view.
          </p>

          <ImageLightbox>
            <div className="mt-5 overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/schema-diff.png"
                alt="Schema Diff comparing before and after database schemas and highlighting changed and added tables and columns"
                width={1921}
                height={1356}
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
