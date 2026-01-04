'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

interface BlogPostProps {
  enContent: React.ReactNode;
  zhContent: React.ReactNode;
  frontmatterEn: any;
  frontmatterZh: any;
}

export default function BlogPost({ enContent, zhContent, frontmatterEn, frontmatterZh }: BlogPostProps) {
  const { language, t } = useLanguage();
  
  const isZh = language === 'zh';
  const content = isZh ? zhContent : enContent;
  const frontmatter = isZh ? frontmatterZh : frontmatterEn;

  useEffect(() => {
    document.title = `${frontmatter.title || 'Blog'} | Nicholas Chen`;
  }, [frontmatter.title]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pt-28 pb-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 mt-10 text-sm px-2 py-1 -ml-2 rounded-md"
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{frontmatter.title}</h1>
        <p className="text-stone-500 text-sm mb-6">{frontmatter.date}</p>

        {/* Cover image */}
        {frontmatter.image && (
          <>
             <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="w-full max-h-64 object-cover mb-6"
            />
            <hr className="border-stone-700 mb-8" />
          </>
        )}

        {/* Content */}
        <div className="text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          {content}
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}