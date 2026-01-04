import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is gRPC? | Nicholas Chen',
  description: 'A guide to understanding gRPC, how it works, and why you should use it.',
  openGraph: {
    title: 'What is gRPC?',
    description: 'A guide to understanding gRPC, how it works, and why you should use it.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/grpc/grpc.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is gRPC?',
    images: ['https://nicholaschen.me/blogs/grpc/grpc.png'],
  },
};

export default function GrpcBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
