'use client';

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
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
  }, []);

  return (
    <div ref={container} className="my-6 flex justify-center">
      <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
        <a href={url}>View this post on X</a>
      </blockquote>
    </div>
  );
}
