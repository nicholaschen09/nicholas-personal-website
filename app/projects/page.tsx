import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    href: 'https://github.com/nicholaschen09/metallic-blob',
    title: 'metallic blob',
    description:
      'a small visual experiment with a shiny interactive shape that reacts to light and motion',
  },
  {
    href: 'https://tiktokviewpredictor.vercel.app/',
    title: 'tiktok view predictor',
    description: 'a playful predictor for estimating tiktok video views from a few quick inputs',
  },
  {
    href: 'https://sql-query-parser.vercel.app/',
    title: 'sql query parser',
    description:
      'a tool for parsing sql and turning query structure into something easier to inspect',
  },
  {
    href: 'https://github.com/nicholaschen09/tunl',
    title: 'tunl',
    description: 'a small project repo from my experiments with simple developer tooling',
  },
];

export default function ProjectsPage() {
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
          <span className="text-stone-400">projects</span>
        </header>

        <section className="mt-8 space-y-5 text-xs leading-relaxed md:mt-10 md:text-sm">
          {projects.map((item) => (
            <article key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-stone-500/70 underline-offset-4 transition-colors hover:text-stone-100 hover:decoration-stone-200"
              >
                {item.title}
              </a>
              <p className="mt-1 text-stone-500">{item.description}</p>
            </article>
          ))}
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
