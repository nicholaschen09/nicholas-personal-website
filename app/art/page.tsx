import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArtGallery from './ArtGallery';

export const metadata: Metadata = {
  description: 'A gallery of drawings, paintings, and sculpture by Nicholas Chen.',
};

export default function ArtPage() {
  return (
    <main className="art-page listing-page min-h-screen px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto max-w-[30rem]">
        <article className="w-full">
          <header className="sticky top-0 z-40 -mx-6 -mt-4 flex items-center gap-1 bg-[#1a1a1a] px-6 pb-4 pt-4 text-xs font-normal leading-none backdrop-blur md:-mx-12 md:px-12 md:text-sm lg:-mx-0 lg:px-0">
            <Link
              href="/"
              className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
            >
              Nicholas Chen
            </Link>
            <span className="text-stone-500"> / </span>
            <h1 className="inline text-xs font-normal tracking-normal text-stone-400 md:text-sm">
              Art
            </h1>
          </header>

          <ArtGallery />

          <Footer className="mt-8" />
        </article>
      </div>
    </main>
  );
}
