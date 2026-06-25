import { notFound } from 'next/navigation';
import { buildPostMarkdown, markdownResponse } from '@/lib/markdownResponse';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

// Prerendered at build time (one static response per published post) so the
// markdown for `/blogs/[slug]` is served as a cached static asset.
// `proxy.ts` rewrites `Accept: text/markdown` requests here.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return markdownResponse(buildPostMarkdown(post));
}
