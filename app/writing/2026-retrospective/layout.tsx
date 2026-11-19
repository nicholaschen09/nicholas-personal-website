import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Retrospective on My Year in 2026',
  description: 'A reflection on school, recruiting, work, and life in 2026.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'A Retrospective on My Year in 2026',
    description: 'A reflection on school, recruiting, work, and life in 2026.',
    type: 'article',
    images: ['/writing/2026-retrospective/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Retrospective on My Year in 2026',
    images: ['/writing/2026-retrospective/cover.png'],
  },
};

export default function RetrospectiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
