import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import type { Post } from '@/interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'));
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title as string,
    date: data.date as string,
    author: data.author as string | undefined,
    excerpt: data.excerpt as string | undefined,
    coverImage: data.coverImage as string | undefined,
    coverAlt: data.coverAlt as string | undefined,
    published: data.published !== false,
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, '')))
    .filter((post): post is Post => post !== null)
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}
