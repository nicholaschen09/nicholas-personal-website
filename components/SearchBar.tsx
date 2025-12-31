'use client';

import { useCommandPalette } from '@/contexts/CommandPaletteContext';
import { useRef, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CommandItem {
  id: string;
  title: string;
  url: string;
  category: 'project' | 'blog' | 'work' | 'education' | 'section';
  external?: boolean;
}

export default function SearchBar() {
  const { t } = useLanguage();
  const { searchQuery, setSearchQuery } = useCommandPalette();
  const inputRef = useRef<HTMLInputElement>(null);

  // Define all searchable items
  const allItems: CommandItem[] = useMemo(() => [
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
  ], [t]);

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (searchQuery.trim() === '') {
      return [];
    }
    return allItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allItems]);

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

  const handleItemClick = (item: CommandItem) => {
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = item.url;
    }
    setSearchQuery('');
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full relative max-w-[240px]">
      <div
        className="w-full flex items-center gap-2 px-3 bg-stone-800/50 border border-stone-700 rounded-md hover:bg-stone-800/80 transition-colors text-stone-400 hover:text-stone-300 cursor-text focus-within:border-stone-700 focus-within:ring-0 relative z-10"
        style={{ minHeight: '10px', paddingTop: '4px', paddingBottom: '4px', paddingLeft: '6px'}}
        onClick={handleClick}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-stone-500"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          placeholder="Search..."
          className="flex-1 bg-transparent text-stone-100 placeholder-stone-400 outline-none focus:outline-none focus:ring-0 focus:border-0 border-0 text-sm"
          style={{ outline: 'none', boxShadow: 'none', height: '24px' }}
        />
      </div>

      {/* Results - positioned directly under search bar */}
      {filteredItems.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-full bg-stone-800/50 rounded-lg z-[100] max-h-[400px] overflow-y-auto" style={{ position: 'absolute', borderRadius: '8px' }}>
          <div className="py-2">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="w-full px-4 py-3 text-left flex items-start gap-3 transition-colors text-stone-400 hover:bg-stone-800/80 hover:text-stone-100"
              >
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-sm font-medium truncate text-left">{item.title}</div>
                  <div className="text-xs text-stone-500 mt-0.5 text-left">
                    {getCategoryLabel(item.category)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
