import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl">
      <div className="relative flex items-center w-full p-2 pl-6 bg-[#0B0F1B]/95 border border-indigo-500/30 focus-within:border-violet-500/80 rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all">
        <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-4" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for lost or found items..."
          className="w-full bg-transparent text-white placeholder-slate-400 text-sm md:text-base font-medium focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm md:text-base rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all transform active:scale-95"
        >
          Search
        </button>
      </div>
    </form>
  );
};
