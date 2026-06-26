import HomeClient from '@/components/HomeClient';
import { getSiteContent } from '@/lib/content';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const { home } = getSiteContent();
  const blogPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
  }));

  return <HomeClient home={home} blogPosts={blogPosts} />;
}
