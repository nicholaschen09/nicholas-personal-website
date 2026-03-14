'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function LosslessBlog() {
  const { language, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is-lossless', title: t('blog.lossless.whatIsTitle') },
      { id: 'how-it-works', title: t('blog.lossless.howItWorksTitle') },
      { id: 'common-formats', title: t('blog.lossless.formatsTitle') },
      { id: 'why-it-matters', title: t('blog.lossless.whyItMattersTitle') },
      { id: 'conclusion', title: t('blog.lossless.conclusionTitle') },
    ],
    [t],
  );

  useEffect(() => {
    document.title = t('blog.lossless.title') + ' | Nicholas Chen';
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
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
              {t('blog.lossless.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.lossless.date')}</p>

            {/* Cover image */}
            <img src="/blogs/lossless-audio/FLAC.png" alt="FLAC" className="w-full mb-6" />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>{t('blog.lossless.intro')}</p>
                <h2
                  id="what-is-lossless"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.whatIsTitle')}
                </h2>
                <p>{t('blog.lossless.whatIsText')}</p>
              </section>

              <section>
                <h2
                  id="how-it-works"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.howItWorksTitle')}
                </h2>
                <p>{t('blog.lossless.howItWorksText')}</p>
              </section>

              <section>
                <h2
                  id="common-formats"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.formatsTitle')}
                </h2>
                <p className="mb-6">{t('blog.lossless.formatsText')}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {t('blog.lossless.flacTitle')}
                    </h3>
                    <p>{t('blog.lossless.flacText')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {t('blog.lossless.alacTitle')}
                    </h3>
                    <p>{t('blog.lossless.alacText')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {t('blog.lossless.wavTitle')}
                    </h3>
                    <p>{t('blog.lossless.wavText')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  id="why-it-matters"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.whyItMattersTitle')}
                </h2>
                <p>{t('blog.lossless.whyItMattersText')}</p>
              </section>

              <section>
                <h2
                  id="conclusion"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.conclusionTitle')}
                </h2>
                <p>{t('blog.lossless.conclusionText')}</p>
              </section>
            </div>

            <hr className="border-stone-700 my-12" />
            <Footer />
          </article>
        </ImageLightbox>
        <div className="hidden lg:block" />
      </div>
    </main>
  );
}
