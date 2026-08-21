import React from 'react';
import { Search, Sparkles, X } from 'lucide-react';

interface BrowseHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalResults: number;
}

export const BrowseHeader: React.FC<BrowseHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  totalResults,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Top Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>COMMUNITY DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
            Browse Reported Items
          </h1>

          <p className="text-gray-600 text-sm md:text-base font-normal max-w-xl">
            Explore lost and found belongings reported across campus. Use filters to narrow by location, status, or date window.
          </p>
        </div>

        {/* Results Counter */}
        <div className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-600 shrink-0 shadow-subtle">
          Showing <span className="text-[#111318] font-black">{totalResults}</span> active report{totalResults === 1 ? '' : 's'}
        </div>
      </div>

      {/* Prominent Search Bar Input */}
      <div className="relative w-full max-w-3xl">
        <div className="relative flex items-center bg-white border-2 border-gray-200 focus-within:border-blue-600 rounded-2xl shadow-subtle transition-all">
          <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, item name, brand, location, or description..."
            className="w-full px-3 py-3.5 text-gray-900 placeholder-gray-400 text-sm md:text-base focus:outline-none bg-transparent font-medium"
            aria-label="Search items by keyword"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mr-3 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
