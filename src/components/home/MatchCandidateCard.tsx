import React from 'react';
import { MapPin, Sparkles, PackageCheck } from 'lucide-react';
import { FoundCandidateData } from '../../data/mockMatches';

interface MatchCandidateCardProps {
  candidate: FoundCandidateData;
}

export const MatchCandidateCard: React.FC<MatchCandidateCardProps> = ({ candidate }) => {
  const { title, location, matchPercentage, isPrimaryMatch } = candidate;

  return (
    <div
      className={`w-full rounded-2xl p-4 transition-all duration-300 ${
        isPrimaryMatch
          ? 'bg-[#0B0F1B]/95 border-2 border-violet-500/60 shadow-[0_0_30px_rgba(139,92,246,0.25)] relative overflow-hidden'
          : 'bg-[#0A0D18]/80 border border-indigo-950/70 opacity-80 hover:opacity-100'
      }`}
    >
      {/* Primary Highlight Glow Line */}
      {isPrimaryMatch && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500" />
      )}

      <div className="flex items-center justify-between">
        {/* Left Candidate Info */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[9px] font-extrabold tracking-widest uppercase flex items-center gap-1 ${
                isPrimaryMatch
                  ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              <PackageCheck className="w-2.5 h-2.5" />
              <span>FOUND</span>
            </span>

            {isPrimaryMatch && (
              <span className="px-2 py-0.5 rounded bg-violet-600/30 border border-violet-500/40 text-violet-300 text-[9px] font-extrabold tracking-widest uppercase flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-violet-400" />
                <span>POTENTIAL MATCH</span>
              </span>
            )}
          </div>

          <h5 className={`font-bold text-sm tracking-tight ${isPrimaryMatch ? 'text-white' : 'text-slate-300'}`}>
            {title}
          </h5>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Right Match Score */}
        <div className="flex flex-col items-end shrink-0 pl-3">
          <span
            className={`font-extrabold text-base md:text-lg tracking-tight ${
              isPrimaryMatch
                ? 'text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]'
                : 'text-slate-400'
            }`}
          >
            {matchPercentage}%
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
            MATCH
          </span>
        </div>
      </div>
    </div>
  );
};
