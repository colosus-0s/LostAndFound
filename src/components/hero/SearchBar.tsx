import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ROUTE_PATHS } from '../../routes';

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?q=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = ROUTE_PATHS.PUBLIC.BROWSE;
    }
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="search-bar-container bg-[#111827]/90 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl shadow-black/60 flex items-center gap-3 w-full max-w-xl transition-all focus-within:border-[#6366F1]/50"
    >
      <div className="pl-3 text-gray-400 shrink-0">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        placeholder="Search for lost or found items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-transparent text-white placeholder-gray-500 text-sm sm:text-base outline-none border-0 focus:ring-0"
      />
      <button
        type="submit"
        className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all shrink-0 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};
