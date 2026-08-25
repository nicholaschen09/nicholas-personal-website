import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Lessons from Working at Startups | Nicholas Chen',
  description:
    'Notes on product judgment, customers, communication, culture, and engineering lessons from working at startups.',
  openGraph: {
    title: '10 Lessons from Working at Startups',
    description:
      'Notes on product judgment, customers, communication, culture, and engineering lessons from working at startups.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/startup-lessons/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Lessons from Working at Startups',
    images: ['https://nicholaschen.me/blogs/startup-lessons/cover.png'],
  },
};

export default function StartupLessonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
