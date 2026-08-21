import React from 'react';
import { GitMerge, MapPin, Calendar, Tag, Info } from 'lucide-react';
import { MatchingSignal } from '../../data/mockMatches';

interface MatchingCoreProps {
  signals: MatchingSignal[];
  coreRef?: React.RefObject<HTMLDivElement>;
}

export const MatchingCore: React.FC<MatchingCoreProps> = ({ signals, coreRef }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'map-pin':
        return MapPin;
      case 'calendar':
        return Calendar;
      case 'tag':
        return Tag;
      case 'info':
      default:
        return Info;
    }
  };

  return (
    <div
      ref={coreRef}
      className="relative flex flex-col items-center justify-center py-4 my-4 lg:my-0 w-full lg:w-[280px] shrink-0 z-20"
    >
      {/* Background Radial Glow */}
      <div className="js-core-glow absolute inset-0 bg-violet-600/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-700" />

      {/* 4 Signal Metadata Nodes surrounding the Core */}
      <div className="w-full grid grid-cols-2 gap-2 mb-4">
        {signals.map((sig) => {
          const Icon = getIcon(sig.iconName);
          return (
            <div
              key={sig.id}
              className="js-signal-node flex flex-col p-2.5 rounded-xl bg-[#0B0F1B]/90 border border-indigo-900/40 text-left shadow-sm backdrop-blur-md transition-all duration-300 hover:border-violet-500/50"
            >
              <div className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-violet-400">
                <Icon className="w-3 h-3 text-violet-400" />
                <span>{sig.label}</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-200 mt-1 truncate">
                {sig.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Central SMART MATCH Core Node */}
      <div className="relative my-2">
        {/* Pulsing Concentric SVG Rings */}
        <svg className="w-32 h-32 overflow-visible pointer-events-none" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-dash-flow"
          />
          <circle
            cx="60"
            cy="60"
            r="38"
            stroke="rgba(6,182,212,0.3)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="animate-dash-flow-reverse"
          />
        </svg>

        {/* Center Engine Badge */}
        <div className="js-core-badge absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0A0D18] border border-violet-500/60 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(139,92,246,0.5)] backdrop-blur-md transition-transform duration-300 hover:scale-110 cursor-pointer">
          <GitMerge className="w-6 h-6 text-violet-400 animate-pulse mb-0.5" />
          <span className="text-[9px] font-extrabold tracking-widest uppercase text-white leading-none">
            SMART
          </span>
          <span className="text-[8px] font-bold tracking-widest uppercase text-violet-400 mt-0.5 leading-none">
            MATCH
          </span>
        </div>
      </div>

      {/* Signal Comparison Caption */}
      <div className="js-core-caption mt-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-[10px] font-semibold text-violet-300 tracking-wider uppercase text-center shadow-sm transition-all duration-300">
        <span>COMPARING SIGNALS</span>
      </div>
    </div>
  );
};
