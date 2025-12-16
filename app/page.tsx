'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    <main className="flex h-screen flex-col items-center justify-center p-4 md:p-12 overflow-hidden relative z-10">
      {/* Hero Section */}
      <div className="max-w-lg w-full space-y-1 md:space-y-2 mb-6 md:mb-8 pt-24 md:pt-32 mx-auto">
        <div className="flex items-start justify-between mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
            {getDisplayName()}
          </h1>
          <div
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md hover:bg-stone-800/80 transition-colors cursor-pointer -mt-3"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src="/ghcat.png"
              alt="GitHub Cat"
              className="w-8 h-8 md:w-10 md:h-10 opacity-80"
            />
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
                className="group flex items-center gap-3 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <img src="/uwaterloo_logo.jpeg" alt="University of Waterloo" className="w-8 h-8" />
                <div className="leading-tight text-xs md:text-sm">
                  <div className="text-stone-100 font-medium">SYDE</div>
                  <div className="text-stone-400 group-hover:text-stone-100 transition-colors">
                    UWaterloo
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://textql.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <img src="/textql.jpg" alt="TextQL" className="w-8 h-8" />
                <div className="leading-tight text-xs md:text-sm">
                  <div className="text-stone-100 font-medium">{t('current.role2')}</div>
                  <div className="text-stone-400 group-hover:text-stone-100 transition-colors">
                    TextQL
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-4 space-y-3">
            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
                {t('previously.title')}
              </p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <a
                    href="https://www.ownr.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <img src="/ownrco_logo.jpeg" alt="Ownr" className="w-8 h-8" />
                    <div className="leading-tight text-xs md:text-sm">
                      <div className="text-stone-100 font-medium">{t('previously.role1')}</div>
                      <div className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('previously.item1')}
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <img src="/rbc.jpeg" alt="RBC" className="w-8 h-8" />
                    <div className="leading-tight text-xs md:text-sm">
                      <div className="text-stone-100 font-medium">{t('previously.role2')}</div>
                      <div className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('previously.item2')}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
                {t('projects.title')}
              </p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <a
                    href="https://tiktokviewpredictor.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.tiktok')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tinytinyexperiments/vector-db"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.vectorDb')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://diff-digest-appp.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.diffDigest')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://sql-query-parser.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.sqlParser')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/enxilium/posture-checker-robot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.fernando')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/DerrickHa/ht6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.basketbin')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/nicholaschen09/facial-recognition-neural-network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.facialRecognition')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://llm-benchmarking-kappa.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('projects.label.agentSearchEvals')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{t('nav.blogs')}</p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                <li>
                  <a
                    href="/blogs/context-compaction"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    context compaction
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs/ontology-text-to-sql"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    why ontology for text-to-sql?
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/blogs/how-git-actually-works"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    how git actually works
                  </a>
                </li> */}
              </ul>
              {/* Neighbours navigation under Blogs */}
              <div className="mt-4 flex items-center gap-2 text-xs text-stone-400">
                {/* Left Arrow */}
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
                {/* Right Arrow */}
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
            </div>
          </div>
        </div>

        {/* Footer nav with social icons and right-aligned navigation/language */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-stone-400 max-w-lg">
          {/* Social media icons */}
          <a
            href="mailto:nicholas.chen243@gmail.com"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>
          <a
            href="https://github.com/nicholaschen09"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://x.com/nicholaschen__"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <div className="ml-auto flex items-center">
            {/* Language switcher */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'en'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                EN
              </button>
              <span className="text-stone-600">/</span>
              <button
                type="button"
                onClick={() => setLanguage('zh')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'zh'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Animated Drawing Sections */}
      <div className="mt-8 mb-12 space-y-8"></div>
    </main>
  );
}
