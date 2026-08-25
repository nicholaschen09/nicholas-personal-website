import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning How to Optimize Video Compression for Neural Networks | Nicholas Chen',
  description:
    'A writeup on optimizing a dashcam video compression pipeline for comma.ai neural network evaluation.',
  openGraph: {
    title: 'Learning How to Optimize Video Compression for Neural Networks',
    description:
      'A writeup on optimizing a dashcam video compression pipeline for comma.ai neural network evaluation.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/neural-video-compression/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learning How to Optimize Video Compression for Neural Networks',
    images: ['https://nicholaschen.me/blogs/neural-video-compression/cover.png'],
  },
};

export default function NeuralVideoCompressionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
