'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function WaterlooCoopBlog() {
  const { language, setLanguage, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'exploring', title: t('blog.waterlooCoop.exploringTitle') },
      { id: 'learning', title: t('blog.waterlooCoop.learningTitle') },
      { id: 'commitment', title: t('blog.waterlooCoop.commitmentTitle') },
      { id: 'salaries', title: t('blog.waterlooCoop.salariesTitle') },
      { id: 'prestige', title: t('blog.waterlooCoop.prestigeTitle') },
      { id: 'misc', title: t('blog.waterlooCoop.miscTitle') },
      { id: 'conclusion', title: t('blog.waterlooCoop.conclusionTitle') },
    ],
    [t],
  );

  useEffect(() => {
    // Update document title for client-side
    document.title = t('blog.waterlooCoop.title');
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
              {t('blog.waterlooCoop.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.waterlooCoop.date')}</p>

            {/* Cover image */}
            <figure>
              <img
                src="/blogs/waterloo-coop/waterloostats.png"
                alt={t('blog.waterlooCoop.title')}
                className="w-full mb-6"
              />
            </figure>
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-4 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <p className="text-stone-400 italic">{t('blog.waterlooCoop.note')}</p>

              <p>{t('blog.waterlooCoop.intro')}</p>

              <section>
                <h2
                  id="exploring"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.exploringTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.exploringP1')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/nyc1.JPG"
                      alt={t('blog.waterlooCoop.exploringImg1Alt')}
                      className="w-full max-h-64 object-cover object-bottom my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.exploringImg1Caption')}
                    </figcaption>
                  </figure>

                  <p>{t('blog.waterlooCoop.exploringP2')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/room.JPG"
                      alt={t('blog.waterlooCoop.exploringImg2Alt')}
                      className="w-full max-h-64 object-cover my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.exploringImg2Caption')}
                    </figcaption>
                  </figure>

                  <p>{t('blog.waterlooCoop.exploringP3')}</p>
                </div>
              </section>

              <section>
                <h2
                  id="learning"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.learningTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.learningP1')}</p>

                  <p>{t('blog.waterlooCoop.learningP2')}</p>

                  <p>{t('blog.waterlooCoop.learningP3')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/sankey.png"
                      alt={t('blog.waterlooCoop.learningImgAlt')}
                      className="w-full max-h-[500px] my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.learningImgCaption')}
                    </figcaption>
                  </figure>

                  <p>{t('blog.waterlooCoop.learningP4')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/employment.png"
                      alt={t('blog.waterlooCoop.employmentImgAlt')}
                      className="w-full my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.employmentImgCaption')}
                    </figcaption>
                  </figure>

                  <p>{t('blog.waterlooCoop.learningP5')}</p>
                </div>
              </section>

              <section>
                <h2
                  id="commitment"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.commitmentTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.commitmentP1')}</p>

                  <p>{t('blog.waterlooCoop.commitmentP2')}</p>

                  <p>{t('blog.waterlooCoop.commitmentP3')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/learning-graph.png"
                      alt={t('blog.waterlooCoop.commitmentImgAlt')}
                      className="w-full my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.commitmentImgCaption')}
                    </figcaption>
                  </figure>
                </div>
              </section>

              <section>
                <h2
                  id="salaries"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.salariesTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.salariesP1')}</p>

                  <p>{t('blog.waterlooCoop.salariesP2')}</p>

                  <p>
                    {t('blog.waterlooCoop.salariesP3')}{' '}
                    <a
                      href="https://levels.fyi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-200 hover:text-white underline"
                    >
                      levels.fyi
                    </a>
                  </p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/levels.png"
                      alt={t('blog.waterlooCoop.salariesImgAlt')}
                      className="w-full my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.salariesImgCaption')}
                    </figcaption>
                  </figure>
                </div>
              </section>

              <section>
                <h2
                  id="prestige"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.prestigeTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.prestigeP1')}</p>

                  <p>{t('blog.waterlooCoop.prestigeP2')}</p>

                  <figure>
                    <img
                      src="/blogs/waterloo-coop/mango.png"
                      alt={t('blog.waterlooCoop.prestigeImgAlt')}
                      className="w-full my-4"
                    />
                    <figcaption className="text-stone-500 text-xs mt-2 italic">
                      {t('blog.waterlooCoop.prestigeImgCaption')}
                    </figcaption>
                  </figure>
                </div>
              </section>

              <section>
                <h2
                  id="misc"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.miscTitle')}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-2 mt-4">
                      {t('blog.waterlooCoop.miscUnemploymentTitle')}
                    </h3>
                    <p>{t('blog.waterlooCoop.miscUnemployment')}</p>
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-2 mt-4">
                      {t('blog.waterlooCoop.miscEvalsTitle')}
                    </h3>
                    <p>{t('blog.waterlooCoop.miscEvals')}</p>
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-2 mt-4">
                      {t('blog.waterlooCoop.miscPDTitle')}
                    </h3>
                    <p>{t('blog.waterlooCoop.miscPD')}</p>
                  </div>

                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-2 mt-4">
                      {t('blog.waterlooCoop.miscVisasTitle')}
                    </h3>
                    <p>{t('blog.waterlooCoop.miscVisas')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  id="conclusion"
                  className="text-base md:text-lg font-medium text-white mb-3 mt-6 scroll-mt-8"
                >
                  {t('blog.waterlooCoop.conclusionTitle')}
                </h2>

                <div className="space-y-4">
                  <p>{t('blog.waterlooCoop.conclusionP1')}</p>

                  <p>{t('blog.waterlooCoop.conclusionP2')}</p>
                </div>
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
