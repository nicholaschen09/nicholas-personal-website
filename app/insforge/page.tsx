import Footer from '@/components/Footer';
import Link from 'next/link';

const contributions = [
  {
    href: 'https://github.com/InsForge/InsForge/pull/671',
    title: 'fix/execute raw sql bug',
  },
  {
    href: 'https://github.com/InsForge/InsForge/pull/690',
    title: 'feat/allow user to navigate visualizer through the minimap ui',
  },
];

export default function InsForgePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[30rem] flex-col">
        <header className="text-xs font-normal leading-none md:text-sm">
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
          <span className="text-stone-400">InsForge</span>
        </header>

        <section className="mt-8 space-y-8 text-xs leading-relaxed text-stone-300 md:text-sm">
          <div>
            <h1 className="mb-2 text-2xl font-medium text-white md:text-3xl">InsForge</h1>
            <p className="text-stone-500">
              Open source contributions to InsForge, focused on making backend tooling safer and
              easier to use.
            </p>
          </div>

          <ol className="list-decimal space-y-3 pl-5">
            {contributions.map((contribution) => (
              <li key={contribution.href} className="pl-1">
                <a
                  href={contribution.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-200 transition-colors hover:text-stone-100"
                >
                  {contribution.title}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
