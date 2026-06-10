'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
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
      const res = await fetch('/gh_woody.svg');
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

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  const getDisplayName = () => {
    return t('home.title');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      {/* Hero Section */}
      <div className="max-w-lg w-full space-y-1 md:space-y-2 mx-auto">
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
                src="/gh_woody.svg"
                alt="GitHub Woddy"
                className="w-8 h-8 md:w-10 md:-10 opacity-80"
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
          <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                href="https://github.com/zed-industries/zed/pulls?q=is%3Apr+author%3AAmaanBilwar"
              >
                Zed Guild
                <img src="/zed.png" alt="University of Cincinnati" className="w-4 h-4" />
                bashing bugs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                href="https://github.com/HelixDB/helix-db"
              >
                HelixDB
                <img src="/hlxdb.jpg" alt="University of Cincinnati" className="w-4 h-4" />
                secret project
              </a>
            </li>
            <li>
              <a
                href="https://www.ceas.uc.edu/academics/departments/electrical-computer-engineering/degrees-programs/computer-engineering-bachelor-of-science.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('current.role1')}
                </span>
                <img src="/ucincy_logo.png" alt="University of Cincinnati" className="w-6 h-4" />
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  ucincinnati
                </span>
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
              <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                <li>
                  <a
                    href="https://www.story.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.role1')}
                    </span>
                    <img src="/story.jpg" alt="Story" className="w-4 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.item1')}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://automation.honeywell.com/us/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.role2')}
                    </span>
                    <img src="/Honeywell-Logo.png" alt="Honeywell" className="w-8 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.item2')}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://automation.honeywell.com/us/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                  >
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.role3')}
                    </span>
                    <img src="/Honeywell-Logo.png" alt="Honeywell" className="w-8 h-4" />
                    <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                      {t('previously.item3')}
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
                <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/the-search-thing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.theSearchThing')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.theSearchThing')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/better-vscode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.bettervscode')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.bettervscode')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/pi-openresolve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.pi-openresolve')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.pi-openresolve')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/zsh-zed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.zed-zsh')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.zedZsh')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/hql.nvim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.hql-nvim')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.hqlNvim')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/helix-indexer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.helixdb-indexer')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.helixdbIndexer')}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/AmaanBilwar/vim-extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('projects.label.vim')}
                      </span>
                      <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
                        — {t('projects.vimBrowser')}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{t('nav.blogs')}</p>
            <div className="-mx-2 px-2">
              <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                <li>
                  <a
                    href="/blogs/schools"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.thoughts-about-schools.title')}
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs/tmux-clone"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.tmux-clone.title')}
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs/git101"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.git101.title')}
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs/introducing-jia"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.introducing-jia.title')}
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs/scene-ai-when"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('blog.scene-ai-when.title')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{t('nav.oss')}</p>
            <div className="-mx-2 px-2">
              <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                <li>
                  <a
                    href="https://github.com/zed-industries/zed/pulls?q=is%3Apr+author%3AAmaanBilwar"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('oss.zed')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/google-gemini/gemini-cli/pulls/amaanbilwar"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('oss.geminicli')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/helixdb/helix-db/pulls/amaanbilwar"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    {t('oss.helixdb')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
              {t('nav.resume')}
            </p>
            <div className="-mx-2 px-2">
              <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                  >
                    for when you wanna hire me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
