import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ListingItemTitle from '@/components/ListingItemTitle';
import artworks from '@/app/art/artworks.json';

const writing = [
  {
    href: '/blogs/melius-summer-internship',
    title: 'My Summer Internship with Melius',
    date: 'August 2026',
    description: 'Reflections on building agent context, skills, and the Playground at Melius',
  },
  {
    href: '/blogs/startup-lessons',
    title: '10 Lessons from Working at Startups',
    date: 'June 2026',
    description: 'Notes on product judgment, customers, communication, culture, and engineering',
  },
  {
    href: '/blogs/neural-video-compression',
    title: 'Optimizing Video Compression for Neural Networks',
    date: 'April 2026',
    description: 'A comma.ai challenge writeup on compressing video for neural network perception',
  },
  {
    href: '/blogs/lossless-audio',
    title: 'How Lossless Audio Compression Works',
    date: 'March 2026',
    description: 'A visual explainer on FLAC, MP3, prediction, and what lossless really means',
  },
  {
    href: '/blogs/ontology-text-to-sql',
    title: 'Why Ontology for Text-to-SQL?',
    date: 'November 2025',
    description: 'Notes on ontologies, context, and making natural language work better with data',
  },
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-[54rem] grid-cols-1 gap-10 md:grid-cols-[minmax(0,15rem)_minmax(0,30rem)] md:gap-16">
        <aside className="order-1 md:order-none">
          <Link href="/art" className="group block" aria-label="View art gallery">
            <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
              {artworks.slice(0, 3).map((artwork, index) => (
                <Image
                  key={artwork.src}
                  src={artwork.src}
                  alt={artwork.alt}
                  width={artwork.width}
                  height={artwork.height}
                  priority={index === 0}
                  sizes="(min-width: 768px) 240px, 30vw"
                  className="h-28 w-full object-cover transition-opacity group-hover:opacity-80 md:h-auto"
                />
              ))}
            </div>
            <span className="mt-3 block text-xs text-stone-500 transition-colors group-hover:text-pink-300 md:text-sm">
              View art
            </span>
          </Link>
        </aside>

        <div className="order-2 flex min-w-0 flex-col">
          <header className="flex items-center gap-1 text-xs font-normal leading-none md:text-sm">
            <Link
              href="/"
              className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
            >
              Nicholas Chen
            </Link>
            <span className="text-stone-500"> / </span>
            <span className="text-stone-400">Writing</span>
          </header>

          <section className="page-content-after-header space-y-5 text-xs leading-relaxed md:text-sm">
            {writing.map((item) => (
              <article key={item.href}>
                <div className="flex items-baseline justify-between gap-4">
                  <ListingItemTitle href={item.href} title={item.title} />
                  <span className="shrink-0 text-right">{item.date}</span>
                </div>
                <p className="listing-item-description mt-1 text-stone-400">
                  {item.description}
                </p>
              </article>
            ))}
          </section>

          <Footer className="mt-8" />
        </div>
      </div>
    </main>
  );
}
