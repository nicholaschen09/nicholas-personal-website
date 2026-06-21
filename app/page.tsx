import HomeClient from '@/components/HomeClient';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const blogPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
  }));

  return <HomeClient blogPosts={blogPosts} />;
}
