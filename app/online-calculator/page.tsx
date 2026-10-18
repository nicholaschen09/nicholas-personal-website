import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Calculator',
  description: 'A C++ calculator for trigonometric functions and basic area calculations.',
};

export default function OnlineCalculatorPage() {
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
          <span className="text-stone-400">Online Calculator</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Online Calculator</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · April 2023 ·{' '}
              <a
                href="https://github.com/nicholaschen09/OnlineCalculator"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-sm leading-relaxed text-stone-400">
            A C++ calculator that lets users choose a function, enter values, and calculate
            trigonometric functions or basic areas.
          </p>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
