import type { Post } from '@/interfaces/post';
import type { SiteHome, SiteLinkItem, SiteRoleLinkItem, SiteSection } from '@/interfaces/site';

const SITE_URL = 'https://amaandoes.tech';

// Rough token estimate (~4 characters per token, matching common LLM tokenizers).
// Surfaced to agents via the `x-markdown-tokens` response header so they can
// budget context before fetching the body.
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// Wraps a markdown string in a Response with the headers agents negotiate for.
// `Vary: Accept` keeps caches from serving this markdown to browsers that asked
// for HTML (and vice versa).
export function markdownResponse(markdown: string): Response {
  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(estimateTokens(markdown)),
      // Content is prerendered and only changes on redeploy, so let the CDN
      // edge-cache it indefinitely (Vercel purges the cache on each deploy)
      // while browsers revalidate. `stale-while-revalidate` avoids a latency
      // spike on the first request after a purge.
      'Cache-Control': 'public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400',
      Vary: 'Accept',
    },
  });
}

function frontmatter(fields: Record<string, string | undefined>): string {
  const lines = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

export function buildPostMarkdown(post: Post): string {
  const fm = frontmatter({
    title: post.title,
    date: post.date,
    author: post.author,
    description: post.excerpt,
    url: `${SITE_URL}/blogs/${post.slug}`,
  });
  return `${fm}${post.content.trim()}\n`;
}

function isRoleLink(item: SiteLinkItem | SiteRoleLinkItem): item is SiteRoleLinkItem {
  return 'role' in item;
}

function renderSection(section: SiteSection<SiteLinkItem | SiteRoleLinkItem>): string {
  const lines = [`## ${section.label}`, ''];
  for (const item of section.items) {
    if (isRoleLink(item)) {
      lines.push(`- ${item.role} — [${item.name}](${item.href})`);
    } else {
      const desc = item.description ? ` — ${item.description}` : '';
      lines.push(`- [${item.label}](${item.href})${desc}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

export function buildHomeMarkdown(
  home: SiteHome,
  posts: Pick<Post, 'slug' | 'title'>[],
): string {
  const fm = frontmatter({ title: home.title, url: SITE_URL });

  const sections: string[] = [
    `# ${home.title}`,
    '',
    renderSection(home.currently),
    renderSection(home.previously),
    renderSection(home.projects),
  ];

  // The home page lists blog titles; expose them as links to each post.
  const blogLines = [`## ${home.blogs.label}`, ''];
  for (const post of posts) {
    blogLines.push(`- [${post.title}](${SITE_URL}/blogs/${post.slug})`);
  }
  blogLines.push('');
  sections.push(blogLines.join('\n'));

  sections.push(renderSection(home.oss));
  sections.push(renderSection(home.resume));

  return `${fm}${sections.join('\n')}`;
}
