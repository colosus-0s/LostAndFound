import React from 'react';
import { Sparkles } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ItemGalleryProps {
  mainImageUrl: string;
  name: string;
  status: BrowseItem['status'];
  matchConfidence?: number;
}

export const ItemGallery: React.FC<ItemGalleryProps> = ({
  mainImageUrl,
  name,
  status,
  matchConfidence,
}) => {
  const isLost = status === 'LOST';

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden shadow-subtle">
        <img
          src={mainImageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1.5 rounded-xl text-xs font-black tracking-widest uppercase shadow-sm ${
              isLost
                ? 'bg-red-100 border border-red-200 text-red-700'
                : 'bg-teal-100 border border-teal-200 text-teal-800'
            }`}
          >
            {status}
          </span>
        </div>

        {/* Match Confidence Overlay */}
        {matchConfidence && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-black tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>{matchConfidence}% Match</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
