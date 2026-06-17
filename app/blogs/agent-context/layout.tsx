import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'agent context / skills for creative tools | Nicholas Chen',
  description:
    'How we built agent context and skills at Melius so creative teams can apply custom branding across generative media workflows.',
  openGraph: {
    title: 'agent context / skills for creative tools',
    description:
      'How we built agent context and skills at Melius so creative teams can apply custom branding across generative media workflows.',
    type: 'article',
    images: ['https://nicholaschen.me/blogs/agent-context/canvas.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'agent context / skills for creative tools',
    images: ['https://nicholaschen.me/blogs/agent-context/canvas.png'],
  },
};

export default function AgentContextLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
