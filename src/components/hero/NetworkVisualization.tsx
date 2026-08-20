import React from 'react';
import { FileText, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ItemCard } from './ItemCard';

export const NetworkVisualization: React.FC = () => {
  return (
    <div className="network-visualization-container relative w-full max-w-[480px] aspect-[4/4.2] flex items-center justify-center">
      {/* Background Ambient Glow Halo */}
      <div className="absolute w-[380px] h-[380px] rounded-full bg-[#6366F1]/15 blur-[100px] pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] rounded-full bg-[#22D3EE]/10 blur-[80px] pointer-events-none" />

      {/* SVG Orbital Lines & Connection Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 500" fill="none">
        {/* Main Orbital Circle */}
        <circle cx="240" cy="250" r="160" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.3" />
        <circle cx="240" cy="250" r="110" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.2" />

        {/* Animated Connection Paths linking nodes */}
        <path d="M 100 90 Q 240 160 240 250" stroke="url(#net-grad-1)" strokeWidth="2" strokeDasharray="4 4" className="path-pulse" />
        <path d="M 60 250 Q 150 250 240 250" stroke="url(#net-grad-2)" strokeWidth="2" />
        <path d="M 240 250 Q 330 250 420 250" stroke="url(#net-grad-3)" strokeWidth="2" />
        <path d="M 240 250 Q 240 340 380 410" stroke="url(#net-grad-4)" strokeWidth="2" strokeDasharray="4 4" />

        {/* Particle Dots */}
        <circle cx="100" cy="90" r="4" fill="#6366F1" className="animate-ping" />
        <circle cx="60" cy="250" r="4" fill="#A855F7" />
        <circle cx="420" cy="250" r="4" fill="#3B82F6" />
        <circle cx="380" cy="410" r="4" fill="#10B981" />

        <defs>
          <linearGradient id="net-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="net-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="net-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <linearGradient id="net-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4 Positioned Network Nodes */}

      {/* 1. Top-Left Node: Reported */}
      <div className="network-node node-reported absolute top-6 left-6 z-30 bg-[#6366F1]/20 border border-[#6366F1]/50 text-white rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold shadow-xl backdrop-blur-md">
        <div className="w-6 h-6 rounded-lg bg-[#6366F1]/30 flex items-center justify-center">
          <FileText className="w-3.5 h-3.5 text-[#818CF8]" />
        </div>
        <span>Reported</span>
      </div>

      {/* 2. Middle-Left Node: Matching */}
      <div className="network-node node-matching absolute top-1/2 -translate-y-1/2 left-0 z-30 bg-[#1E1B4B]/90 border border-[#6366F1] text-white rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold shadow-xl backdrop-blur-md">
        <div className="w-6 h-6 rounded-lg bg-[#6366F1]/40 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-[#22D3EE] animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        <span>Matching</span>
      </div>

      {/* 3. Middle-Right Node: Verified */}
      <div className="network-node node-verified absolute top-1/2 -translate-y-1/2 right-0 z-30 bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-blue-200 rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold shadow-xl backdrop-blur-md">
        <div className="w-6 h-6 rounded-lg bg-[#3B82F6]/30 flex items-center justify-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
        </div>
        <span>Verified</span>
      </div>

      {/* 4. Bottom-Right Node: Returned */}
      <div className="network-node node-returned absolute bottom-6 right-6 z-30 bg-[#10B981]/20 border border-[#10B981]/50 text-emerald-300 rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold shadow-xl backdrop-blur-md">
        <div className="w-6 h-6 rounded-lg bg-[#10B981]/30 flex items-center justify-center">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
        </div>
        <span>Returned</span>
      </div>

      {/* Central Item Card */}
      <ItemCard />
    </div>
  );
};
