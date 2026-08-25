import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My summer internship with Melius | Nicholas Chen',
  description:
    'A reflection on building agent context, skills, and the Playground during my engineering internship at Melius.',
  openGraph: {
    title: 'My summer internship with Melius',
    description:
      'A reflection on building agent context, skills, and the Playground during my engineering internship at Melius.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/melius-summer-internship/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My summer internship with Melius',
    images: ['https://nicholaschen.me/blogs/melius-summer-internship/cover.png'],
  },
};

export default function MeliusSummerInternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
