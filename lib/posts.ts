import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import type { Post, PostCategory } from '@/interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

const VALID_CATEGORIES = new Set<PostCategory>(['tech', 'life']);

function parseCategory(value: unknown): PostCategory {
  if (typeof value === 'string' && VALID_CATEGORIES.has(value as PostCategory)) {
    return value as PostCategory;
  }
  return 'life';
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith('_'));
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const markdownPath = join(postsDirectory, `${realSlug}.md`);
  const mdxPath = join(postsDirectory, `${realSlug}.mdx`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : markdownPath;

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title as string;

  return {
    slug: realSlug,
    extension: fullPath.endsWith('.mdx') ? 'mdx' : 'md',
    title,
    listTitle: (data.listTitle as string | undefined) ?? title,
    category: parseCategory(data.category),
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
    .map((slug) => getPostBySlug(slug.replace(/\.mdx?$/, '')))
    .filter((post): post is Post => post !== null)
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}
