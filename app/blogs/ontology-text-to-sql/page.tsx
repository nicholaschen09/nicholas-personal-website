'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function OntologyTextToSqlBlog() {
  const { language, setLanguage, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is', title: t('blog.ontology.whatIsTitle') },
      { id: 'why-matter', title: t('blog.ontology.whyMatterTitle') },
      { id: 'building', title: t('blog.ontology.buildingTitle') },
      { id: 'how-engines', title: t('blog.ontology.howEnginesTitle') },
      { id: 'how-used', title: t('blog.ontology.howUsedTitle') },
      { id: 'in-code', title: t('blog.ontology.inCodeTitle') },
      { id: 'vs-other', title: t('blog.ontology.vsOtherTitle') },
      { id: 'future', title: t('blog.ontology.futureTitle') },
    ],
    [t],
  );

  useEffect(() => {
    // Update document title for client-side
    document.title = t('blog.ontology.title');
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
              {t('blog.ontology.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.ontology.date')}</p>

            {/* Cover image */}
            <img
              src="/blogs/ontology/ontology.png"
              alt="TextQL Ontology Interface"
              className="w-full mb-6"
            />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <h2
                  id="what-is"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.whatIsTitle')}
                </h2>
                <p>{t('blog.ontology.whatIsP1')}</p>
                <p className="mt-4">{t('blog.ontology.whatIsP2')}</p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/map.jpeg"
                    alt={t('blog.ontology.mapAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.mapAlt')}
                  </figcaption>
                </figure>
                <p className="mt-4">{t('blog.ontology.whatIsP3')}</p>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  {t('blog.ontology.simpleExampleTitle')}
                </h3>
                <p>{t('blog.ontology.simpleExampleP1')}</p>
              </section>

              <section>
                <h2
                  id="why-matter"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.whyMatterTitle')}
                </h2>
                <p>{t('blog.ontology.whyMatterP1')}</p>
                <p className="mt-4">{t('blog.ontology.whyMatterP2')}</p>
                <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                  <li>• {t('blog.ontology.whyMatterLi1')}</li>
                  <li>• {t('blog.ontology.whyMatterLi2')}</li>
                  <li>• {t('blog.ontology.whyMatterLi3')}</li>
                  <li>• {t('blog.ontology.whyMatterLi4')}</li>
                </ul>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/graphs.jpeg"
                    alt={t('blog.ontology.graphsAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.graphsAlt')}
                  </figcaption>
                </figure>
                <p className="mt-4">{t('blog.ontology.whyMatterP3')}</p>
                <p className="mt-4">{t('blog.ontology.whyMatterP4')}</p>
              </section>

              <section>
                <h2
                  id="building"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.buildingTitle')}
                </h2>
                <p>{t('blog.ontology.buildingP1')}</p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/adding-objects.jpeg"
                    alt={t('blog.ontology.addingObjectsAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.addingObjectsAlt')}
                  </figcaption>
                </figure>
                <p className="mt-4">{t('blog.ontology.buildingP2')}</p>
                <p className="mt-4">{t('blog.ontology.buildingP3')}</p>
                <p className="mt-4">{t('blog.ontology.buildingP4')}</p>
                <p className="mt-4">{t('blog.ontology.buildingP5')}</p>
                <p className="mt-4">{t('blog.ontology.buildingP6')}</p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/attrs.jpeg"
                    alt={t('blog.ontology.attrsAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.attrsAlt')}
                  </figcaption>
                </figure>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  {t('blog.ontology.goodEnoughTitle')}
                </h3>
                <p>{t('blog.ontology.goodEnoughP1')}</p>
                <p className="mt-4">{t('blog.ontology.goodEnoughP2')}</p>
                <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                  <li>• {t('blog.ontology.goodEnoughLi1')}</li>
                  <li>• {t('blog.ontology.goodEnoughLi2')}</li>
                  <li>• {t('blog.ontology.goodEnoughLi3')}</li>
                  <li>• {t('blog.ontology.goodEnoughLi4')}</li>
                </ul>
              </section>

              <section>
                <h2
                  id="how-engines"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.howEnginesTitle')}
                </h2>
                <p>{t('blog.ontology.howEnginesP1')}</p>
                <p className="mt-4">{t('blog.ontology.howEnginesP2')}</p>
                <p className="mt-4">{t('blog.ontology.howEnginesP3')}</p>
                <p className="mt-4">{t('blog.ontology.howEnginesP4')}</p>
                <p className="mt-4">{t('blog.ontology.howEnginesP5')}</p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/chat.png"
                    alt={t('blog.ontology.chatAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.chatAlt')}
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="how-used"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.howUsedTitle')}
                </h2>
                <p>{t('blog.ontology.howUsedP1')}</p>
              </section>

              <section>
                <h2
                  id="in-code"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.inCodeTitle')}
                </h2>
                <p>{t('blog.ontology.inCodeP1')}</p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`{
  "entities": [
    {
      "id": "customers",
      "table": "public.customers",
      "primaryKey": "customer_id",
      "attributes": [
        { "id": "customer_id", "column": "customer_id" },
        { "id": "segment", "column": "segment" }
      ]
    },
    {
      "id": "orders",
      "table": "public.orders",
      "primaryKey": "order_id",
      "attributes": [
        { "id": "order_id", "column": "order_id" },
        { "id": "total_amount", "column": "total_amount" },
        { "id": "status", "column": "status" }
      ]
    }
  ],
  "relationships": [
    {
      "from": "orders",
      "to": "customers",
      "type": "many-to-one",
      "join": "orders.customer_id = customers.customer_id"
    }
  ],
  "metrics": [
    {
      "id": "revenue",
      "label": "revenue",
      "expression": "SUM(orders.total_amount)",
      "entity": "orders",
      "filter": "orders.status = 'completed'"
    }
  ]
}`}
                </pre>
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  {t('blog.ontology.jsonExampleCaption')}
                </figcaption>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  {t('blog.ontology.ambiguityTitle')}
                </h3>
                <p>{t('blog.ontology.ambiguityP1')}</p>
                <p className="mt-4">{t('blog.ontology.ambiguityP2')}</p>
              </section>

              <section>
                <h2
                  id="vs-other"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.vsOtherTitle')}
                </h2>
                <p>
                  <span className="text-stone-100 font-medium">
                    {t('blog.ontology.vsOther.dbtTitle')}
                  </span>{' '}
                  {t('blog.ontology.vsOther.dbtText')}
                </p>
                <p className="mt-4">
                  <span className="text-stone-100 font-medium">
                    {t('blog.ontology.vsOther.biTitle')}
                  </span>{' '}
                  {t('blog.ontology.vsOther.biText')}
                </p>
                <p className="mt-4">
                  <span className="text-stone-100 font-medium">
                    {t('blog.ontology.vsOther.viewsTitle')}
                  </span>{' '}
                  {t('blog.ontology.vsOther.viewsText')}
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/sources.png"
                    alt={t('blog.ontology.sourcesAlt')}
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    {t('blog.ontology.sourcesAlt')}
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="future"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  {t('blog.ontology.futureTitle')}
                </h2>
                <p>{t('blog.ontology.futureP1')}</p>
                <p className="mt-4">{t('blog.ontology.futureP2')}</p>
                <p className="mt-4">{t('blog.ontology.futureP3')}</p>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  {t('blog.ontology.referencesTitle')}
                </h3>
                <ul className="space-y-2 text-stone-400 text-sm">
                  <li>
                    <a
                      href="https://builtin.com/data-science/ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      builtin.com/data-science/ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.palantir.com/ontology-finding-meaning-in-data-palantir-rfx-blog-series-1-399bd1a5971b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      blog.palantir.com - ontology finding meaning in data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.palantir.com/docs/foundry/ontology/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      palantir.com/docs/foundry/ontology/overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.textql.com/core/how-it-works/ontology/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      docs.textql.com - ontology overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.textql.com/ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      app.textql.com/ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/sql-process"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      textql.com/blog/sql-process
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/why-ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      textql.com/blog/why-ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/haskell-in-production"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      textql.com/blog/haskell-in-production
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-stone-500 text-xs italic">
                  {t('blog.ontology.note')}{' '}
                  <a
                    href="https://textql.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-300 underline"
                  >
                    textql
                  </a>
                </p>
              </section>
            </div>

            <Footer className="mt-10" />
          </article>
        </ImageLightbox>
      </div>
    </main>
  );
}
