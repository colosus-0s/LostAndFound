import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const ItemCard: React.FC = () => {
  return (
    <div className="item-card-container relative z-20 bg-[#111827]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl shadow-black/90 w-full max-w-[290px] space-y-4 hover:border-[#6366F1]/50 hover:shadow-[#6366F1]/10 transition-all duration-300 transform hover:scale-[1.02]">
      {/* Top Badge Tag */}
      <div className="flex items-center justify-between">
        <Badge variant="lost" size="sm">
          LOST
        </Badge>
        <span className="text-[11px] font-medium text-gray-400">ID #8492</span>
      </div>

      {/* Item Image Container */}
      <div className="relative w-full aspect-[4/2.6] bg-[#0A0A0C] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-2">
        <img
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80"
          alt="iPhone 14 Pro"
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>

      {/* Item Details */}
      <div className="space-y-1">
        <h3 className="text-base font-bold text-white tracking-tight">iPhone 14 Pro</h3>
        <p className="text-xs text-gray-400">Library — Study Area</p>
        <p className="text-xs text-gray-500">May 20, 2026</p>
      </div>

      {/* Match Confidence Block */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#818CF8]">
          <Sparkles className="w-3.5 h-3.5 text-[#22D3EE] animate-pulse" />
          <span>Smart Match</span>
        </div>
        <span className="text-xs font-bold text-[#A855F7] bg-[#A855F7]/10 px-2 py-0.5 rounded-full border border-[#A855F7]/20">
          92% Match
        </span>
      </div>

      {/* CTA Button */}
      <div className="pt-1">
        <a href={`${ROUTE_PATHS.PUBLIC.BROWSE}/1`}>
          <button
            type="button"
            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <span>View Match</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </a>
      </div>
    </div>
  );
};
