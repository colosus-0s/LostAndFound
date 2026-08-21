import React from 'react';
import { MapPin, Calendar, Smartphone, Search } from 'lucide-react';
import { LostItemData } from '../../data/mockMatches';

interface MatchLostCardProps {
  item: LostItemData;
}

export const MatchLostCard: React.FC<MatchLostCardProps> = ({ item }) => {
  return (
    <div className="w-full bg-[#0B0F1B]/95 border border-rose-500/30 rounded-2xl p-5 md:p-6 shadow-[0_0_25px_rgba(244,63,94,0.15)] flex flex-col justify-between space-y-4">
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-0.5 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-1.5">
            <Search className="w-3 h-3 text-rose-400" />
            <span>LOST REPORT</span>
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            SOURCE
          </span>
        </div>

        {/* Title */}
        <h4 className="text-white font-extrabold text-xl tracking-tight font-sans mb-3">
          {item.title}
        </h4>

        {/* Metadata */}
        <div className="space-y-2 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{item.date}</span>
          </div>
        </div>
      </div>

      {/* Item Details Tags */}
      <div className="pt-3 border-t border-indigo-950/80 flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-300">
        <span className="px-2 py-0.5 rounded-md bg-indigo-950/60 border border-indigo-900/40 flex items-center gap-1">
          <Smartphone className="w-3 h-3 text-violet-400" />
          <span>{item.details.category}</span>
        </span>
        <span className="px-2 py-0.5 rounded-md bg-indigo-950/60 border border-indigo-900/40">
          {item.details.color}
        </span>
        <span className="px-2 py-0.5 rounded-md bg-indigo-950/60 border border-indigo-900/40">
          {item.details.brand}
        </span>
      </div>
    </div>
  );
};
