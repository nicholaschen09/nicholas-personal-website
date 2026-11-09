import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ArtGallery from './ArtGallery';
import artworks from './artworks.json';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export const metadata: Metadata = {
  description: 'A gallery of drawings, paintings, and sculpture by Nicholas Chen.',
};

export default function ArtPage() {
  const sections: TOCSection[] = artworks.flatMap((artwork) => {
    const sections = [
      {
        id: artwork.src.slice(5, -5),
        title: artwork.title,
      },
    ];

    if (artwork.src === '/art/art-32.webp') {
      sections.push({
        id: 'frustration-animation',
        title: 'Frustration animation process',
      });
    }

    if (artwork.src === '/art/art-31.webp') {
      sections.push({
        id: 'feeling-alienated-animation',
        title: 'Feeling alienated animation',
      });
    }

    return sections;
  });

  return (
    <main className="art-page listing-page min-h-screen px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_minmax(0,30rem)_1fr] lg:items-start lg:gap-8">
        <TableOfContents sections={sections} title="" className="lg:mt-20" />
        <article className="w-full max-w-[30rem] mx-auto">
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
