import React from 'react';
import { MapPin, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_FEATURED_MATCH } from '../../data/mockItems';

export const CentralMatchCard: React.FC = () => {
  const item = HERO_FEATURED_MATCH;

  return (
    <div className="relative w-full max-w-[340px] bg-[#0A0D18]/90 backdrop-blur-xl border border-violet-500/35 rounded-3xl p-5 shadow-[0_0_40px_rgba(124,58,237,0.3)] transition-all duration-300 hover:border-violet-500/60 hover:shadow-[0_0_50px_rgba(124,58,237,0.45)]">
      {/* Top Header Status & Match % */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-2.5 py-0.5 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-extrabold tracking-widest uppercase">
          {item.status}
        </span>
        <span className="text-xs font-bold text-violet-400 tracking-wide inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-950/40 border border-violet-500/30 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>{item.matchPercentage}% Match</span>
        </span>
      </div>

      {/* Item Image Preview */}
      <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-indigo-900/50 bg-slate-950 flex items-center justify-center group">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-transparent to-transparent opacity-80" />
      </div>

      {/* Item Details */}
      <div className="space-y-2 mb-5">
        <h3 className="text-white font-bold text-lg tracking-tight font-sans">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
          <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span>{item.location}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{item.date}</span>
        </div>

        <div className="flex items-center gap-1.5 text-violet-400 text-xs font-semibold pt-1">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-spin-slow" />
          <span>Smart Match</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 transform active:scale-95">
        <span>View Match</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
