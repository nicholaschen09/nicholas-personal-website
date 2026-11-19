'use client';

import { useEffect, useRef, useState } from 'react';

type LazyLoopVideoProps = {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  className?: string;
};

export default function LazyLoopVideo({
  src,
  poster,
  label,
  width,
  height,
  className,
}: LazyLoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (video.src) void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      aria-label={label}
      width={width}
      height={height}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
