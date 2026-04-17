'use client';

import Link from 'next/link';
import AsciiTorusCanvas from '@/components/AsciiTorusCanvas';
import BackToHomeLink from '@/components/BackToHomeLink';

export default function AsciiPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-400 font-mono selection:bg-orange-500/30 selection:text-orange-200">
      <main className="max-w-lg mx-auto px-6 py-12 md:py-24">
        <BackToHomeLink />

        <header className="mb-12">
          <h1 className="text-stone-100 text-base md:text-lg font-medium lowercase mb-4">
            rotating torus ascii render
          </h1>
          <div className="space-y-4">
            <p className="text-xs md:text-sm leading-relaxed text-stone-400 lowercase">
              small experiment: a torus as monospace text where brightness maps to character density, so the hole and rim read as contours. three.js renders offscreen in react, maps luminance to a sorted glyph ramp, and averages a few subpixels per cell for softer edges.
            </p>
          </div>
        </header>

        <section className="mb-12">
          <div className="aspect-square w-full bg-stone-900/30 rounded-lg border border-stone-800/50 flex items-center justify-center overflow-hidden">
            <AsciiTorusCanvas />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-stone-100 text-sm font-medium lowercase">references</h2>
          <ul className="text-xs md:text-sm space-y-2 list-none p-0">
            <li>
              <a
                href="https://alexharri.com/blog/ascii-characters-are-not-pixels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-2 py-1 -mx-2 rounded-md hover:bg-orange-500/10 hover:text-orange-500 transition-colors underline decoration-stone-800 underline-offset-4"
              >
                ASCII characters are not pixels: a deep dive into ASCII rendering (Alex Harri)
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
