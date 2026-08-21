import React from 'react';
import { BrowseItem } from '../../data/mockBrowseItems';
import { ItemCard } from './ItemCard';

interface ItemGridProps {
  items: BrowseItem[];
  isLoading?: boolean;
}

export const ItemGrid: React.FC<ItemGridProps> = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-80 bg-[#0A0D18]/90 border border-indigo-950/80 rounded-2xl p-4 animate-pulse flex flex-col justify-between space-y-4"
          >
            <div className="w-full h-44 bg-slate-800/50 rounded-xl" />
            <div className="space-y-2">
              <div className="w-3/4 h-5 bg-slate-800/50 rounded" />
              <div className="w-1/2 h-3 bg-slate-800/50 rounded" />
            </div>
            <div className="w-full h-4 bg-slate-800/50 rounded pt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
