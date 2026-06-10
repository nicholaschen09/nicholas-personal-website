'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

const P = 'blog.thoughts-about-schools';

export default function SchoolsBlog() {
  const { t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'paradox', title: t(`${P}.section1.title`) },
      { id: 'approach', title: t(`${P}.section3.title`) },
      { id: 'mission', title: t(`${P}.section4.title`) },
    ],
    [t],
  );

  useEffect(() => {
    document.title = `${t(`${P}.title`)} | Amaan Bilwar`;
  }, [t]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <article className="w-full lg:max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t('blog.back')}
          </Link>

          <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
            {t(`${P}.title`)}
          </h1>
          <p className="text-stone-500 text-sm mb-6">{t(`${P}.date`)}</p>

          <img
            src="/blogs/campusos-header.png"
            alt="CampusOS website header"
            className="w-full mb-6"
          />
          <hr className="border-stone-700 mb-8" />

          <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            <section>
              <h2
                id="paradox"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t(`${P}.section1.title`)}
              </h2>
              <p>{t(`${P}.section1.p1`)}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t(`${P}.section2.listItem1`)}</li>
                <li>• {t(`${P}.section2.listItem2`)}</li>
                <li>• {t(`${P}.section2.listItem3`)}</li>
                <li>• {t(`${P}.section2.listItem4`)}</li>
              </ul>
              <p className="mt-4">{t(`${P}.section1.p2`)}</p>
              <p className="mt-4">{t(`${P}.section1.p3`)}</p>
            </section>

            <section>
              <h2
                id="approach"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t(`${P}.section3.title`)}
              </h2>
              <p>{t(`${P}.section3.p1`)}</p>
              <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                <li>• {t(`${P}.section3.subsection.listItem1`)}</li>
                <li>• {t(`${P}.section3.subsection.listItem2`)}</li>
                <li>• {t(`${P}.section3.subsection.listItem3`)}</li>
                <li>• {t(`${P}.section3.subsection.listItem4`)}</li>
              </ul>
              <p className="mt-4">{t(`${P}.section3.p2`)}</p>
            </section>

            <section>
              <h2
                id="mission"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                {t(`${P}.section4.title`)}
              </h2>
              <p>{t(`${P}.section4.p1`)}</p>
              <p className="mt-4">{t(`${P}.section4.p2`)}</p>
            </section>
          </div>

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
