import React from 'react';
import { Sparkles } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';
import { ItemCard } from '../browse/ItemCard';

interface PotentialMatchesGroupProps {
  matches: BrowseItem[];
}

export const PotentialMatchesGroup: React.FC<PotentialMatchesGroupProps> = ({ matches }) => {
  if (matches.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-violet-400" />
        <h3 className="text-xl font-extrabold text-white font-sans tracking-tight">
          Potentially Matching Items
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
