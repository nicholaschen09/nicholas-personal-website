"use client";

import { useState, useEffect, useRef } from "react";

export interface TOCSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  title?: string;
  /** rail = sticky right sidebar (lg+); inline = compact block in the article (below lg) */
  variant?: "rail" | "inline";
}

export default function TableOfContents({
  sections,
  title = "contents",
  variant = "rail",
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  // Keep the active link visible inside the sticky rail's scroll container
  useEffect(() => {
    if (variant !== "rail" || !activeSection || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const activeLink = container.querySelector(`a[href="#${activeSection}"]`) as HTMLElement;
    if (!activeLink) return;

    const listItem = activeLink.closest("li") as HTMLElement;
    if (!listItem) return;

    const timeoutId = setTimeout(() => {
      const containerHeight = container.clientHeight;
      const containerScrollTop = container.scrollTop;
      const itemOffsetTop = listItem.offsetTop;
      const itemHeight = listItem.offsetHeight;

      const itemTop = itemOffsetTop - containerScrollTop;
      const itemBottom = itemTop + itemHeight;
      const padding = 20;
      const needsScroll = itemTop < padding || itemBottom > containerHeight - padding;

      if (needsScroll) {
        const targetScroll = itemOffsetTop - containerHeight / 2 + itemHeight / 2;
        const maxScroll = container.scrollHeight - containerHeight;

        container.scrollTo({
          top: Math.max(0, Math.min(targetScroll, maxScroll)),
          behavior: "smooth",
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeSection, variant]);

  if (sections.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = (
    <ul className={variant === "inline" ? "space-y-1" : "space-y-1.5"}>
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`
              block text-sm transition-colors duration-200
              px-2 py-0.5 rounded-md
              hover:bg-stone-800/80
              ${
                activeSection === section.id
                  ? "text-stone-100"
                  : "text-stone-500 hover:text-stone-100"
              }
            `}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  );

  if (variant === "inline") {
    return (
      <nav
        aria-label={title}
        className="lg:hidden mb-8 border-l border-stone-700 pl-3"
      >
        <h2 className="text-stone-500 text-sm mb-2 font-medium px-2">{title}</h2>
        {links}
      </nav>
    );
  }

  return (
    <aside
      ref={scrollContainerRef}
      aria-label={title}
      className="hidden lg:block w-48 flex-shrink-0 sticky top-12 max-h-[calc(100vh-6rem)] overflow-y-auto px-2"
    >
      <h2 className="text-stone-500 text-base mb-4 mt-1 font-medium px-2">{title}</h2>
      {links}
    </aside>
  );
}
