'use client';

import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import artworks from './artworks.json';

export default function ArtGallery() {
  const [selected, setSelected] = useState<(typeof artworks)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <>
      <section
        aria-label="Artwork gallery"
        className="page-content-after-header space-y-3"
      >
        {artworks.map((artwork, index) => (
          <Fragment key={artwork.src}>
            <button
              id={artwork.src.slice(5, -5)}
              type="button"
              onClick={() => setSelected(artwork)}
              aria-label={`View ${artwork.alt}`}
              className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="(min-width: 768px) 152px, (min-width: 528px) 234px, calc((100vw - 60px) / 2)"
                priority={index < 2}
                className="h-auto w-full transition-opacity hover:opacity-90"
              />
            </button>
            <div className="mt-2 space-y-0.5">
              <h2 className="text-sm text-stone-400">{artwork.title}</h2>
              {(artwork.medium !== 'Not listed' || artwork.size !== 'Not listed') && (
                <p className="text-xs text-stone-500">
                  {[artwork.medium, artwork.size]
                    .filter((value) => value !== 'Not listed')
                    .join(' · ')}
                </p>
              )}
            </div>
            {artwork.src === '/art/art-32.webp' && (
              <div className="space-y-0.5">
                <Image
                  src="/art/animation-process.gif"
                  alt="Animation process"
                  width={768}
                  height={432}
                  unoptimized
                  className="w-full"
                />
                <h2 id="frustration-animation" className="!mt-2 text-sm text-stone-400">
                  Frustration animation process
                </h2>
                <p className="text-xs text-stone-500">Blender</p>
              </div>
            )}
            {artwork.src === '/art/art-31.webp' && (
              <div className="!mt-2 space-y-0.5">
                <Image
                  src="/art/alienated-animation.gif"
                  alt="Alienated 3D animation"
                  width={1280}
                  height={720}
                  unoptimized
                  className="w-full"
                />
                <h2 id="feeling-alienated-animation" className="!mt-2 text-sm text-stone-400">
                  Feeling alienated animation
                </h2>
                <p className="text-xs text-stone-500">Blender</p>
              </div>
            )}
          </Fragment>
        ))}
      </section>

      <dialog
        ref={dialogRef}
        aria-label={selected?.alt ?? 'Artwork viewer'}
        onClose={() => setSelected(null)}
        className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none items-center justify-center overflow-hidden bg-transparent p-6 text-white backdrop:bg-black/90 open:flex md:p-12"
      >
        <button
          type="button"
          aria-label="Close artwork background"
          tabIndex={-1}
          onClick={() => dialogRef.current?.close()}
          className="absolute inset-0 cursor-zoom-out"
        />
        {selected && (
          <button
            type="button"
            aria-label="Close enlarged artwork"
            onClick={() => dialogRef.current?.close()}
            className="relative flex max-w-full cursor-zoom-out items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              unoptimized
              className="h-auto max-h-[85dvh] w-auto max-w-full object-contain"
            />
          </button>
        )}
        <button
          type="button"
          aria-label="Close artwork"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-3xl text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </dialog>
    </>
  );
}
