'use client';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = 'mt-20' }: FooterProps) {
  return (
    <div
      className={`${className} mx-auto flex max-w-lg w-full flex-wrap items-center justify-start gap-3 text-xs text-stone-300 md:text-sm`}
    >
      {/* Social links */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href="mailto:nicholas.chen243@gmail.com"
          className="text-stone-300 transition-colors hover:text-stone-200"
          aria-label="Email"
          title="Email"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-300 transition-colors hover:text-stone-200"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nicholaschen09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-300 transition-colors hover:text-stone-200"
          aria-label="GitHub"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://x.com/nicholaschen__"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-300 transition-colors hover:text-stone-200"
          aria-label="X (Twitter)"
          title="X (Twitter)"
        >
          X
        </a>
      </div>
    </div>
  );
}
