'use client';

import { useEffect, useRef, useState } from 'react';

const widgetsUrl = 'https://platform.twitter.com/widgets.js';

declare global {
  interface Window {
    twttr?: {
      widgets?: { load: (element?: HTMLElement) => void };
    };
  }
}

export default function EmbeddedTweet({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const loadTweet = () => {
      if (container.current) window.twttr?.widgets?.load(container.current);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${widgetsUrl}"]`);
    if (existingScript) {
      if (window.twttr?.widgets) loadTweet();
      else existingScript.addEventListener('load', loadTweet, { once: true });
      return () => existingScript.removeEventListener('load', loadTweet);
    }

    const script = document.createElement('script');
    script.src = widgetsUrl;
    script.async = true;
    script.addEventListener('load', loadTweet, { once: true });
    document.body.appendChild(script);
    return () => script.removeEventListener('load', loadTweet);
  }, [shouldLoad]);

  return (
    <div ref={container} className="my-6 flex justify-center">
      <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
        <a href={url}>View this post on X</a>
      </blockquote>
    </div>
  );
}
