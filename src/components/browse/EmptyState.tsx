import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onClearFilters: () => void;
  searchQuery?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters, searchQuery }) => {
  return (
    <div className="w-full bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-8 md:p-14 text-center flex flex-col items-center justify-center space-y-4 my-8 shadow-xl">
      <div className="w-16 h-16 rounded-2xl bg-violet-950/40 border border-violet-500/40 flex items-center justify-center text-violet-400">
        <SearchX className="w-8 h-8" />
      </div>

      <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
        Nothing matched your search
      </h3>

      <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
        {searchQuery
          ? `No items found matching "${searchQuery}". Try checking for spelling errors, using simpler keywords, or clearing your active filters.`
          : 'No items match the currently selected filter options. Try resetting your filters to explore all community reports.'}
      </p>

      <button
        onClick={onClearFilters}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] mt-2"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Clear Filters & Reset</span>
      </button>
    </div>
  );
};
