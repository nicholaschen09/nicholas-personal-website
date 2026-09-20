'use client';

import { useState } from 'react';
import Image from 'next/image';
import deskPhoto from '@/public/home/desk-photo.jpg';
import waterPhoto from '@/public/home/photo-3.jpg';
import cityPhoto from '@/public/home/city-photo.jpg';

const photos = [
  { src: deskPhoto, alt: 'Nicholas sitting at his desk with a laptop' },
  { src: waterPhoto, alt: 'Waterfront at sunset' },
  { src: cityPhoto, alt: 'City buildings and a busy street beneath a blue evening sky' },
];

export default function HomePhotoCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <section
      aria-label="Photos"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div className="relative h-48 w-full overflow-hidden md:h-60">
        {photos.map((photo, index) => (
          <div
            key={photo.alt}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}`}
            hidden={activeSlide !== index}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) 32rem, calc(100vw - 3rem)"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-0 rounded-full bg-black/55 px-1 text-xs text-white backdrop-blur-sm">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => changeSlide(-1)}
            className="flex h-5 w-5 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex">
            {photos.map((photo, index) => (
              <button
                key={photo.alt}
                type="button"
                aria-label={`Show photo ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                onClick={() => setActiveSlide(index)}
                className="flex h-5 w-5 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300"
              >
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full transition-colors ${activeSlide === index ? 'bg-white' : 'bg-white/45 hover:bg-white/75'}`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => changeSlide(1)}
            className="flex h-5 w-5 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300"
          >
            <span aria-hidden="true">→</span>
          </button>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Photo {activeSlide + 1} of {photos.length}: {photos[activeSlide].alt}
          </p>
        </div>
      </div>
    </section>
  );
}
