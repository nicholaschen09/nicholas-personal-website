'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { MDXRemote } from 'next-mdx-remote';

const components = {
  // Define custom components here if needed to match styling
  // For example, mapping standard HTML tags to Tailwind classes
  h1: (props: any) => <h1 className="text-2xl md:text-3xl font-medium text-white mb-2" {...props} />,
  h2: (props: any) => <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="space-y-2 list-disc list-inside text-stone-400 mb-4" {...props} />,
  li: (props: any) => <li className="" {...props} />,
  a: (props: any) => <a className="text-stone-200 hover:text-white underline" {...props} />,
  code: (props: any) => <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs md:text-sm font-mono" {...props} />,
  pre: (props: any) => <pre className="bg-stone-900 p-4 rounded-lg overflow-x-auto mb-6 text-xs md:text-sm" {...props} />,
  img: (props: any) => (
    <figure className="my-6">
      <img className="w-full rounded-sm" {...props} alt={props.alt || ''} />
      {props.title && <figcaption className="text-stone-500 text-xs mt-2 italic text-center">{props.title}</figcaption>}
    </figure>
  ),
  hr: (props: any) => <hr className="border-stone-700 my-8" {...props} />,
};

interface BlogPostProps {
  en: {
    source: any;
    frontmatter: any;
  };
  zh: {
    source: any;
    frontmatter: any;
  };
}

export default function BlogPost({ en, zh }: BlogPostProps) {
  const { language, t } = useLanguage();
  
  // Choose content based on language
  // If zh is missing (source is same as en fallback in lib/mdx), we might want to show a warning or just show EN?
  // lib/mdx handles fallback to EN if ZH is missing, so `zh` prop will always have something.
  // However, we can check frontmatter titles to see if they differ, or just trust the prop.
  
  const content = language === 'zh' ? zh : en;
  const { source, frontmatter } = content;

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
          <MDXRemote {...source} components={components} />
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
