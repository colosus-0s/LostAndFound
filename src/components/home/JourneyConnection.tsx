import React from 'react';
import { GitMerge } from 'lucide-react';

export const JourneyConnection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center my-6 lg:my-0 w-full lg:w-32 shrink-0 z-20">
      
      {/* Desktop Horizontal SVG Connection System */}
      <div className="hidden lg:flex flex-col items-center justify-center w-full relative">
        <svg
          className="w-full h-24 overflow-visible pointer-events-none"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for Linear Gradients */}
          <defs>
            <linearGradient id="journeyGradientLeft" x1="0%" y1="50%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="journeyGradientRight" x1="50%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Connection Arc Line Left (Lost -> Center Node) */}
          <path
            className="js-connection-line-left"
            d="M 0 40 C 30 40, 45 40, 60 40"
            stroke="url(#journeyGradientLeft)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Connection Arc Line Right (Center Node -> Found) */}
          <path
            className="js-connection-line-right"
            d="M 60 40 C 75 40, 90 40, 120 40"
            stroke="url(#journeyGradientRight)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Left Node */}
          <circle cx="5" cy="40" r="4" fill="#F43F5E" className="shadow-[0_0_10px_#F43F5E]" />

          {/* Right Node */}
          <circle cx="115" cy="40" r="4" fill="#06B6D4" className="shadow-[0_0_10px_#06B6D4]" />
        </svg>

        {/* Central Platform Match Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-12 h-12 rounded-full bg-[#0A0D18] border border-violet-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)] backdrop-blur-md group hover:scale-110 transition-transform">
            <GitMerge className="w-5 h-5 text-violet-400 animate-pulse" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase text-violet-400 bg-[#0B0F1B]/90 px-2 py-0.5 rounded-full border border-violet-900/50">
            Smart Match
          </span>
        </div>
      </div>

      {/* Mobile/Tablet Vertical SVG Connection System */}
      <div className="flex lg:hidden flex-col items-center justify-center py-4 relative w-full">
        <div className="w-[2px] h-12 bg-gradient-to-b from-rose-500 via-violet-600 to-cyan-400" />
        <div className="w-10 h-10 rounded-full bg-[#0A0D18] border border-violet-500/60 flex items-center justify-center my-[-10px] z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          <GitMerge className="w-4 h-4 text-violet-400 animate-pulse" />
        </div>
        <div className="w-[2px] h-12 bg-gradient-to-b from-violet-600 via-indigo-500 to-cyan-400" />
      </div>

    </div>
  );
};
