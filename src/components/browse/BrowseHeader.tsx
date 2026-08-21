import React from 'react';
import { Search, FolderKanban, SlidersHorizontal } from 'lucide-react';

interface BrowseHeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalResults: number;
}

export const BrowseHeader: React.FC<BrowseHeaderProps> = ({ searchQuery, setSearchQuery, totalResults }) => {
  return (
    <div className="w-full space-y-6 mb-8">
      {/* Top Header Eyebrow & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-indigo-950/80">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase">
            <FolderKanban className="w-3.5 h-3.5 text-violet-400" />
            <span>LOST & FOUND DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Find what you're looking for.
          </h1>

          <p className="text-slate-300 text-sm md:text-base font-normal">
            Browse reported lost and found items across the community.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-[#0B0F1B] px-3.5 py-1.5 rounded-xl border border-indigo-950/80 self-start md:self-auto">
          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Showing <strong className="text-white">{totalResults}</strong> items</span>
        </div>
      </div>

      {/* Prominent Search Bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-violet-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search lost or found items by name, category, or location..."
          className="w-full pl-12 pr-4 py-4 bg-[#0A0D18]/90 border border-indigo-900/60 rounded-2xl text-white placeholder-slate-400 text-sm md:text-base focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          aria-label="Search lost or found items"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};
