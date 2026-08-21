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
      className="group relative w-full bg-[#0A0D18]/90 border border-indigo-950/80 hover:border-violet-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-48 sm:h-52 bg-[#04060A] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        {/* Status Badge Overlay (Top-Left) */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold tracking-widest uppercase shadow-md flex items-center gap-1 ${
              isLost
                ? 'bg-rose-950/90 border border-rose-500/50 text-rose-300'
                : 'bg-cyan-950/90 border border-cyan-500/50 text-cyan-300'
            }`}
          >
            <span>{item.status}</span>
          </span>
        </div>

        {/* Match Confidence Overlay (Top-Right) */}
        {item.matchConfidence && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-lg bg-violet-950/90 border border-violet-500/50 text-violet-300 text-[10px] font-extrabold tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-violet-400" />
              <span>{item.matchConfidence}% Match</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-slate-400">
            <Tag className="w-3 h-3 text-violet-400 shrink-0" />
            <span>{item.category}</span>
            {item.metadata.brand && (
              <>
                <span>•</span>
                <span className="text-slate-300">{item.metadata.brand}</span>
              </>
            )}
          </div>

          {/* Item Title */}
          <h3 className="text-white font-extrabold text-base md:text-lg tracking-tight group-hover:text-violet-300 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Item Description Snippet */}
          <p className="text-slate-300 text-xs font-normal leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Location & Date Footer */}
        <div className="pt-3 border-t border-indigo-950/80 flex items-center justify-between text-xs text-slate-300 font-medium gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0">
            <Calendar className="w-3 h-3" />
            <span>{item.date}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
