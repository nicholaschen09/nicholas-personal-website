import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import ImageLightbox from '@/components/ImageLightbox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voluntrack',
  description: 'A platform connecting volunteers with nonprofits and meaningful opportunities.',
};

export default function VoluntrackPage() {
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
          <span className="text-stone-400">Voluntrack</span>
        </header>

        <section className="page-content-after-header">
          <div className="mb-5">
            <h1 className="text-[22px] font-medium text-white md:text-[28px]">Voluntrack</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · August 2023 ·{' '}
              <a
                href="https://voluntracks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                Website
              </a>
              {' · '}
              <a
                href="https://www.figma.com/design/QJo5Z9dRj7V7SwE5h43jrW/VolunTrack-App-Design?t=1szHesRVLNycxLXL-1"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                Figma design
              </a>
            </p>
          </div>

          <p className="text-xs font-normal leading-relaxed text-stone-400 md:text-sm">
            A platform that connects volunteers with nonprofits and helps people find opportunities
            that match their interests.
          </p>

          <ImageLightbox>
            <div className="mt-5 overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/voluntrack-app-design.png"
                alt="VolunTrack mobile app designs showing bookmarked opportunities, mail, search, volunteering, and about screens"
                width={1908}
                height={623}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-5 overflow-hidden rounded-md border border-stone-800">
              <Image
                src="/voluntrack-website.png"
                alt="Voluntrack website homepage with volunteer opportunity categories and a location and interests search"
                width={1783}
                height={1359}
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
