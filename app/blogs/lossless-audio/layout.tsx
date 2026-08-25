import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How lossless audio compression works | Nicholas Chen',
  description: 'How lossless audio compression works',
  openGraph: {
    title: 'How lossless audio compression works',
    description: 'How lossless audio compression works',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How lossless audio compression works',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
};

export default function LosslessBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
