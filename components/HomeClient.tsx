'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { SiteHome, SiteLinkItem, SiteRoleLinkItem } from '@/interfaces/site';

export type BlogCategory = 'tech' | 'life';

export interface BlogPostLink {
  slug: string;
  title: string;
  category: BlogCategory;
}

const BLOG_CATEGORIES: { id: BlogCategory; label: string }[] = [
  { id: 'tech', label: 'tech' },
  { id: 'life', label: 'life' },
];

// A "currently"/"previously" entry: a role on the left, then either a logo or
// an em-dash, then the linked name. Driven entirely by _content/site.md.
function RoleItem({ item }: { item: SiteRoleLinkItem }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-wrap items-center gap-x-2 gap-y-0.5 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
      >
        <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
          {item.role}
        </span>
        {/* Keep the logo and name together so they wrap as one unit on narrow screens */}
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          {item.icon ? (
            <img src={item.icon} alt={item.iconAlt ?? item.name} className="h-4 w-auto" />
          ) : (
            '—'
          )}
          <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
            {item.name}
          </span>
        </span>
      </a>
    </li>
  );
}

// A projects/oss/resume entry: a label plus an optional description that fades
// in on hover (used by the projects list).
function LinkItem({ item }: { item: SiteLinkItem }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-wrap items-center gap-1 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
      >
        <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
          {item.label}
        </span>
        {item.description && (
          <span className="text-stone-600 group-hover:text-stone-400 transition-colors hidden group-hover:inline">
            — {item.description}
          </span>
        )}
      </a>
    </li>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{children}</p>;
}

export default function HomeClient({
  home,
  blogPosts,
}: {
  home: SiteHome;
  blogPosts: BlogPostLink[];
}) {
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [contextMenu, setContextMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(false);
    setContextMenu(true);
  }, []);

  const handleCopySvg = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch('/gh_woody.svg');
      const svgText = await res.text();
      await navigator.clipboard.writeText(svgText);
      setCopied(true);
      setTimeout(() => {
        setContextMenu(false);
        setCopied(false);
      }, 1500);
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (!contextMenu || copied) return;
    const close = () => setContextMenu(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [contextMenu, copied]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      {/* Hero Section */}
      <div className="max-w-lg w-full space-y-1 md:space-y-2 mx-auto">
        <div className="flex items-start justify-between mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">{home.title}</h1>
          <div className="relative -mt-3">
            <div
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onContextMenu={handleContextMenu}
            >
              <img
                src="/gh_woody.svg"
                alt="GitHub Woddy"
                className="w-8 h-8 md:w-10 md:-10 opacity-80"
              />
            </div>
            {contextMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50">
                <button
                  onClick={handleCopySvg}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-stone-400 bg-stone-800/80 hover:text-stone-100 rounded-md whitespace-nowrap w-[120px]"
                >
                  {copied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy SVG
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {home.currently && (
          <div>
            <SectionLabel>{home.currently.label}</SectionLabel>
            <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
              {home.currently.items.map((item, i) => (
                <RoleItem key={`${item.href}-${i}`} item={item} />
              ))}
            </ul>
          </div>
        )}
        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-4 space-y-3">
            {home.previously && (
              <div>
                <SectionLabel>{home.previously.label}</SectionLabel>
                <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                  {home.previously.items.map((item, i) => (
                    <RoleItem key={`${item.href}-${i}`} item={item} />
                  ))}
                </ul>
              </div>
            )}

            {home.projects && (
              <div>
                <SectionLabel>{home.projects.label}</SectionLabel>
                <div className="-mx-2 px-2">
                  <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                    {home.projects.items.map((item, i) => (
                      <LinkItem key={`${item.href}-${i}`} item={item} />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {home.blogs && blogPosts.length > 0 && (
            <div className="mt-4">
              <SectionLabel>{home.blogs.label}</SectionLabel>
              <div className="grid grid-cols-2 gap-x-4 pl-2">
                {BLOG_CATEGORIES.map(({ id, label }) => {
                  const posts = blogPosts.filter((post) => post.category === id);
                  if (posts.length === 0) return null;
                  return (
                    <div key={id}>
                      <p className="mb-1 text-stone-500 text-xs md:text-sm">{label}</p>
                      <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                        {posts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`/blogs/${post.slug}`}
                              className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                            >
                              {post.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {home.oss && (
            <div className="mt-4">
              <SectionLabel>{home.oss.label}</SectionLabel>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                  {home.oss.items.map((item, i) => (
                    <LinkItem key={`${item.href}-${i}`} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          )}
          {home.resume && (
            <div className="mt-4">
              <SectionLabel>{home.resume.label}</SectionLabel>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1 pl-2">
                  {home.resume.items.map((item, i) => (
                    <LinkItem key={`${item.href}-${i}`} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}
