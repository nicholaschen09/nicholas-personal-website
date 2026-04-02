import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASCII',
  description: '3D torus rendered as ASCII characters',
};

export default function AsciiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
