import Link from 'next/link';
import Footer from '@/components/Footer';

const writing = [
  {
    href: '/blogs/melius-summer-internship',
    title: 'my summer internship with melius',
    description: 'reflections on building agent context, skills, and the Playground at Melius',
  },
  {
    href: '/blogs/lossless-audio',
    title: 'how lossless audio compression works',
    description: 'a visual explainer on flac, mp3, prediction, and what lossless really means',
  },
  {
    href: '/blogs/ontology-text-to-sql',
    title: 'why ontology for text-to-sql?',
    description: 'notes on ontologies, context, and making natural language work better with data',
  },
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-lg flex-col">
        <header className="text-xs font-normal leading-none md:text-sm">
          <Link
            href="/"
            className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
          >
            Nicholas Chen
          </Link>
          <span className="text-stone-500"> / </span>
          <span className="text-stone-400">writing</span>
        </header>

        <section className="mt-8 space-y-5 text-xs leading-relaxed md:mt-10 md:text-sm">
          {writing.map((item) => (
            <article key={item.href}>
              <Link
                href={item.href}
                className="underline decoration-stone-500/70 underline-offset-4 transition-colors hover:text-stone-100 hover:decoration-stone-200"
              >
                {item.title}
              </Link>
              <p className="mt-1 text-stone-500">{item.description}</p>
            </article>
          ))}
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
