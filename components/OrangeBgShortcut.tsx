'use client';

import { useState, useEffect } from 'react';

const BODY_CLASS = 'orange-bg-active';
const STORAGE_KEY = 'orange-bg-active';

function getStored(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function OrangeBgShortcut() {
  const [orange, setOrange] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = getStored();
    setOrange(stored);
  }, [mounted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOrange((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (orange) {
      document.body.classList.add(BODY_CLASS);
    } else {
      document.body.classList.remove(BODY_CLASS);
    }
    if (mounted) {
      try {
        localStorage.setItem(STORAGE_KEY, String(orange));
      } catch {
        /* ignore */
      }
    }
    return () => document.body.classList.remove(BODY_CLASS);
  }, [orange, mounted]);

  return null;
}
