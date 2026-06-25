import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Markdown for Agents: content-negotiate between HTML (the browser default) and
// Markdown. When a client sends `Accept: text/markdown`, rewrite the request to
// the prerendered markdown route (`app/md/...`) which responds with
// `Content-Type: text/markdown` and an `x-markdown-tokens` header. Browsers,
// which send `Accept: text/html`, fall through to the normal HTML pages.
export function proxy(request: NextRequest): NextResponse {
  const accept = request.headers.get('accept') ?? '';
  const wantsMarkdown = accept.includes('text/markdown');
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
