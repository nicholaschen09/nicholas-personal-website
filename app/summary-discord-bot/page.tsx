import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summary Discord Bot',
  description: 'A Discord bot that tracks unread channel messages and summarizes them with Groq.',
};

export default function SummaryDiscordBotPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[30rem] flex-col">
        <header className="flex items-center gap-1 text-xs font-normal leading-none md:text-sm">
          <Link
            href="/"
            className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
          >
            Nicholas Chen
          </Link>
          <span className="text-stone-500"> / </span>
          <Link href="/projects" className="text-stone-400 transition-colors hover:text-stone-200">
            Projects
          </Link>
          <span className="text-stone-500"> / </span>
          <span className="text-stone-400">Summary Discord Bot</span>
        </header>

        <section className="mt-8">
          <div className="mb-5">
            <h1 className="text-2xl font-medium text-white md:text-3xl">Summary Discord Bot</h1>
            <p className="mt-1 text-sm text-stone-500">
              Nicholas Chen · May 2025 ·{' '}
              <a
                href="https://github.com/nicholaschen09/summary-discord-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-stone-100"
              >
                GitHub repository
              </a>
            </p>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-stone-400">
            A Discord bot that tracks unread channel messages and uses Groq to summarize the last
            24 hours. It can also clear a channel’s unread message buffer.
          </p>

          <video
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-md border border-stone-800 bg-black"
            aria-label="Summary Discord Bot demo"
          >
            <source src="/summary-discord-bot/summary-discord-bot-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
