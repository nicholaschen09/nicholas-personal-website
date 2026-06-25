import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import type { SiteContent } from '@/interfaces/site';

const contentDirectory = join(process.cwd(), '_content');

export function getSiteContent(): SiteContent {
  const fullPath = join(contentDirectory, 'site.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  return data as SiteContent;
}
