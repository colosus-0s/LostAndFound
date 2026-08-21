import React from 'react';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { MapLocation } from '../../data/mockLocations';

interface MapAnnotationProps {
  location: MapLocation;
}

export const MapAnnotation: React.FC<MapAnnotationProps> = ({ location }) => {
  const { x, y, itemName, matchPercentage, name } = location;

  return (
    <div
      className="absolute z-30 -translate-x-1/2 -translate-y-[115%] pointer-events-auto"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="w-56 md:w-64 bg-[#0A0D18]/95 backdrop-blur-xl border border-violet-500/40 rounded-2xl p-3.5 shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Top Header: Badge & Match Score */}
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[9px] font-extrabold tracking-widest uppercase">
            LOST
          </span>
          <span className="text-[11px] font-extrabold text-violet-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>{matchPercentage}% Match</span>
          </span>
        </div>

        {/* Item Title & Location */}
        <div className="space-y-1">
          <h4 className="text-white font-bold text-sm tracking-tight font-sans">
            {itemName}
          </h4>
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-medium">
            <MapPin className="w-3 h-3 text-violet-400 shrink-0" />
            <span className="truncate">{name}</span>
          </div>
        </div>

        {/* Mini Action Line */}
        <div className="mt-2.5 pt-2 border-t border-indigo-950/60 flex items-center justify-between text-[11px] font-semibold text-violet-400 hover:text-cyan-300 cursor-pointer group">
          <span>View Match details</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>

      </div>

      {/* Connecting Stem Line to Map Location Pin */}
      <div className="w-[1.5px] h-4 bg-gradient-to-b from-violet-500 to-rose-500 mx-auto" />
    </div>
  );
};
