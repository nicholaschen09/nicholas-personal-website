'use client';

import { useEffect, useRef, useState } from 'react';

export default function BlogViewCount({
  path,
  increment = false,
}: {
  path: string;
  increment?: boolean;
}) {
  const [views, setViews] = useState<number | null>(null);
  const visit = useRef<{ path: string; id: string } | null>(null);

  useEffect(() => {
    let active = true;
    let inFlight = false;
    let recorded = !increment;
    setViews(null);
    if (!visit.current || visit.current.path !== path) {
      visit.current = { path, id: crypto.randomUUID() };
    }
    const visitId = visit.current.id;

    async function refresh() {
      if (inFlight || document.visibilityState === 'hidden') return;
      inFlight = true;
      try {
        const response = await fetch(`/api/blog-views?path=${encodeURIComponent(path)}`, {
          method: recorded ? 'GET' : 'POST',
          cache: 'no-store',
          ...(recorded
            ? {}
            : {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path, visitId }),
              }),
        });
        if (!response.ok) throw new Error('View count unavailable');
        const data = await response.json();
        if (!Number.isSafeInteger(data.views) || data.views < 0) throw new Error('Invalid count');
        recorded = true;
        if (active) setViews(data.views);
      } catch {
        // Never substitute a browser-only total for an unavailable shared count.
        if (active) setViews(null);
      } finally {
        inFlight = false;
      }
    }

    void refresh();
    const timer = window.setInterval(refresh, 30_000);
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      active = false;
      window.clearInterval(timer);
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [path, increment]);

  if (views === null) return null;

  return (
    <span className="whitespace-nowrap text-stone-500" title="Total views across all devices">
      {views.toLocaleString('en-US')} {views === 1 ? 'view' : 'views'}
    </span>
  );
}
