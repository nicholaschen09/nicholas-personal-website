import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astra Risk',
  description:
    'A Hack the North 2026 human-reviewed commercial property underwriting demo that reviews broker submissions against sample appetite guidelines.',
};

export default function AstraRiskPage() {
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
          <span className="text-stone-400">Astra Risk</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Astra Risk</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · September 2026 ·{' '}
              <a
                href="https://astra-risk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                Website
              </a>
              {' · '}
              <a
                href="https://github.com/JustinScitech/astrarisk"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-400 md:text-sm">
            Built for Hack the North 2026, Astra is a human-reviewed commercial property
            underwriting demo. It reviews broker submissions against sample appetite guidelines,
            surfaces missing information, and explains its findings for an underwriter to review.
          </p>

          <ImageLightbox>
            <div className="mt-5 overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/astra-risk.png"
                alt="Astra Risk underwriting dashboard reviewing Waterloo Engineering 7 with property risk layers and an investigation timeline"
                width={1883}
                height={1357}
                className="h-auto w-full"
              />
            </div>
          </ImageLightbox>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
