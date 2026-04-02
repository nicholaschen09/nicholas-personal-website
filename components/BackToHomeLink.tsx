'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

/** Same as the blog post “back” control (chevron + localized label). */
export default function BackToHomeLink({ className = '' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-stone-500 transition-colors hover:bg-stone-800/80 hover:text-stone-100 rounded-md px-2 py-1 -ml-2 text-sm ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
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
  );
}
