import React from 'react';
import { FileText, GitCompare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CentralMatchCard } from './CentralMatchCard';

interface NetworkVisualizationProps {
  cardRef?: React.RefObject<HTMLDivElement>;
}

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ cardRef }) => {
  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center mx-auto lg:ml-auto">
      
      {/* Background Nebula Glow behind Orbital Network */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Orbital Rings & Connection Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inner Orbital Ring */}
        <circle
          cx="250"
          cy="250"
          r="170"
          stroke="rgba(139, 92, 246, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="animate-dash-flow"
        />

        {/* Outer Orbital Ring */}
        <circle
          cx="250"
          cy="250"
          r="225"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          className="animate-dash-flow-reverse"
        />

        {/* Connecting Radial Lines to Status Badges & Outer Nodes with Dash Flow */}
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="25"
          stroke="rgba(139, 92, 246, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-dash-flow"
        />
        <line
          x1="250"
          y1="250"
          x2="60"
          y2="250"
          stroke="rgba(139, 92, 246, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-dash-flow"
        />
        <line
          x1="250"
          y1="250"
          x2="440"
          y2="250"
          stroke="rgba(59, 130, 246, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-dash-flow"
        />
        <line
          x1="250"
          y1="250"
          x2="250"
          y2="475"
          stroke="rgba(6, 182, 212, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-dash-flow"
        />

        {/* Additional Diagonal Rays */}
        <line x1="250" y1="250" x2="105" y2="105" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
        <line x1="250" y1="250" x2="395" y2="105" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
        <line x1="250" y1="250" x2="105" y2="395" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
        <line x1="250" y1="250" x2="395" y2="395" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" />
      </svg>

      {/* Outer Orbital Glowing Nodes */}
      <div className="absolute top-[80px] left-[105px] w-3 h-3 rounded-full bg-violet-400 node-glow-purple" />
      <div className="absolute top-[80px] right-[105px] w-3 h-3 rounded-full bg-cyan-400 node-glow-cyan" />
      <div className="absolute bottom-[80px] left-[105px] w-3 h-3 rounded-full bg-indigo-400 node-glow-blue" />
      <div className="absolute bottom-[80px] right-[105px] w-3 h-3 rounded-full bg-cyan-400 node-glow-cyan" />

      {/* Four Anchored Connected Status Badges with Staggered Glow Pulses */}

      {/* 1. TOP BADGE — REPORTED */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0B0F1B]/90 border border-violet-500/40 text-violet-300 text-xs md:text-sm font-semibold shadow-[0_0_18px_rgba(124,58,237,0.3)] backdrop-blur-md badge-pulse-reported">
          <FileText className="w-4 h-4 text-violet-400" />
          <span>Reported</span>
        </div>
      </div>

      {/* 2. LEFT BADGE — MATCHING */}
      <div className="absolute top-1/2 -left-3 md:-left-6 -translate-y-1/2 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0B0F1B]/90 border border-violet-500/40 text-violet-300 text-xs md:text-sm font-semibold shadow-[0_0_18px_rgba(124,58,237,0.3)] backdrop-blur-md badge-pulse-matching">
          <GitCompare className="w-4 h-4 text-violet-400 animate-spin-slow" />
          <span>Matching</span>
        </div>
      </div>

      {/* 3. RIGHT BADGE — VERIFIED */}
      <div className="absolute top-1/2 -right-3 md:-right-6 -translate-y-1/2 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0B0F1B]/90 border border-blue-500/40 text-blue-300 text-xs md:text-sm font-semibold shadow-[0_0_18px_rgba(59,130,246,0.3)] backdrop-blur-md badge-pulse-verified">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>Verified</span>
        </div>
      </div>

      {/* 4. BOTTOM BADGE — RETURNED */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#0B0F1B]/90 border border-cyan-500/40 text-cyan-300 text-xs md:text-sm font-semibold shadow-[0_0_18px_rgba(6,182,212,0.3)] backdrop-blur-md badge-pulse-returned">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>Returned</span>
        </div>
      </div>

      {/* CENTRAL MATCH CARD */}
      <div ref={cardRef} className="relative z-10">
        <CentralMatchCard />
      </div>

    </div>
  );
};
