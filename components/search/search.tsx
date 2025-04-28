'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Loader2, FileText, FolderKanban } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  // Debounced search: fetch suggestions whenever the query changes.
  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);
    const delayDebounce = setTimeout(() => {
      fetch(`/api/route?query=${encodeURIComponent(trimmedQuery)}`)
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((error) => console.error('Search error:', error))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // Helper to determine the URL based on category.
  function getLink(result: any) {
    if (result.category === 'projects') {
      return `/projects/${result.id}`;
    }
    if (result.category === 'blogs') {
      return `/blogs/${result.id}`;
    }
    return '/';
  }

  // Helper to get the appropriate icon based on category.
  function getCategoryIcon(category: string) {
    switch (category) {
      case 'projects':
        return <FolderKanban className="h-4 w-4" />;
      case 'blogs':
        return <FileText className="h-4 w-4" />;
      default:
        return null;
    }
  }

  // Helper to get the appropriate color for category badge.
  function getCategoryColor(category: string) {
    return 'border-white/30 bg-transparent text-white hover:bg-white/5';
  }

  return (
    <div className="mb-12 w-full max-w-6xl relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="search for my other projects/blogs here"
          className="w-full pl-10 py-6 rounded-lg border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:shadow-none focus:border-white/60 transition-all"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white"
            onClick={() => setQuery('')}
          >
            <span className="sr-only">Clear search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Button>
        )}
      </div>

      {loading && query && (
        <div className="mt-2 flex items-center gap-2 text-gray-400 pl-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Searching...</span>
        </div>
      )}

      {(results.length > 0 || (focused && query)) && (
        <Card className="absolute w-full mt-2 bg-[hsl(var(--background))] border border-white/30 shadow-lg rounded-lg z-10 overflow-hidden">
          <CardContent className="p-0">
            {results.length > 0 ? (
              <div>
                <div className="p-3 border-b border-white/20">
                  <h2 className="text-white text-sm font-medium">
                    {results.length} result{results.length !== 1 ? 's' : ''}{' '}
                    found
                  </h2>
                </div>

                <ul className="max-h-[350px] overflow-y-auto">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <Link
                        href={getLink(result)}
                        className="flex items-start gap-3 p-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium truncate flex items-center gap-2">
                            {result.title}
                          </h3>
                          {result.description && (
                            <p className="text-gray-400 text-sm line-clamp-2 mt-1">
                              {result.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-white/70">No results found for "{query}"</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
