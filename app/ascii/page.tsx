'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import AsciiTorusCanvas from '@/components/AsciiTorusCanvas';
import BackToHomeLink from '@/components/BackToHomeLink';
import Footer from '@/components/Footer';

export default function AsciiPage() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 md:p-12">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center space-y-6">
        <div className="w-full self-start text-left">
          <BackToHomeLink />
          <h1 className="mt-4 text-2xl font-medium leading-snug text-white md:text-3xl">
            {t('ascii.title')}
          </h1>
          <p
            className="mt-5 text-sm leading-relaxed text-stone-400 md:text-[15px]"
            style={{ fontWeight: 400 }}
          >
            {t('ascii.intro')}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center px-1 py-2 md:px-2 md:py-5">
          <div className="flex w-full justify-center">
            <AsciiTorusCanvas />
          </div>
        </div>

        <section className="w-full self-start border-t border-stone-700 pt-6">
          <h3 className="mb-3 text-sm font-semibold text-stone-200 md:text-base">
            {t('ascii.referencesTitle')}
          </h3>
          <ul className="space-y-2 text-xs text-stone-400 md:text-sm">
            <li>
              <a
                href="https://alexharri.com/blog/ascii-rendering"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-stone-200"
              >
                {t('ascii.harriArticleLinkText')}
              </a>
            </li>
          </ul>
        </section>

        <Footer className="mt-0 w-full" />
      </div>
    </main>
  );
}
