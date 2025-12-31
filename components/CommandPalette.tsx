'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCommandPalette } from '@/contexts/CommandPaletteContext';

interface CommandItem {
  id: string;
  title: string;
  url: string;
  category: 'project' | 'blog' | 'work' | 'education' | 'section';
  external?: boolean;
}

export default function CommandPalette() {
  const { t } = useLanguage();
  const { isOpen, searchQuery, setSearchQuery, openPalette, closePalette } = useCommandPalette();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Define all searchable items
  const allItems: CommandItem[] = [
    // Projects
    {
      id: 'tiktok',
      title: t('projects.label.tiktok'),
      url: 'https://tiktokviewpredictor.vercel.app/',
      category: 'project',
      external: true,
    },
    {
      id: 'diff-digest',
      title: t('projects.label.diffDigest'),
      url: 'https://diff-digest-appp.vercel.app/',
      category: 'project',
      external: true,
    },
    {
      id: 'sql-parser',
      title: t('projects.label.sqlParser'),
      url: 'https://sql-query-parser.vercel.app/',
      category: 'project',
      external: true,
    },
    {
      id: 'fernando',
      title: t('projects.label.fernando'),
      url: 'https://github.com/enxilium/posture-checker-robot',
      category: 'project',
      external: true,
    },
    {
      id: 'basketbin',
      title: t('projects.label.basketbin'),
      url: 'https://github.com/DerrickHa/ht6',
      category: 'project',
      external: true,
    },
    {
      id: 'facial-recognition',
      title: t('projects.label.facialRecognition'),
      url: 'https://github.com/nicholaschen09/facial-recognition-neural-network',
      category: 'project',
      external: true,
    },
    {
      id: 'agent-search-evals',
      title: t('projects.label.agentSearchEvals'),
      url: 'https://llm-benchmarking-kappa.vercel.app/',
      category: 'project',
      external: true,
    },
    // Blogs
    {
      id: 'ontology-blog',
      title: t('blog.ontology.title'),
      url: '/blogs/ontology-text-to-sql',
      category: 'blog',
    },
    {
      id: 'git-blog',
      title: t('blog.git.title'),
      url: '/blogs/git',
      category: 'blog',
    },
    {
      id: 'coding-blog',
      title: t('blog.coding.title'),
      url: '/blogs/how-i-learned-to-code',
      category: 'blog',
    },
    // Work
    {
      id: 'textql',
      title: 'TextQL',
      url: 'https://textql.com/',
      category: 'work',
      external: true,
    },
    {
      id: 'ownr',
      title: 'Ownr',
      url: 'https://www.ownr.co/',
      category: 'work',
      external: true,
    },
    {
      id: 'rbc',
      title: 'RBC',
      url: 'https://www.rbc.com/',
      category: 'work',
      external: true,
    },
    // Education
    {
      id: 'uwaterloo',
      title: 'UWaterloo',
      url: 'https://uwaterloo.ca/systems-design-engineering/',
      category: 'education',
      external: true,
    },
    {
      id: 'syde',
      title: 'SYDE',
      url: 'https://uwaterloo.ca/systems-design-engineering/',
      category: 'education',
      external: true,
    },
  ];

  // Filter items based on search query
  const filteredItems = searchQuery.trim() === '' 
    ? allItems 
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openPalette();
      }

      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        closePalette();
        setSearchQuery('');
        setSelectedIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openPalette, closePalette]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleItemClick = useCallback((item: CommandItem) => {
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = item.url;
    }
    closePalette();
    setSearchQuery('');
    setSelectedIndex(0);
  }, [closePalette, setSearchQuery]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleItemClick(filteredItems[selectedIndex]);
        }
      }
    },
    [filteredItems, selectedIndex, handleItemClick]
  );

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current && filteredItems.length > 0) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, filteredItems.length]);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'project':
        return t('projects.title');
      case 'blog':
        return t('nav.blogs');
      case 'work':
        return t('previously.title');
      case 'education':
        return t('hero.currently');
      default:
        return '';
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          closePalette();
          setSearchQuery('');
          setSelectedIndex(0);
        }}
      />
      <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 pointer-events-none">
        <div
          className="relative w-full max-w-2xl bg-stone-900 rounded-lg border border-stone-700 shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-stone-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-stone-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, blogs, work..."
            className="flex-1 bg-transparent text-stone-100 placeholder-stone-500 outline-none focus:outline-none focus:ring-0 border-0 text-sm"
          />
          <kbd className="hidden md:flex items-center gap-1 px-2 py-1 text-xs font-mono text-stone-400 bg-stone-800 rounded border border-stone-700">
            <span>⌘</span>
            <span>K</span>
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto"
        >
          {filteredItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-stone-400 text-sm">
              No results found
            </div>
          ) : (
            <div className="py-2">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                    index === selectedIndex
                      ? 'bg-stone-800/80 text-stone-100'
                      : 'text-stone-300 hover:bg-stone-800/50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{item.title}</div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      {getCategoryLabel(item.category)}
                    </div>
                  </div>
                  {item.external && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-stone-500 flex-shrink-0"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-stone-700 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">↵</kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
