import React from 'react';
import { Sparkles, CheckCircle2, Search, PackageCheck } from 'lucide-react';
import { MapLocation } from '../../data/mockLocations';

interface MapMarkerProps {
  location: MapLocation;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ location }) => {
  const { status, shortName, x, y, isPrimaryActive } = location;

  const getStatusStyles = () => {
    switch (status) {
      case 'LOST':
        return {
          bg: 'bg-rose-500/20 border-rose-500/60 text-rose-400',
          glow: 'shadow-[0_0_18px_rgba(244,63,94,0.5)]',
          dot: 'bg-rose-500',
          icon: Search,
        };
      case 'FOUND':
        return {
          bg: 'bg-cyan-500/20 border-cyan-500/60 text-cyan-400',
          glow: 'shadow-[0_0_18px_rgba(6,182,212,0.5)]',
          dot: 'bg-cyan-400',
          icon: PackageCheck,
        };
      case 'MATCHED':
        return {
          bg: 'bg-violet-500/20 border-violet-500/60 text-violet-400',
          glow: 'shadow-[0_0_18px_rgba(139,92,246,0.5)]',
          dot: 'bg-violet-400',
          icon: Sparkles,
        };
      case 'RECOVERED':
        return {
          bg: 'bg-emerald-500/20 border-emerald-500/60 text-emerald-400',
          glow: 'shadow-[0_0_18px_rgba(16,185,129,0.5)]',
          dot: 'bg-emerald-400',
          icon: CheckCircle2,
        };
    }
  };

  const style = getStatusStyles();
  const Icon = style.icon;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group pointer-events-auto cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Pulse Ripple Effect for Active/Primary Markers */}
      {isPrimaryActive && (
        <span className="absolute -inset-2.5 rounded-full bg-rose-500/30 animate-ping pointer-events-none" />
      )}

      {/* Main Marker Badge */}
      <div
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-md transition-all duration-300 transform group-hover:scale-110 ${style.bg} ${style.glow}`}
      >
        <span className={`w-2 h-2 rounded-full ${style.dot} animate-pulse`} />
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-200">
          {shortName}
        </span>
      </div>

      {/* Downward Anchor Arrow Indicator */}
      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-indigo-900/80 mx-auto -mt-[1px]" />
    </div>
  );
};
