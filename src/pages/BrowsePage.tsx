import React, { useState, useMemo } from 'react';
import { itemService } from '../services/itemService';
import { BrowseHeader } from '../components/browse/BrowseHeader';
import { BrowseFilters } from '../components/browse/BrowseFilters';
import { ItemGrid } from '../components/browse/ItemGrid';
import { EmptyState } from '../components/browse/EmptyState';

export const BrowsePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState<'ALL' | 'LOST' | 'FOUND'>('ALL');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [sortBy, setSortBy] = useState<'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME'>('NEWEST');

  // Computed filtered items
  const filteredItems = useMemo(() => {
    return itemService.getItems({
      query: searchQuery,
      status,
      category,
      location,
      sortBy,
    });
  }, [searchQuery, status, category, location, sortBy]);

  const hasActiveFilters = searchQuery !== '' || status !== 'ALL' || category !== 'All' || location !== 'All';

  const handleClearFilters = () => {
    setSearchQuery('');
    setStatus('ALL');
    setCategory('All');
    setLocation('All');
    setSortBy('NEWEST');
  };

  return (
    <div className="min-h-screen bg-[#04060A] text-slate-100 py-10 md:py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Subtle Atmosphere Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Responsive Max-Width Container */}
      <main className="max-w-[1440px] mx-auto relative z-10 space-y-6">
        
        {/* Header & Search Bar */}
        <BrowseHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalResults={filteredItems.length}
        />

        {/* Filter Controls & Sort Options */}
        <BrowseFilters
          status={status}
          setStatus={setStatus}
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Items Grid OR Empty State */}
        {filteredItems.length > 0 ? (
          <ItemGrid items={filteredItems} />
        ) : (
          <EmptyState onClearFilters={handleClearFilters} searchQuery={searchQuery} />
        )}

      </main>
    </div>
  );
};
