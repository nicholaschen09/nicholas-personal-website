import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    href: '/astra-risk',
    title: 'Astra Risk',
    date: 'September 2026',
    description:
      'A Hack the North 2026 human-reviewed commercial property underwriting demo',
  },
  {
    href: '/metallic-blob',
    title: 'Metallic Blob',
    date: 'March 2026',
    description:
      'A small visual experiment with a shiny interactive shape that reacts to light and motion',
  },
  {
    href: '/tunl',
    title: 'Tunl',
    date: 'March 2026',
    description: 'A lightweight CLI for sharing terminal sessions over WebSockets',
  },
  {
    href: '/schema-diff',
    title: 'Schema Diff',
    date: 'March 2026',
    description: 'A visualizer that compares database schemas and highlights migration changes',
  },
  {
    href: '/facial-recognition-neural-network',
    title: 'Facial Recognition NN',
    date: 'February 2026',
    description: 'A neural network project for experimenting with facial recognition in the browser',
  },
  {
    href: '/react-grab',
    title: 'React Grab',
    date: 'February 2026',
    description: 'A React Grab plugin that copies detailed DevTools information for selected elements',
  },
  {
    href: '/insforge',
    title: 'InsForge',
    date: 'January 2026',
    description: 'Open source contributions focused on SQL safety checks',
  },
  {
    href: '/caregiver-shift-coordinator',
    title: 'Caregiver Shift Coordinator',
    date: 'January 2026',
    description:
      'A Python microservice that fills open caregiver shifts through SMS and phone outreach',
  },
  {
    href: '/llm-benchmarking',
    title: 'LLM Benchmarking',
    date: 'December 2025',
    description: 'A benchmark comparing search APIs on realistic multi-step tasks for LLM agents',
  },
  {
    href: '/mini-data-platform',
    title: 'Mini Data Platform',
    date: 'November 2025',
    description: 'A synthetic data warehouse and analytics platform with an AI-powered CLI agent',
  },
  {
    href: '/projects/tiktok-view-predictor',
    title: 'TikTok View Predictor',
    date: 'October 2025',
    description: 'A playful predictor for estimating TikTok video views from a few quick inputs',
  },
  {
    href: '/sql-query-parser',
    title: 'SQL Query Parser',
    date: 'May 2025',
    description:
      'A tool for parsing SQL and turning query structure into something easier to inspect',
  },
  {
    href: '/whiteboard',
    title: 'Whiteboard',
    date: 'May 2025',
    description: 'My best attempt at recreating a Figma clone in TypeScript',
  },
  {
    href: '/chrome-productivity-reminder',
    title: 'Chrome Productivity Reminder',
    date: 'May 2025',
    description:
      'A Chrome extension that tracks time on distracting sites and prompts users to refocus',
  },
  {
    href: '/url-shortener',
    title: 'URL Shortener',
    date: 'May 2025',
    description: 'A mobile-friendly Go app for creating and sharing short links',
  },
  {
    href: '/summary-discord-bot',
    title: 'Summary Discord Bot',
    date: 'May 2025',
    description: 'A Discord bot that summarizes unread channel messages using Groq',
  },
  {
    href: '/diff-digest',
    title: 'Diff Digest',
    date: 'May 2025',
    description: 'A web app that turns GitHub pull request diffs into dual-tone release notes',
  },
  {
    href: '/customer-feedback-etl-pipeline',
    title: 'Customer Feedback ETL Pipeline',
    date: 'April 2025',
    description: 'A Python ETL pipeline that processes customer feedback data to generate insights',
  },
  {
    href: '/posture-checker-robot',
    title: 'Posture Checker Robot',
    date: 'February 2025',
    description:
      'A real-time posture checker that won 2nd place overall at UTRA Hacks',
  },
  {
    href: '/basketbin',
    title: 'BasketBin',
    date: 'August 2024',
    description: 'A Hack the 6ix 2024 recycling game that rewards correct waste sorting',
  },
  {
    href: '/voluntrack',
    title: 'Voluntrack',
    date: 'August 2023',
    description: 'A platform connecting volunteers with nonprofits and meaningful opportunities',
  },
  {
    href: '/academates',
    title: 'Academates',
    date: 'June 2023',
    description: 'A JAMHacks 7 project connecting high school students for academic support',
  },
  {
    href: '/online-calculator',
    title: 'Online Calculator',
    date: 'April 2023',
    description: 'A C++ calculator for trigonometric functions and basic area calculations',
  },
  {
    href: '/hangman-game',
    title: 'Hangman Game',
    date: 'April 2023',
    description: 'A console-based Java version of the classic Hangman word game',
  },
  {
    href: '/psychai',
    title: 'PsychAI',
    date: 'March 2023',
    description: 'A MagicHacks project offering mental health support through an AI chatbot',
  },
];

export default function ProjectsPage() {
  const isExternalHref = (href: string) => href.startsWith('http');

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
          <span className="text-stone-400">Projects</span>
        </header>

        <section className="mt-8 space-y-5 text-xs leading-relaxed md:mt-10 md:text-sm">
          {projects.map((item) => (
            <article key={item.href}>
              <div className="flex items-baseline justify-between gap-4">
                {isExternalHref(item.href) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.href} className="transition-colors">
                    {item.title}
                  </Link>
                )}
                <span className="shrink-0 text-right">{item.date}</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-stone-400 md:text-xs">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
