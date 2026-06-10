import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My thoughts about schools in India | Amaan Bilwar',
  description: 'Template structure for a blog post',
  openGraph: {
    title: 'My thoughts about schools in India',
    description: 'Template structure for a blog post',
    type: 'article',
    images: ['/blogs/template/placeholder.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My thoughts about schools in India',
    images: ['/blogs/template/placeholder.svg'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
