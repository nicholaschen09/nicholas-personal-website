'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function FirstInternshipBlog() {
  const { language, setLanguage, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'how-got', title: t('blog.firstInternship.howGotTitle') },
      { id: 'mistakes', title: t('blog.firstInternship.mistakesTitle') },
      { id: 'work-experience', title: t('blog.firstInternship.workExperienceTitle') },
      { id: 'reflections', title: t('blog.firstInternship.reflectionsTitle') },
    ],
    [t],
  );

  useEffect(() => {
    document.title = t('blog.firstInternship.title');
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg">
            {/* Back link */}
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

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              {t('blog.firstInternship.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.firstInternship.date')}</p>

            {/* Cover image */}
            <img src="/blogs/first-internship/ownr.png" alt="Ownr" className="w-full mb-6" />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>{t('blog.firstInternship.intro')}</p>
              </section>

              <section>
                <h2
                  id="how-got"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.firstInternship.howGotTitle')}
                </h2>
                <p>{t('blog.firstInternship.howGotText1')}</p>
                <p className="mt-4">{t('blog.firstInternship.howGotText2')}</p>
              </section>

              <section>
                <h2
                  id="mistakes"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.firstInternship.mistakesTitle')}
                </h2>
                <p className="mb-4">{t('blog.firstInternship.mistakesIntro')}</p>
                <ul className="space-y-2 list-disc list-inside text-stone-300 mb-4">
                  <li>{t('blog.firstInternship.mistake1')}</li>
                  <li>{t('blog.firstInternship.mistake2')}</li>
                  <li>{t('blog.firstInternship.mistake3')}</li>
                  <li>{t('blog.firstInternship.mistake4')}</li>
                </ul>
                <p className="mt-4">{t('blog.firstInternship.mistakesLearning')}</p>
                <p className="mt-4">{t('blog.firstInternship.mistakesCoWorkers')}</p>
                <img
                  src="/blogs/first-internship/restapi.png"
                  alt="REST API Concepts"
                  className="w-full mb-4 mt-4"
                />
                <p className="mt-6 mb-4">{t('blog.firstInternship.goodTitle')}</p>
                <ul className="space-y-2 list-disc list-inside text-stone-300">
                  <li>{t('blog.firstInternship.good1')}</li>
                  <li>{t('blog.firstInternship.good2')}</li>
                </ul>
                <p className="mt-4">{t('blog.firstInternship.aiEmphasis')}</p>
              </section>

              <section>
                <h2
                  id="work-experience"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.firstInternship.workExperienceTitle')}
                </h2>
                <p>{t('blog.firstInternship.codingWithoutAiText1')}</p>
                <p className="mt-4">{t('blog.firstInternship.codingWithoutAiText2')}</p>
                <p className="mt-4">{t('blog.firstInternship.codingWithoutAiText3')}</p>
                <img
                  src="/blogs/first-internship/tools.jpg"
                  alt="Development Tools"
                  className="w-full mb-4 mt-4"
                />
                <p className="mt-4">{t('blog.firstInternship.debuggerText')}</p>
                <img
                  src="/blogs/first-internship/stack-overflow.png"
                  alt="Stack Overflow"
                  className="w-full mb-4 mt-4"
                />
                <p className="mt-6">{t('blog.firstInternship.environmentText')}</p>
                <img
                  src="/blogs/first-internship/work.png"
                  alt="Office Space"
                  className="w-full max-h-64 object-cover mb-4 mt-4"
                />
              </section>

              <section>
                <h2
                  id="reflections"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.firstInternship.reflectionsTitle')}
                </h2>
                <p>{t('blog.firstInternship.reflectionsText1')}</p>
                <p className="mt-4">{t('blog.firstInternship.managerText')}</p>
                <p className="mt-4">{t('blog.firstInternship.conclusionText')}</p>
              </section>
            </div>

            <hr className="border-stone-700 my-8" />
            <Footer />
          </article>
        </ImageLightbox>
      </div>
    </main>
  );
}
