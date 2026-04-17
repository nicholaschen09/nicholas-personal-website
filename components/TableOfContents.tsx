'use client';

import { useState, useEffect, useRef } from 'react';

export interface TOCSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  title?: string;
}

export default function TableOfContents({ sections, title = 'contents' }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
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

  // Auto-scroll active section into view within the TOC container
  useEffect(() => {
    if (!activeSection || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const activeLink = container.querySelector(`a[href="#${activeSection}"]`) as HTMLElement;

    if (!activeLink) return;

    const listItem = activeLink.closest('li') as HTMLElement;
    if (!listItem) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const containerHeight = container.clientHeight;
      const containerScrollTop = container.scrollTop;
      const itemOffsetTop = listItem.offsetTop;
      const itemHeight = listItem.offsetHeight;

      // Calculate visible bounds
      const itemTop = itemOffsetTop - containerScrollTop;
      const itemBottom = itemTop + itemHeight;

      // Check if item needs to be scrolled into view
      const padding = 20; // Small padding from edges
      const needsScroll = itemTop < padding || itemBottom > containerHeight - padding;

      if (needsScroll) {
        // Center the item in viewport
        const targetScroll = itemOffsetTop - containerHeight / 2 + itemHeight / 2;
        const maxScroll = container.scrollHeight - containerHeight;

        container.scrollTo({
          top: Math.max(0, Math.min(targetScroll, maxScroll)),
          behavior: 'smooth',
        });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      ref={scrollContainerRef}
      className="hidden lg:block w-48 flex-shrink-0 sticky top-12 max-h-[calc(100vh-6rem)] overflow-y-auto px-2 ml-auto"
    >
      {/* Header */}
      <h2 className="text-stone-500 text-base mb-4 mt-1 font-medium px-2">{title}</h2>

      {/* Links */}
      <ul className="space-y-1.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`
                block text-sm transition-colors duration-200
                px-2 py-0.5 rounded-md
                hover:bg-orange-500/10 hover:text-orange-500
                ${activeSection === section.id ? 'text-stone-100' : 'text-stone-500'}
              `}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
