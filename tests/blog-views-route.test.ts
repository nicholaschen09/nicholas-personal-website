// @vitest-environment node
import { beforeEach, expect, it, vi } from 'vitest';
vi.mock('@/lib/blog-views', () => ({
  blogPaths: new Set(['/blogs/startup-lessons']),
  blogViews: vi.fn(),
}));
import { blogViews } from '@/lib/blog-views';
import { GET, POST } from '@/app/api/blog-views/route';
const path = '/blogs/startup-lessons';
const visitId = '73fa3919-371e-4a51-8b67-4e19886a532a';
const post = (body: unknown) =>
  new Request('https://example.com/api/blog-views', {
    method: 'POST',
    body: JSON.stringify(body),
  });
beforeEach(() => vi.resetAllMocks());
it('reads the shared count without caching or incrementing', async () => {
  vi.mocked(blogViews).mockResolvedValue(42);
  const response = await GET(new Request(`https://example.com/api/blog-views?path=${path}`));
  expect(await response.json()).toEqual({ views: 42 });
  expect(response.headers.get('cache-control')).toBe('no-store');
  expect(blogViews).toHaveBeenCalledWith(path);
});
it('passes the visit identity to the atomic database operation', async () => {
  vi.mocked(blogViews).mockResolvedValue(43);
  const response = await POST(post({ path, visitId }));
  expect(await response.json()).toEqual({ views: 43 });
  expect(blogViews).toHaveBeenCalledWith(path, visitId);
});
it('rejects invalid articles and visit identities before accessing the database', async () => {
  expect((await POST(post({ path: '/unknown', visitId }))).status).toBe(400);
  expect((await POST(post({ path, visitId: 'bad' }))).status).toBe(400);
  expect(blogViews).not.toHaveBeenCalled();
});
it('returns unavailable rather than inventing a local count', async () => {
  vi.mocked(blogViews).mockRejectedValue(new Error('database unavailable'));
  expect((await POST(post({ path, visitId }))).status).toBe(503);
});
