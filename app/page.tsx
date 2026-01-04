'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

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
            <img src="/ghcat.png" alt="GitHub Cat" className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
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
                    href="/blogs/ontology-text-to-sql"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.ontology.title')}
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/git"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.git.title')}
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/how-i-learned-to-code"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.coding.title')}
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/waterloo-coop"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.waterlooCoop.title')}
                  </a>
                </li>

                <li>
                  <a
                    href="/blogs/what-is-grpc"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.grpc.title')}
                  </a>
                </li>
              </ul>
              {/* Neighbours navigation under Blogs */}
              <div className="mt-4 mb-4 flex items-center gap-2 text-xs text-stone-400">
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

        <Footer />
      </div>
      {/* Animated Drawing Sections */}
      <div className="mt-8 mb-12 space-y-8"></div>
    </main>
  );
}
