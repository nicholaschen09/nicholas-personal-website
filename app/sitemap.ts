import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const baseUrl = 'https://amaandoes.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const lastPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date();

  return [
    {
      url: baseUrl,
      lastModified: lastPostDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...postEntries,
  ];
}
