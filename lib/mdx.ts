import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export async function getPostBySlug(slug: string) {
  const fullPathEn = path.join(blogsDirectory, `${slug}.mdx`);
  const fullPathZh = path.join(blogsDirectory, `${slug}.zh.mdx`);

  let sourceEn = '';
  let sourceZh = '';
  let frontmatterEn = {};
  let frontmatterZh = {};

  try {
    if (fs.existsSync(fullPathEn)) {
      const fileContents = fs.readFileSync(fullPathEn, 'utf8');
      const { content, data } = matter(fileContents);
      sourceEn = content;
      frontmatterEn = data;
    }
  } catch (e) {
    console.error(`Error reading EN file for ${slug}:`, e);
  }

  try {
    if (fs.existsSync(fullPathZh)) {
      const fileContents = fs.readFileSync(fullPathZh, 'utf8');
      const { content, data } = matter(fileContents);
      sourceZh = content;
      frontmatterZh = data;
    } else {
      // Fallback to EN if ZH doesn't exist, or just leave empty?
      // Leaving empty allows us to handle "translation missing" in UI
    }
  } catch (e) {
    console.error(`Error reading ZH file for ${slug}:`, e);
  }

  const mdxSourceEn = await serialize(sourceEn, { parseFrontmatter: false });
  const mdxSourceZh = await serialize(sourceZh || sourceEn, { parseFrontmatter: false }); // Fallback for serialization

  return {
    slug,
    en: {
      source: mdxSourceEn,
      frontmatter: frontmatterEn,
    },
    zh: {
      source: mdxSourceZh,
      frontmatter: frontmatterZh,
    },
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  // Filter for .mdx files that are not .zh.mdx
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') && !fileName.endsWith('.zh.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
