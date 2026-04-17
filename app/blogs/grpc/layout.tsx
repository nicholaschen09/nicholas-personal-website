import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'an introduction to grpc | Nicholas Chen',
  description: 'A deep dive into what makes gRPC so good for modern systems',
  openGraph: {
    title: 'an introduction to grpc',
    description: 'A deep dive into what makes gRPC so good for modern systems',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/grpc/grpc_logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'an introduction to grpc',
    images: ['https://nicholaschen.me/blogs/grpc/grpc_logo.png'],
  },
};

export default function GrpcBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
