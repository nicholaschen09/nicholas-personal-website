'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';
import { formatPostDate } from '@/lib/formatPostDate';
import './blog-markdown.css';

interface BlogPostViewProps {
  title: string;
  date: string;
  author?: string;
  coverImage?: string;
  coverAlt?: string;
  contentHtml: string;
  sections: TOCSection[];
}

export default function BlogPostView({
  title,
  date,
  author,
  coverImage,
  coverAlt,
  contentHtml,
  sections,
}: BlogPostViewProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <article className="w-full lg:max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
          >
            <svg aria-label="Go back" width="16" height="16" viewBox="0 0 16 16" fill="none">
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

          <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{title}</h1>
          <p className="text-stone-500 text-sm mb-6">{formatPostDate(date, author)}</p>

          {coverImage && (
            <img src={coverImage} alt={coverAlt ?? title} className="w-full mb-6" />
          )}

          <hr className="border-stone-700 mb-8" />

          <div className="blog-markdown" dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <Footer className="mt-10" />
        </article>
      </div>
    </main>
  );
}
