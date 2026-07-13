import { getSiteContent } from '@/lib/content';
import { buildHomeMarkdown, markdownResponse } from '@/lib/markdownResponse';
import { getAllPosts } from '@/lib/posts';

// Prerendered at build time: the markdown is fully known from `_content`/`_posts`
// at build, so we render it once into a static asset rather than per request.
// `proxy.ts` rewrites `Accept: text/markdown` requests for `/` here.
export const dynamic = 'force-static';

export function GET(): Response {
  const { home } = getSiteContent();
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    listTitle: post.listTitle,
    category: post.category,
  }));
  return markdownResponse(buildHomeMarkdown(home, posts));
}
