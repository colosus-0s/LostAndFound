import React from 'react';
import { RotateCcw, Filter } from 'lucide-react';

interface BrowseFiltersProps {
  status: 'ALL' | 'LOST' | 'FOUND';
  setStatus: (status: 'ALL' | 'LOST' | 'FOUND') => void;
  category: string;
  setCategory: (category: string) => void;
  location: string;
  setLocation: (location: string) => void;
  sortBy: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME';
  setSortBy: (sort: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME') => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const CATEGORY_OPTIONS = [
  'All',
  'Phones',
  'Wallets',
  'Backpacks',
  'Student IDs',
  'Earbuds',
  'Keys',
  'Laptops',
  'Watches',
  'Other',
];

const LOCATION_OPTIONS = [
  'All',
  'Library',
  'Student Center',
  'Science Quad',
  'Dining Hall',
  'Gym',
  'Engineering Building',
  'Bus Stop',
];

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
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-subtle space-y-5">
      
      {/* Top Status Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Status Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-gray-100 border border-gray-200">
          <button
            onClick={() => setStatus('ALL')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'ALL'
                ? 'bg-white text-[#111318] shadow-sm'
                : 'text-gray-600 hover:text-[#111318]'
            }`}
          >
            All Reports
          </button>
          
          <button
            onClick={() => setStatus('LOST')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'LOST'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            Lost Items
          </button>

          <button
            onClick={() => setStatus('FOUND')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              status === 'FOUND'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'text-gray-600 hover:text-teal-700'
            }`}
          >
            Found Items
          </button>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:text-[#111318] text-xs font-bold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}

      </div>

      {/* Select Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-gray-100">
        
        {/* Category Select */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
            <Filter className="w-3 h-3 text-blue-600" />
            <span>Category</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-900 text-xs font-bold focus:outline-none focus:border-blue-600"
          >
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Location Select */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-1">
            <Filter className="w-3 h-3 text-blue-600" />
            <span>Campus Location</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-900 text-xs font-bold focus:outline-none focus:border-blue-600"
          >
            {LOCATION_OPTIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Select */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
            Sort Order
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME')}
            className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-900 text-xs font-bold focus:outline-none focus:border-blue-600"
          >
            <option value="NEWEST">Newest Reports</option>
            <option value="OLDEST">Oldest Reports</option>
            <option value="MATCH">Highest Match %</option>
            <option value="NAME">Name (A-Z)</option>
          </select>
        </div>

      </div>

    </div>
  );
};
