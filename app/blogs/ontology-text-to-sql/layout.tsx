import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why ontology for text-to-SQL? | Nicholas Chen',
  description: 'Why ontology is crucial for text-to-SQL systems',
  openGraph: {
    title: 'Why ontology for text-to-SQL?',
    description: 'Why ontology is crucial for text-to-SQL systems',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/ontology/ontology.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why ontology for text-to-SQL?',
    images: ['https://nicholaschen.me/blogs/ontology/ontology.png'],
  },
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
