import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'how lossless audio compression works | Nicholas Chen',
  description: 'how lossless audio compression works',
  openGraph: {
    title: 'how lossless audio compression works',
    description: 'how lossless audio compression works',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'how lossless audio compression works',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
};

export default function LosslessBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
