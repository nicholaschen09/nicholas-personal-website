import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'building agent context for generative media | Nicholas Chen',
  description:
    'How we designed team-wide context and skills at Melius so creative agents stay on-brand across image, video, and copy workflows.',
  openGraph: {
    title: 'building agent context for generative media',
    description:
      'How we designed team-wide context and skills at Melius so creative agents stay on-brand across image, video, and copy workflows.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/agent-context/canvas.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'building agent context for generative media',
    images: ['https://nicholaschen.me/blogs/agent-context/canvas.png'],
  },
};

export default function AgentContextLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
