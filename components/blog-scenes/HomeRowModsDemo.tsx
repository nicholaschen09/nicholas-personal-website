'use client';

import { useEffect, useState } from 'react';

const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'];

export default function HomeRowModsDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % keys.length);
    }, 700);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="my-8 overflow-hidden rounded-none border border-stone-700/70 bg-black p-5 shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between border-b border-stone-800 pb-3 text-xs uppercase tracking-[0.24em] text-stone-500">
        <span>home row mod preview</span>
        <span>34 keys</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {keys.map((key, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={key}
              className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-none border font-mono text-lg transition-all duration-500 ease-out ${
                isActive
                  ? 'border-emerald-400 bg-emerald-500/20 text-emerald-100 shadow-[0_0_28px_rgba(52,211,153,0.28)]'
                  : 'border-stone-800 bg-stone-950 text-stone-500'
              }`}
            >
              {isActive && (
                <span className="absolute inset-y-0 -left-1/2 w-1/2 animate-home-row-shimmer bg-gradient-to-r from-transparent via-emerald-200/35 to-transparent" />
              )}
              <span className="relative">{key}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        A tiny MDX-powered React component embedded inside the post. The active key loops with a smooth shimmer so we can test interactive blog content in the normal article layout.
      </p>
    </div>
  );
}
