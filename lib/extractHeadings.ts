import GithubSlugger from 'github-slugger';
import type { TOCSection } from '@/components/TableOfContents';

export function extractHeadings(markdown: string): TOCSection[] {
  const slugger = new GithubSlugger();
  const sections: TOCSection[] = [];

  for (const line of markdown.split('\n')) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const title = match[1].trim();
      sections.push({ id: slugger.slug(title), title });
    }
  }

  return sections;
}
