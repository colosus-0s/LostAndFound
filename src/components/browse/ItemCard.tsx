import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Sparkles, Tag } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ItemCardProps {
  item: BrowseItem;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };

  const isLost = item.status === 'LOST';

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      className="group relative w-full bg-white border border-gray-200 hover:border-blue-500/80 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] shadow-subtle hover:shadow-card cursor-pointer flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status Badge Overlay (Top-Left) */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase shadow-sm flex items-center gap-1 ${
              isLost
                ? 'bg-red-100 border border-red-200 text-red-700'
                : 'bg-teal-100 border border-teal-200 text-teal-800'
            }`}
          >
            <span>{item.status}</span>
          </span>
        </div>

        {/* Match Confidence Overlay (Top-Right) */}
        {item.matchConfidence && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-600" />
              <span>{item.matchConfidence}% Match</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider uppercase text-gray-400">
            <Tag className="w-3 h-3 text-blue-600 shrink-0" />
            <span>{item.category}</span>
            {item.metadata.brand && (
              <>
                <span>•</span>
                <span className="text-gray-600">{item.metadata.brand}</span>
              </>
            )}
          </div>

          {/* Item Title */}
          <h3 className="text-[#111318] font-extrabold text-base md:text-lg tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Item Description Snippet */}
          <p className="text-gray-600 text-xs font-normal leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Location & Date Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-gray-400 shrink-0 font-bold">
            <Calendar className="w-3 h-3" />
            <span>{item.date}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
