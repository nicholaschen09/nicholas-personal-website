'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import photoOne from '@/public/home/photo-1.jpg';
import photoTwo from '@/public/home/photo-2.jpg';
import photoThree from '@/public/home/photo-3.jpg';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

function TextLink({ href, children, external = false }: TextLinkProps) {
  const className =
    'underline decoration-stone-500/70 underline-offset-4 transition-colors hover:text-stone-100 hover:decoration-stone-200';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

const navItems = [
  { href: '/writing', label: 'writing' },
  { href: '/projects', label: 'projects' },
];

const photos = [
  { id: 'waterfront-sunset', src: photoThree, alt: 'Waterfront at sunset' },
  { id: 'new-york-buildings', src: photoOne, alt: 'New York buildings at dusk' },
  { id: 'jersey-city-skyline', src: photoTwo, alt: 'Jersey City skyline from a pier' },
];

export default function Home() {
  const [activePhoto, setActivePhoto] = useState(0);

  const showPreviousPhoto = () => {
    setActivePhoto((current) => (current - 1 + photos.length) % photos.length);
  };

  const showNextPhoto = () => {
    setActivePhoto((current) => (current + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActivePhoto((current) => (current - 1 + photos.length) % photos.length);
      }

      if (event.key === 'ArrowRight') {
        setActivePhoto((current) => (current + 1) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-lg flex-col">
        <header className="flex items-center justify-between gap-4 text-xs font-normal leading-none md:text-sm">
          <h1 className="text-xs font-normal leading-none text-stone-50 md:text-sm">
            Nicholas Chen
          </h1>

          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-normal leading-none text-stone-400 transition-colors hover:text-stone-100 md:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="mt-8 md:mt-10">
          <div className="relative h-48 w-full overflow-hidden md:h-60">
            <button
              type="button"
              onClick={showNextPhoto}
              className="relative block h-full w-full cursor-pointer"
              aria-label="Show next photo"
            >
              {photos.map((photo, index) => (
                <Image
                  key={photo.id}
                  src={photo.src}
                  alt={index === activePhoto ? photo.alt : ''}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 32rem, calc(100vw - 3rem)"
                  className={`object-cover transition-opacity duration-200 ${
                    index === activePhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-4 bg-gradient-to-t from-black/45 to-transparent px-4 pb-3 pt-10 text-white">
              <button
                type="button"
                onClick={showPreviousPhoto}
                className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-white/90 transition-colors hover:text-white"
                aria-label="Show previous photo"
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    className={`pointer-events-auto h-1.5 w-1.5 rounded-full transition-colors ${
                      index === activePhoto ? 'bg-white' : 'bg-white/45 hover:bg-white/75'
                    }`}
                    aria-label={`Show photo ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextPhoto}
                className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-white/90 transition-colors hover:text-white"
                aria-label="Show next photo"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <section className="mt-8 space-y-8 text-xs leading-relaxed text-stone-300 md:text-sm">
          <p className="font-normal">
            i&apos;m a student at the{' '}
            <TextLink href="https://uwaterloo.ca/systems-design-engineering/" external>
              university of waterloo
            </TextLink>
            , currently studying systems design engineering. i&apos;ve spent time working at{' '}
            <TextLink href="https://melius.com/" external>
              melius
            </TextLink>
            ,{' '}
            <TextLink href="https://textql.com/" external>
              textql
            </TextLink>
            ,{' '}
            <TextLink href="https://www.ownr.co/" external>
              ownr
            </TextLink>
            , and{' '}
            <TextLink href="https://www.rbc.com/" external>
              rbc
            </TextLink>
            , usually somewhere between product engineering, agents, data, and creative tools.
          </p>

          <p id="writing" className="scroll-mt-10 font-normal">
            sometimes i enjoy writing blogs like{' '}
            <TextLink href="/blogs/ontology-text-to-sql">why ontology for text-to-sql?</TextLink>{' '}
            and building cool things like{' '}
            <TextLink href="https://github.com/nicholaschen09/metallic-blob" external>
              metallic blob
            </TextLink>
            ,{' '}
            <TextLink href="https://tiktokviewpredictor.vercel.app/" external>
              tiktok view predictor
            </TextLink>
            .
          </p>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
