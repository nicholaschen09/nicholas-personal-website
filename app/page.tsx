'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import Footer from '@/components/Footer';

type LogoHoverLinkProps = {
  href: string;
  label: string;
  logoSrc?: string;
  logoAlt: string;
  logoClassName?: string;
};

function LogoHoverLink({ href, label, logoSrc, logoAlt, logoClassName = '' }: LogoHoverLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40"
    >
      <span className="min-w-0 text-stone-400 transition-colors group-hover:text-stone-200">
        {label}
      </span>
      <span className="ml-auto flex h-4 w-8 shrink-0 items-center justify-end opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={32}
            height={16}
            className={`max-h-4 max-w-8 object-contain ${logoClassName}`}
          />
        ) : (
          <span className="text-xs font-medium text-stone-200">{logoAlt}</span>
        )}
      </span>
    </a>
  );
}

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
      if (!res.ok) throw new Error('Failed to copy SVG');
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

    const isComplete = isHovering ? typedChars >= extraChars.length : typedChars <= 0;
    if (isComplete) {
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(
      () => {
        setTypedChars((prev) =>
          isHovering ? Math.min(prev + 1, extraChars.length) : Math.max(prev - 1, 0),
        );
      },
      isHovering ? 80 : 60,
    );

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [extraChars.length, isHovering, typedChars]);

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
                  type="button"
                  onClick={handleCopySvg}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-stone-400 bg-stone-800/80 hover:bg-stone-700/40 hover:text-stone-200 rounded-md whitespace-nowrap w-[120px] transition-colors"
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
              <LogoHoverLink
                href="https://uwaterloo.ca/systems-design-engineering/"
                label="systems design engineering at university of waterloo"
                logoSrc="/uwaterloo_logo.jpeg"
                logoAlt="University of Waterloo"
              />
            </li>
          </ul>
        </div>

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-5 space-y-4">
            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">previously</p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <LogoHoverLink
                    href="https://melius.com/"
                    label="melius"
                    logoSrc="/meliusai_logo.jpeg"
                    logoAlt="Melius"
                  />
                </li>
                <li>
                  <LogoHoverLink
                    href="https://textql.com/"
                    label="textql"
                    logoSrc="/textql.jpg"
                    logoAlt="TextQL"
                  />
                </li>
                <li>
                  <LogoHoverLink
                    href="https://www.ownr.co/"
                    label="ownr"
                    logoSrc="/ownrco_logo.jpeg"
                    logoAlt="Ownr"
                  />
                </li>
                <li>
                  <LogoHoverLink
                    href="https://www.rbc.com/"
                    label="rbc"
                    logoSrc="/rbc.jpeg"
                    logoAlt="RBC"
                  />
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
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
                    >
                      metallic blob
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tiktokviewpredictor.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
                    >
                      tiktok view predictor
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://sql-query-parser.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
                    >
                      sql query parser
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nicholaschen09/tunl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
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
                    <Link
                      href="/blogs/ontology-text-to-sql"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
                    >
                      why ontology for text-to-sql?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs/melius-summer-internship"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200"
                    >
                      my summer internship with melius
                    </Link>
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
