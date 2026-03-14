'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import MathText from '@/components/MathText';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';
import QualitySlider from './components/QualitySlider';
import LosslessComparisonPlayer from './components/LosslessComparisonPlayer';

export default function LosslessBlog() {
  const { language, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is-lossless', title: t('blog.lossless.whatIsTitle') },
      { id: 'lossless-vs-lossy', title: t('blog.lossless.losslessVsLossyTitle') },
      { id: 'mp3-under-the-hood', title: t('blog.lossless.mp3Title') },
      { id: 'why-it-matters', title: t('blog.lossless.whyItMattersTitle') },
      { id: 'common-formats', title: t('blog.lossless.formatsTitle') },
      { id: 'how-lossless-compressed', title: t('blog.lossless.howCompressedTitle') },
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
                  id="lossless-vs-lossy"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.losslessVsLossyTitle')}
                </h2>
                <p className="mb-4">{t('blog.lossless.lossyIntro')}</p>
                <p className="mb-6">{t('blog.lossless.losslessIntro')}</p>

                <div id="visualizers" className="mt-8 scroll-mt-8 space-y-8">
                  <QualitySlider />
                </div>

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
                      {t('blog.lossless.whatIsFlacTitle')}
                    </h3>
                    <p>{t('blog.lossless.whatIsFlacText')}</p>
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
                  id="mp3-under-the-hood"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.mp3Title')}
                </h2>
                <p>{t('blog.lossless.mp3Short')}</p>
              </section>

              <section>
                <h2
                  id="why-it-matters"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.whyItMattersTitle')}
                </h2>
                <p className="mb-4">{t('blog.lossless.whyItMattersText')}</p>
                <p className="mb-8">{t('blog.lossless.whyMattersHonest')}</p>
                <LosslessComparisonPlayer />
              </section>

              <section>
                <h2
                  id="how-lossless-compressed"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.howCompressedTitle')}
                </h2>
                <p className="mb-6">{t('blog.lossless.howCompressedIntro')}</p>

                <h3
                  id="linear-prediction-depth"
                  className="text-lg font-medium text-white mb-4 mt-6 scroll-mt-8"
                >
                  {t('blog.lossless.lpcDepthTitle')}
                </h3>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.lpcSamples')} />
                </p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.lpcPredictable')} />
                </p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.lpcExample')} />
                </p>
                <pre className="mb-6 rounded-md border border-stone-700 bg-stone-800/50 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`// Same example: p=3, coefficients a1=1.5, a2=-0.7, a3=0.2
const a = [1.5, -0.7, 0.2];
const prev = [100, 90, 80];  // x[n-1], x[n-2], x[n-3]

let pred = 0;
for (let k = 0; k < a.length; k++) pred += a[k] * prev[k];
// pred = 1.5*100 + (-0.7)*90 + 0.2*80 = 103

const xActual = 105;
const residual = xActual - pred;  // e[n] = 105 - 103 = 2
// Store residual (small) instead of 105 (large) → compression.`}
                </pre>

                <h3 className="text-lg font-medium text-white mb-2 mt-8">
                  {t('blog.lossless.lpcHowFindTitle')}
                </h3>
                <p className="mb-4">{t('blog.lossless.lpcHowFindText')}</p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.lpcMinFormula')} />
                </p>
                <p className="mb-6">{t('blog.lossless.lpcLeastSquares')}</p>

                <h3 className="text-lg font-medium text-white mb-2 mt-6">
                  <MathText text={t('blog.lossless.lpcOrderTitle')} />
                </h3>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.lpcOrderText')} />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">
                  {t('blog.lossless.lpcKeyPointTitle')}
                </h3>
                <p className="mb-8">
                  <MathText text={t('blog.lossless.lpcKeyPointText')} />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">
                  {t('blog.lossless.whatIsNTitle')}
                </h3>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.whatIsNText')} />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">
                  {t('blog.lossless.residualsTitle')}
                </h3>
                <p className="mb-4">
                  <MathText text={t('blog.lossless.residualsText')} />
                </p>
                <p className="mb-4">{t('blog.lossless.residualsBitsIntro')}</p>
                <p className="mb-4">
                  <MathText text={t('blog.lossless.residualsDist')} />
                </p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.losslessGuarantee')} />
                </p>

                <h3 className="text-lg font-medium text-white mb-2">
                  {t('blog.lossless.reconstructTitle')}
                </h3>
                <p className="mb-4">
                  <MathText text={t('blog.lossless.reconstructText')} />
                </p>
                <pre className="mb-0 rounded-md border border-stone-700 bg-stone-800/50 p-4 overflow-x-auto text-[10px] text-stone-200 md:text-xs font-mono">
                  {`// Decoder: prediction + residual → original sample
const pred = 103;   // from same coefficients + previous samples
const residual = 2; // stored in the bitstream
const xReconstructed = pred + residual;  // 103 + 2 = 105 ✓`}
                </pre>
              </section>

              <section>
                <h2
                  id="rice-coding"
                  className="text-lg font-medium text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.lossless.riceTitle')}
                </h2>
                <p className="mb-6">{t('blog.lossless.riceGoal')}</p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.riceParamK')} />
                </p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.riceExampleE6')} />
                </p>
                <p className="mb-6">
                  <MathText text={t('blog.lossless.riceUnary')} />
                </p>
                <p className="mb-4">
                  <MathText text={t('blog.lossless.riceTableIntro')} />
                </p>
                <div className="mb-6 overflow-x-auto">
                  <table className="w-full min-w-[200px] border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-stone-600">
                        <th className="py-2 pr-3 font-medium text-stone-400">
                          {t('blog.lossless.riceTableE')}
                        </th>
                        <th className="py-2 pr-3 font-medium text-stone-400">
                          {t('blog.lossless.riceTableBinary')}
                        </th>
                        <th className="py-2 font-medium text-stone-400">
                          {t('blog.lossless.riceTableRice')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">0</td>
                        <td className="py-2 pr-3">0000</td>
                        <td className="py-2">0 (1 bit)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">1</td>
                        <td className="py-2 pr-3">0001</td>
                        <td className="py-2">010 (3 bits)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">2</td>
                        <td className="py-2 pr-3">0010</td>
                        <td className="py-2">011 (3 bits)</td>
                      </tr>
                      <tr className="border-b border-stone-700">
                        <td className="py-2 pr-3">4</td>
                        <td className="py-2 pr-3">0100</td>
                        <td className="py-2">10100 (5 bits)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-0">
                  <MathText text={t('blog.lossless.riceChooseK')} />
                </p>
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
