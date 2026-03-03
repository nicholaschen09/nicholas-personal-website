'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
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
      if (language === 'zh') {
        return '嗨，我是 nic' + extraChars.slice(0, typedChars);
      }
      return 'hi im nic' + extraChars.slice(0, typedChars);
    }
    return t('home.title');
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
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-stone-400 bg-stone-800/80 hover:text-stone-100 rounded-md whitespace-nowrap w-[120px]"
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
        {/* location / building lines removed */}

        <div>
          <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
            {t('hero.currently')}
          </p>
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            <li>
              <a
                href="https://uwaterloo.ca/systems-design-engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('current.role1')}
                </span>
                <img src="/uwaterloo_logo.jpeg" alt="University of Waterloo" className="w-4 h-4" />
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  uwaterloo
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-5 space-y-4">
            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
                {t('previously.title')}
              </p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <a
                    href="https://textql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('current.role2')}
                    </span>
                    <img src="/textql.jpg" alt="TextQL" className="w-4 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      textql
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ownr.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.role1')}
                    </span>
                    <img src="/ownrco_logo.jpeg" alt="Ownr" className="w-4 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.item1')}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.role2')}
                    </span>
                    <img src="/rbc.jpeg" alt="RBC" className="w-4 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.item2')}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
                {t('projects.title')}
              </p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  <li>
                    <a
                      href="https://tiktokviewpredictor.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('projects.label.tiktok')}
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://sql-query-parser.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('projects.label.sqlParser')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/enxilium/posture-checker-robot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('projects.label.fernando')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facial-recognition-neural-network.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('projects.label.facialRecognition')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nicholaschen09/tunl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('projects.label.tunl')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{t('nav.blogs')}</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  <li>
                    <a
                      href="/blogs/ontology-text-to-sql"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('blog.ontology.title')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs/grpc"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                    >
                      {t('blog.grpc.title')}
                    </a>
                  </li>
                </ul>
              </div>
              {/* Webring links - commented out
              <div className="mt-4 mb-4 flex items-center gap-2 text-xs text-stone-400">
                <a
                  href="https://about.ceruleanechoes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-6 w-6 items-center justify-center rounded bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <path
                      d="M12 15L6 9L12 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.sydeb.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-6 w-6 items-center justify-center rounded bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
                >
                  <img
                    src="/white.svg"
                    alt="White SVG Pattern"
                    className="w-6 h-6 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </a>
                <a
                  href="https://www.jordankhatri.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-6 w-6 items-center justify-center rounded bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <path
                      d="M6 3L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
