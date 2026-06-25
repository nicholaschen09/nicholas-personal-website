import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Returns the RFC 7231 quality value (`q=`) for an exact media type in an
// Accept header, or 0 when the type isn't explicitly listed. Wildcards like
// `*/*` (which every browser sends) are intentionally ignored so they don't
// accidentally opt a request into markdown.
function qualityFor(accept: string, mediaType: string): number {
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';');
    if (type.trim() !== mediaType) continue;
    const qParam = params.find((p) => p.trim().startsWith('q='));
    const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
    return Number.isNaN(q) ? 0 : q;
  }
  return 0;
}

// Markdown for Agents: content-negotiate between HTML (the browser default) and
// Markdown. When a client prefers `text/markdown`, rewrite the request to the
// prerendered markdown route (`app/md/...`) which responds with
// `Content-Type: text/markdown` and an `x-markdown-tokens` header. Browsers,
// which send `Accept: text/html`, fall through to the normal HTML pages.
export function proxy(request: NextRequest): NextResponse {
  const accept = request.headers.get('accept') ?? '';
  const markdownQ = qualityFor(accept, 'text/markdown');
  const htmlQ = qualityFor(accept, 'text/html');
  // Serve markdown only when it's explicitly acceptable and at least as
  // preferred as HTML, so `text/html;q=1.0, text/markdown;q=0.1` stays HTML.
  const wantsMarkdown = markdownQ > 0 && markdownQ >= htmlQ;
  const { pathname } = request.nextUrl;

  if (wantsMarkdown) {
    let target: string | null = null;
    if (pathname === '/') {
      target = '/md';
    } else if (pathname.startsWith('/blogs/')) {
      target = `/md${pathname}`;
    }

    if (target) {
      const url = request.nextUrl.clone();
      url.pathname = target;
      const response = NextResponse.rewrite(url);
      // Caches must key on Accept so HTML and markdown variants don't collide.
      response.headers.set('Vary', 'Accept');
      return response;
    }
  }

  const response = NextResponse.next();
  response.headers.set('Vary', 'Accept');
  return response;
}

export const config = {
  matcher: ['/', '/blogs/:path*'],
};
