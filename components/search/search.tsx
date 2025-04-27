'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      // Replace `/api/search` with your API endpoint
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-12 w-full max-w-6xl">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for my other projects/blogs here"
          className="w-full p-3 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
        />
      </form>

      {loading && <p className="text-gray-300 mt-4">Loading...</p>}

      {results.length > 0 && (
        <div className="mt-4 bg-gray-900 p-4 rounded-md">
          <h2 className="text-white text-xl mb-2">Search Results</h2>
          <ul>
            {results.map((result, index) => (
              <li
                key={index}
                className="text-gray-300 py-1 border-b border-gray-700"
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
