import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Lossless Compression Preserves Audio Quality | Nicholas Chen',
  description: 'A deep dive into how lossless audio formats maintain every bit of audio quality.',
  openGraph: {
    title: 'How Lossless Compression Preserves Audio Quality',
    description: 'A deep dive into how lossless audio formats maintain every bit of audio quality.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Lossless Compression Preserves Audio Quality',
    images: ['https://nicholaschen.me/blogs/lossless-audio/FLAC.png'],
  },
};

export default function LosslessBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
