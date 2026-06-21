import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing | Amaan Bilwar',
  description: 'Blog posts by Amaan Bilwar',
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
