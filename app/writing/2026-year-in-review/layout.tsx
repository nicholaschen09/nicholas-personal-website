import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Retrospective on My Year in 2026',
  description: 'An in-progress reflection on school, recruiting, work, and life in 2026.',
  robots: { index: false, follow: false },
};

export default function YearInReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
