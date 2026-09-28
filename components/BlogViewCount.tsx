'use client';

import { useEffect, useRef, useState } from 'react';

const storagePrefix = 'blog-views:';

export default function BlogViewCount({
  path,
  increment = false,
}: {
  path: string;
  increment?: boolean;
}) {
  const [views, setViews] = useState<number | null>(null);
  const countedPath = useRef<string | null>(null);

  useEffect(() => {
    const key = `${storagePrefix}${path}`;
    const readCount = () => {
      const stored = Number(window.localStorage.getItem(key));
      return Number.isSafeInteger(stored) && stored >= 0 ? stored : 0;
    };
    try {
      let count = readCount();
      // Avoid counting React Strict Mode's repeated effect as another visit.
      if (increment && countedPath.current !== path) {
        count += 1;
        window.localStorage.setItem(key, String(count));
        countedPath.current = path;
      }
      setViews(count);
    } catch {
      // Storage may be disabled; don't prevent the article from rendering.
      setViews(null);
    }

    const onStorage = (event: StorageEvent) => {
      if (event.key !== key && event.key !== null) return;
      try {
        setViews(readCount());
      } catch {
        setViews(null);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [path, increment]);

  if (views === null) return null;

  return (
    <span className="whitespace-nowrap text-stone-500" title="Views in this browser">
      {views.toLocaleString('en-US')} {views === 1 ? 'view' : 'views'}
    </span>
  );
}
