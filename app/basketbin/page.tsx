import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BasketBin',
  description: 'A smart recycling game that rewards people for sorting waste correctly.',
};

export default function BasketBinPage() {
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
          <span className="text-stone-400">BasketBin</span>
        </header>

        <section className="page-content-after-header">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">BasketBin</h1>
            <p className="mt-1 text-sm text-stone-500">
              <span className="block">Nicholas Chen · August 2024</span>
              <span className="project-meta-links">
                <a
                  href="https://github.com/DerrickHa/ht6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-stone-100"
                >
                  GitHub
                </a>
              </span>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-400 md:text-sm">
            Built at Hack the 6ix 2024, BasketBin is a smart recycling game that uses a camera and
            sensors to sort waste, award points for correct disposal, and encourage better recycling
            habits.
          </p>

          <Image
            src="/basketbin/basketbin-demo.gif"
            alt="BasketBin recycling game demo"
            width={480}
            height={270}
            unoptimized
            className="mt-5 h-auto w-full rounded-md border border-stone-800 bg-black"
          />
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
