'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Loader2, FileText, FolderKanban } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Debounced search
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`/api/route?query=${encodeURIComponent(trimmed)}`)
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  function getLink(r: any) {
    return r.category === 'projects'
      ? `/projects/${r.id}`
      : r.category === 'blogs'
        ? `/blogs/${r.id}`
        : '/';
  }

  function getCategoryIcon(cat: string) {
    return cat === 'projects' ? (
      <FolderKanban className="h-4 w-4" />
    ) : cat === 'blogs' ? (
      <FileText className="h-4 w-4" />
    ) : null;
  }

  return (
    <div className="mb-12 w-full max-w-6xl relative">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for my other projects/blogs"
          className="
            w-full pl-10 py-6 rounded-lg border border-white/30
            bg-transparent text-white placeholder-gray-400
            focus:outline-none focus-visible:outline-none
            focus:ring-0 focus-visible:ring-0 focus:shadow-none
            focus:border-white/60 transition-all
          "
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white"
            onClick={() => setQuery('')}
          >
            <span className="sr-only">Clear search</span>
            {/* X icon */}
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
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

      {/* show results box any time we have a query and we're not loading */}
      {query && !loading && (
        <Card className="absolute w-full mt-2 bg-[hsl(var(--background))] border border-white/30 shadow-lg rounded-lg z-10 overflow-hidden">
          <CardContent className="p-0">
            {results.length > 0 ? (
              <>
                <div className="p-3 border-b border-white/20">
                  <h2 className="text-white text-sm font-medium">
                    {results.length} result{results.length !== 1 ? 's' : ''}{' '}
                    found
                  </h2>
                </div>
                <ul className="max-h-[350px] overflow-y-auto">
                  {results.map((r, i) => (
                    <li
                      key={i}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <Link
                        href={getLink(r)}
                        className="flex items-start gap-3 p-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="mt-0.5 border border-white/30 bg-transparent rounded-md p-2">
                          {getCategoryIcon(r.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium truncate">
                            {r.title}
                          </h3>
                          {r.description && (
                            <p className="text-gray-400 text-sm line-clamp-2 mt-1">
                              {r.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="p-4 text-center">
                <p className="text-white/70">No results found for “{query}”</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
