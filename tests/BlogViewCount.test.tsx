import { StrictMode } from 'react';
import { cleanup, render, screen, waitFor, act } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import BlogViewCount from '@/components/BlogViewCount';
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
it('uses the same visit identity during Strict Mode and refreshes without adding views', async () => {
  const fetcher = vi.fn().mockImplementation(async (_url, options) => ({
    ok: true,
    json: async () => ({ views: options.method === 'POST' ? 42 : 43 }),
  }));
  vi.stubGlobal('fetch', fetcher);
  render(
    <StrictMode>
      <BlogViewCount path="/blogs/startup-lessons" increment />
    </StrictMode>,
  );
  await screen.findByText('42 views');
  const posts = fetcher.mock.calls.filter(([, options]) => options.method === 'POST');
  expect(posts).toHaveLength(2);
  expect(posts[0][1].body).toBe(posts[1][1].body);
  act(() => window.dispatchEvent(new Event('focus')));
  await screen.findByText('43 views');
  expect(fetcher.mock.calls.at(-1)?.[1].method).toBe('GET');
});
it('new device/page mounts each submit their own visit ID', async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ views: 2 }) });
  vi.stubGlobal('fetch', fetcher);
  render(
    <>
      <BlogViewCount path="/blogs/startup-lessons" increment />
      <BlogViewCount path="/blogs/startup-lessons" increment />
    </>,
  );
  await waitFor(() => expect(screen.getAllByText('2 views')).toHaveLength(2));
  expect(JSON.parse(fetcher.mock.calls[0][1].body).visitId).not.toBe(
    JSON.parse(fetcher.mock.calls[1][1].body).visitId,
  );
});
it('hides unavailable shared counts', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
  const { container } = render(<BlogViewCount path="/blogs/startup-lessons" increment />);
  await act(async () => {});
  expect(container).toBeEmptyDOMElement();
});
