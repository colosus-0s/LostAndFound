import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSearching) return;

    setIsSearching(true);
    if (onSearch) {
      onSearch(query);
    }

    // Polished mock search feedback
    setTimeout(() => {
      setIsSearching(false);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl group">
      <div className="relative flex items-center w-full p-2 pl-6 bg-[#0B0F1B]/95 border border-indigo-500/30 focus-within:border-violet-500/90 focus-within:shadow-[0_0_35px_rgba(124,58,237,0.3)] rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
        <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-4 group-focus-within:text-cyan-400 transition-colors" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for lost or found items..."
          className="w-full bg-transparent text-white placeholder-slate-400 text-sm md:text-base font-medium focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm md:text-base rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 min-w-[130px]"
        >
          {isSearching ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
              <span>Searching...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
    </form>
  );
};
