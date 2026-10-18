import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Grab',
  description: 'A React Grab contribution that adds a copyable DevTools panel for selected elements.',
};

export default function ReactGrabPage() {
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
          <span className="text-stone-400">React Grab</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">React Grab</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · February 2026 ·{' '}
              <a
                href="https://github.com/nicholaschen09/react-grab/commit/227e1c1e9020ff12191234c1710cacb45bf6a9cc"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub commit
              </a>
              {' · '}
              <a
                href="https://github.com/nicholaschen09/react-grab"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-sm leading-relaxed text-stone-400">
            Built on top of{' '}
            <a
              href="https://github.com/aidenybai/react-grab"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-stone-100"
            >
              React Grab
            </a>
            , this contribution adds a DevTools panel action that copies a selected element’s
            computed CSS, CSS variables, box model, accessibility details, React props, and
            component context.
          </p>

          <Image
            src="/react-grab-demo.gif"
            alt="Animated demonstration of the React Grab DevTools panel action"
            width={640}
            height={360}
            unoptimized
            className="mt-5 w-full rounded-md border border-stone-800 bg-black"
          />
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
