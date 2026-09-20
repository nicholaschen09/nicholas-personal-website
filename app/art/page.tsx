import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArtGallery from './ArtGallery';

export const metadata: Metadata = {
  description: 'A gallery of drawings, paintings, and sculpture by Nicholas Chen.',
};

export default function ArtPage() {
  return (
    <main className="min-h-screen px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto w-full max-w-[30rem]">
        <header className="text-xs font-normal leading-none md:text-sm">
          <Link href="/" className="text-stone-50 transition-colors hover:text-stone-300">
            Nicholas Chen
          </Link>
          <span className="text-stone-500"> / </span>
          <h1 className="inline text-xs font-normal tracking-normal text-stone-400 md:text-sm">
            Art
          </h1>
        </header>

        <ArtGallery />

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
