'use client';

import Link from 'next/link';

interface BackToHomeLinkProps {
  className?: string;
}

export default function BackToHomeLink({ className = 'mb-12' }: BackToHomeLinkProps) {
  return (
    <div className={className}>
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 px-2 py-1 -ml-2 rounded-md btn-interactive text-stone-500"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:-translate-x-0.5"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        back
      </Link>
    </div>
  );
}
