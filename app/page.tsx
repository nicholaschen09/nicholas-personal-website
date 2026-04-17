'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [contextMenu, setContextMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(false);
    setContextMenu(true);
  }, []);

  const handleCopySvg = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch('/ghcat.svg');
      const svgText = await res.text();
      await navigator.clipboard.writeText(svgText);
      setCopied(true);
      setTimeout(() => {
        setContextMenu(false);
        setCopied(false);
      }, 1500);
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (!contextMenu || copied) return;
    const close = () => setContextMenu(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [contextMenu, copied]);

  const extraChars = 'holas';

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setTypedChars((prev) => {
          if (prev >= extraChars.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 80);
    } else {
      intervalRef.current = setInterval(() => {
        setTypedChars((prev) => {
          if (prev <= 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 60);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const getDisplayName = () => {
    if (typedChars > 0 || isHovering) {
      return 'hi im nic' + extraChars.slice(0, typedChars);
    }
    return 'hi im nic';
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      {/* Hero Section */}
      <div className="max-w-lg w-full space-y-3 md:space-y-4 mx-auto">
        <div className="flex items-start justify-between mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
            {getDisplayName()}
          </h1>
          <div className="relative -mt-3">
            <div
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onContextMenu={handleContextMenu}
            >
              <img
                src="/ghcat.svg"
                alt="GitHub Cat"
                className="w-8 h-8 md:w-10 md:h-10 opacity-80"
              />
            </div>
            {contextMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50">
                <button
                  onClick={handleCopySvg}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-stone-400 bg-stone-800/80 hover:bg-orange-500/10 hover:text-orange-500 rounded-md whitespace-nowrap w-[120px] transition-colors"
                >
                  {copied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy SVG
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">currently</p>
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            <li>
              <a
                href="https://uwaterloo.ca/systems-design-engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10"
              >
                <span className="text-stone-400 group-hover:text-orange-500 transition-colors">
                  systems design engineering at university of waterloo
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-5 space-y-4">
            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">previously</p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <a
                    href="https://textql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10"
                  >
                    <span className="text-stone-400 group-hover:text-orange-500 transition-colors">
                      textql
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ownr.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10"
                  >
                    <span className="text-stone-400 group-hover:text-orange-500 transition-colors">
                      ownr
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10"
                  >
                    <span className="text-stone-400 group-hover:text-orange-500 transition-colors">
                      rbc
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">projects</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  <li>
                    <a
                      href="https://github.com/nicholaschen09/metallic-blob"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      metallic-blob
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tiktokviewpredictor.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      tiktok view predictor
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://sql-query-parser.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      sql query parser
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/enxilium/posture-checker-robot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      fernando
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facial-recognition-neural-network.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      facial-recognition
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nicholaschen09/tunl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      tunl
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">writing</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  <li>
                    <a
                      href="/blogs/ontology-text-to-sql"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      why ontology for text-to-sql?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs/grpc"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      an introduction to grpc
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs/lossless-audio"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                    >
                      how lossless compression preserves audio quality
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
