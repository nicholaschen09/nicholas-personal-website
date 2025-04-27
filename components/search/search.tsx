'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="mb-12 w-full max-w-6xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search for my other projects/blogs here"
        className="w-full p-3 rounded-md border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
      />
    </div>
  );
}
