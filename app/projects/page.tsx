import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    href: 'https://github.com/nicholaschen09/metallic-blob',
    title: 'Metallic Blob',
    date: 'March 2026',
    description:
      'A small visual experiment with a shiny interactive shape that reacts to light and motion',
  },
  {
    href: 'https://tiktokviewpredictor.vercel.app/',
    title: 'TikTok View Predictor',
    date: 'October 2025',
    description: 'A playful predictor for estimating TikTok video views from a few quick inputs',
  },
  {
    href: 'https://facial-recognition-neural-network.vercel.app/',
    title: 'Facial Recognition Neural Network',
    date: 'August 2026',
    description: 'A neural network project for experimenting with facial recognition in the browser',
  },
  {
    href: 'https://sql-query-parser.vercel.app/',
    title: 'SQL Query Parser',
    date: 'May 2025',
    description:
      'A tool for parsing SQL and turning query structure into something easier to inspect',
  },
  {
    href: 'https://github.com/nicholaschen09/summary-discord-bot',
    title: 'Summary Discord Bot',
    date: 'May 2025',
    description: 'A Discord bot that summarizes unread channel messages when you log on',
  },
  {
    href: 'https://diff-digest-appp.vercel.app/',
    title: 'Diff Digest',
    date: 'May 2025',
    description: 'A web app that turns GitHub pull request diffs into dual-tone release notes',
  },
  {
    href: 'https://github.com/nicholaschen09/tunl',
    title: 'Tunl',
    date: 'March 2026',
    description: 'A small project repo from my experiments with simple developer tooling',
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
          <span className="text-stone-400">Projects</span>
        </header>

        <section className="mt-8 space-y-5 text-xs leading-relaxed md:mt-10 md:text-sm">
          {projects.map((item) => (
            <article key={item.href}>
              <div className="flex items-baseline justify-between gap-4">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-stone-500/70 underline-offset-4 transition-colors hover:text-stone-100 hover:decoration-stone-200"
                >
                  {item.title}
                </a>
                <span className="shrink-0 text-right">{item.date}</span>
              </div>
              <p className="mt-1 text-stone-500">{item.description}</p>
            </article>
          ))}
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
