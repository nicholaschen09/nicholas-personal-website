'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function ImageLightbox({ children }: { children: React.ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState('');
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const open = useCallback((imgSrc: string, imgAlt: string) => {
    setSrc(imgSrc);
    setAlt(imgAlt);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setSrc(null), 200);
  }, []);

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [src, close]);

  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [src]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        const img = target as HTMLImageElement;
        open(img.src, img.alt);
      }
    },
    [open],
  );

  return (
    <>
      <div
        ref={containerRef}
        onClick={handleClick}
        className="w-full cursor-zoom-in [&_img]:cursor-zoom-in"
      >
        {children}
      </div>

      {src && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
        >
          <img
            src={src}
            alt={alt}
            className={`max-w-[92vw] max-h-[92vh] object-contain rounded-lg shadow-2xl transition-transform duration-200 ${visible ? 'scale-100' : 'scale-95'}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
