import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Lossless Audio Matters | Nicholas Chen',
  description: 'A deep dive into lossless audio formats and why they are essential for high-fidelity listening.',
  openGraph: {
    title: 'Why Lossless Audio Matters',
    description: 'A deep dive into lossless audio formats and why they are essential for high-fidelity listening.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Lossless Audio Matters',
  },
};

export default function LosslessBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
