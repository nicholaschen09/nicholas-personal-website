import Footer from '@/components/Footer';
import LazyLoopVideo from '@/components/LazyLoopVideo';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Window Balls',
  description: 'A browser game where bouncing balls move across multiple windows.',
};

export default function WindowBallsPage() {
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
          <span className="text-stone-400">Window Balls</span>
        </header>

        <section className="page-content-after-header">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Window Balls</h1>
            <p className="mt-1 text-sm text-stone-500">
              <span className="block">Nicholas Chen · November 2026</span>
              <span className="project-meta-links">
                <a
                  href="https://github.com/nicholaschen09/html-window-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-stone-100"
                >
                  GitHub
                </a>
              </span>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-300 md:text-sm">
            A browser game where glowing balls bounce across separate windows as if they share one
            screen. The windows sync each ball through BroadcastChannel and draw it at its real
            screen position.
          </p>

          <LazyLoopVideo
            src="/window-balls/window-balls-demo.mp4"
            poster="/window-balls/window-balls-demo.jpg"
            label="Window Balls demo showing glowing balls moving between browser windows"
            width={1000}
            height={554}
            className="mt-5 h-auto w-full rounded-md border border-stone-800 bg-black"
          />
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
