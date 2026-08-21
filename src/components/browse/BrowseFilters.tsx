import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

interface BrowseFiltersProps {
  status: 'ALL' | 'LOST' | 'FOUND';
  setStatus: (s: 'ALL' | 'LOST' | 'FOUND') => void;
  category: string;
  setCategory: (c: string) => void;
  location: string;
  setLocation: (l: string) => void;
  sortBy: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME';
  setSortBy: (sb: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME') => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const CATEGORIES = ['All', 'Phones', 'Wallets', 'Backpacks', 'Watches', 'Laptops', 'Earbuds', 'Accessories', 'Other'];
const LOCATIONS = ['All', 'Library', 'Student Center', 'Main Gate', 'Science Lab', 'Gymnasium', 'Cafeteria', 'Engineering Block', 'Parking Lot'];

export const BrowseFilters: React.FC<BrowseFiltersProps> = ({
  status,
  setStatus,
  category,
  setCategory,
  location,
  setLocation,
  sortBy,
  setSortBy,
  onClearFilters,
  hasActiveFilters,
}) => {
  return (
    <div className="w-full bg-[#0A0D18]/90 border border-indigo-950/80 rounded-2xl p-4 md:p-5 mb-8 shadow-lg space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Primary Status Controls */}
        <div className="flex items-center gap-1.5 bg-[#04060A] p-1 rounded-xl border border-indigo-950/80 self-start">
          <button
            onClick={() => setStatus('ALL')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'ALL'
                ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setStatus('LOST')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'LOST'
                ? 'bg-rose-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Lost
          </button>
          <button
            onClick={() => setStatus('FOUND')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'FOUND'
                ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Found
          </button>
        </div>

        {/* Additional Filters & Sort Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Category Dropdown */}
          <div className="flex items-center gap-2 bg-[#0B0F1B] px-3 py-2 rounded-xl border border-indigo-900/60 text-xs text-slate-300">
            <Filter className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span className="text-slate-300 font-medium">Category:</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1"
              aria-label="Filter by category"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="bg-[#0B0F1B] text-white">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div className="flex items-center gap-2 bg-[#0B0F1B] px-3 py-2 rounded-xl border border-indigo-900/60 text-xs text-slate-300">
            <span className="text-slate-300 font-medium">Location:</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1"
              aria-label="Filter by location"
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc} className="bg-[#0B0F1B] text-white">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-[#0B0F1B] px-3 py-2 rounded-xl border border-indigo-900/60 text-xs text-slate-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-300 font-medium">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME')}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1"
              aria-label="Sort items by"
            >
              <option value="NEWEST" className="bg-[#0B0F1B] text-white">
                Newest First
              </option>
              <option value="OLDEST" className="bg-[#0B0F1B] text-white">
                Oldest First
              </option>
              <option value="MATCH" className="bg-[#0B0F1B] text-white">
                Highest Match Confidence
              </option>
              <option value="NAME" className="bg-[#0B0F1B] text-white">
                A–Z Alphabetical
              </option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-3 py-2 rounded-xl bg-violet-950/60 hover:bg-violet-900/60 border border-violet-500/40 text-violet-300 text-xs font-bold transition-all"
            >
              Reset Filters
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
