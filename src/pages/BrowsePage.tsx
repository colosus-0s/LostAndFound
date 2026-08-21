import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { itemService } from '../services/itemService';
import { BrowseHeader } from '../components/browse/BrowseHeader';
import { BrowseFilters } from '../components/browse/BrowseFilters';
import { ItemGrid } from '../components/browse/ItemGrid';
import { EmptyState } from '../components/browse/EmptyState';

export const BrowsePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [status, setStatus] = useState<'ALL' | 'LOST' | 'FOUND'>('ALL');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [location, setLocation] = useState('All');
  const [sortBy, setSortBy] = useState<'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME'>('NEWEST');

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam !== null) {
      setSearchQuery(queryParam);
    }
    const catParam = searchParams.get('category');
    if (catParam !== null) {
      setCategory(catParam);
    }
  }, [searchParams]);

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
    <div className="min-h-screen bg-[#F8F9FA] text-[#111318] py-10 md:py-16 px-6 md:px-12 relative overflow-hidden">
      
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
