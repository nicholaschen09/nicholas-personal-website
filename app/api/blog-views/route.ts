import { blogPaths, blogViews } from '@/lib/blog-views';

export const dynamic = 'force-dynamic';

function json(body: object, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function GET(request: Request) {
  const path = new URL(request.url).searchParams.get('path');
  if (!path || !blogPaths.has(path)) return json({ error: 'Unknown article' }, 400);
  try {
    return json({ views: await blogViews(path) });
  } catch {
    return json({ error: 'View counts are temporarily unavailable' }, 503);
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: 'Invalid origin' }, 403);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }
  const { path, visitId } = body ?? {};
  if (
    !blogPaths.has(path) ||
    typeof visitId !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(visitId)
  ) {
    return json({ error: 'Invalid article or visit' }, 400);
  }
  try {
    return json({ views: await blogViews(path, visitId) });
  } catch {
    return json({ error: 'View counts are temporarily unavailable' }, 503);
  }
}
