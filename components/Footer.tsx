'use client';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = 'mt-20' }: FooterProps) {
  return (
    <div
      className={`${className} mx-auto flex max-w-lg w-full flex-wrap items-center justify-start gap-3 text-xs text-stone-400`}
    >
      {/* Social media icons */}
      <div className="flex items-center gap-1.5">
        <a
          href="mailto:nicholas.chen243@gmail.com"
          className="group relative flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-700/40 hover:text-stone-200 transition-colors"
          aria-label="Email"
          title="Email"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-700/40 hover:text-stone-200 transition-colors"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3c.53 0 1.04.21 1.41.59S21 4.47 21 5v14c0 .53-.21 1.04-.59 1.41S19.53 21 19 21H5c-.53 0-1.04-.21-1.41-.59S3 19.53 3 19V5c0-.53.21-1.04.59-1.41S4.47 3 5 3h14Zm-.5 15.5v-5.3c0-.86-.34-1.69-.95-2.31s-1.45-.95-2.31-.95c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.37 0 .73.15.99.41s.41.62.41.99v4.93h2.79ZM6.88 8.56c.45 0 .87-.18 1.18-.49s.5-.77.5-1.19c0-.93-.75-1.69-1.68-1.69-.45 0-.88.18-1.2.49s-.49.75-.49 1.2c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
          </svg>
        </a>
        <a
          href="https://github.com/nicholaschen09"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-700/40 hover:text-stone-200 transition-colors"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
          </svg>
        </a>
        <a
          href="https://x.com/nicholaschen__"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-700/40 hover:text-stone-200 transition-colors"
          aria-label="X (Twitter)"
          title="X (Twitter)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
