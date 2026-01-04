'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function GrpcBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Update document title for client-side
    document.title = `${t('blog.grpc.title')} | Nicholas Chen`;
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{t('blog.grpc.title')}</h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.grpc.date')}</p>

        {/* Cover image */}
        <img
          src="/blogs/grpc/grpc.png"
          alt="gRPC"
          className="w-full max-h-64 object-cover mb-6"
        />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>{t('blog.grpc.intro')}</p>
          </section>

          {/* What is gRPC */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.whatIsTitle')}
            </h2>
            <p>{t('blog.grpc.whatIsText')}</p>
          </section>

          {/* How it works */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.howItWorksTitle')}
            </h2>
            <p>{t('blog.grpc.howItWorksText')}</p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.grpc.protobufTitle')}
            </h3>
            <p>{t('blog.grpc.protobufText')}</p>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.benefitsTitle')}
            </h2>
            
            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-4">
              {t('blog.grpc.benefits.performanceTitle')}
            </h3>
            <p>{t('blog.grpc.benefits.performanceText')}</p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.grpc.benefits.codeGenTitle')}
            </h3>
            <p>{t('blog.grpc.benefits.codeGenText')}</p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.grpc.benefits.streamingTitle')}
            </h3>
            <p>{t('blog.grpc.benefits.streamingText')}</p>
          </section>

          {/* gRPC with Go */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.goTitle')}
            </h2>
            <p className="mb-4">{t('blog.grpc.goText')}</p>
            <p>{t('blog.grpc.goDetails')}</p>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.comparisonTitle')}
            </h2>
            <p>{t('blog.grpc.comparisonText')}</p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.grpc.conclusionTitle')}
            </h2>
            <p>{t('blog.grpc.conclusionText')}</p>
          </section>

        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
