import React from 'react';
import { MapData } from '../../data/mockLocations';
import { MapMarker } from './MapMarker';
import { MapAnnotation } from './MapAnnotation';

export const MapVisualization: React.FC = () => {
  const primaryLocation = MapData.LOCATIONS.find((loc) => loc.isPrimaryActive);

  return (
    <div className="relative w-full max-w-[580px] aspect-square rounded-3xl bg-[#0A0D18]/90 backdrop-blur-xl border border-indigo-950/80 shadow-[0_10px_50px_rgba(0,0,0,0.6)] overflow-hidden mx-auto lg:ml-auto">
      
      {/* Background Atmosphere Nebula Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Canvas for Abstract Campus Map Grid, Buildings, Roads & Connection Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for Connection Vector Paths */}
          <linearGradient id="mapConnGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="mapConnGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="mapConnGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* --- MAP BACKGROUND STREET GRID & ZONES --- */}
        {/* Abstract Campus Zone Rectangles / Buildings */}
        <rect x="50" y="60" width="110" height="90" rx="12" fill="#0D1122" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1.5" />
        <rect x="310" y="50" width="140" height="100" rx="16" fill="#0D1122" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
        <rect x="260" y="290" width="180" height="140" rx="16" fill="#0D1122" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" />
        <rect x="50" y="320" width="120" height="120" rx="16" fill="#0D1122" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1.5" />

        {/* Minor Inner Building Blocks */}
        <rect x="200" y="210" width="70" height="70" rx="8" fill="#11162B" opacity="0.6" />
        <rect x="70" y="80" width="70" height="50" rx="6" fill="#11162B" opacity="0.6" />

        {/* Road Grid Network Lines */}
        <line x1="0" y1="180" x2="500" y2="180" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="8" />
        <line x1="0" y1="260" x2="500" y2="260" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="8" />
        <line x1="180" y1="0" x2="180" y2="500" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="8" />
        <line x1="390" y1="0" x2="390" y2="500" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="8" />

        {/* Diagonal Primary Avenue */}
        <path d="M 0 100 L 500 400" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="4" strokeDasharray="6 6" />

        {/* Curved River / Pathway */}
        <path d="M 30 0 C 120 150, 100 350, 220 500" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="6" fill="none" />

        {/* --- ANIMATED CONNECTION VECTOR PATHS (Lost -> Match -> Verify -> Recover) --- */}
        
        {/* Path 1: Library (32%, 35% -> 160, 175) to Student Center (72%, 28% -> 360, 140) */}
        <path
          d="M 160 175 C 230 140, 290 130, 360 140"
          stroke="url(#mapConnGradient1)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="animate-dash-flow"
          fill="none"
        />

        {/* Path 2: Student Center (360, 140) to Science Lab (62%, 70% -> 310, 350) */}
        <path
          d="M 360 140 C 370 230, 340 300, 310 350"
          stroke="url(#mapConnGradient2)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="animate-dash-flow"
          fill="none"
        />

        {/* Path 3: Science Lab (310, 350) to Gymnasium (25%, 75% -> 125, 375) */}
        <path
          d="M 310 350 C 230 380, 180 370, 125 375"
          stroke="url(#mapConnGradient3)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          className="animate-dash-flow"
          fill="none"
        />

        {/* Light Particles Traveling on Connection Paths */}
        <circle cx="250" cy="145" r="3.5" fill="#8B5CF6" className="shadow-[0_0_10px_#8B5CF6] animate-ping" />
        <circle cx="340" cy="240" r="3.5" fill="#06B6D4" className="shadow-[0_0_10px_#06B6D4] animate-ping" />
        <circle cx="210" cy="370" r="3.5" fill="#10B981" className="shadow-[0_0_10px_#10B981] animate-ping" />
      </svg>

      {/* --- MAP MARKERS FOR ALL LOCATIONS --- */}
      {MapData.LOCATIONS.map((loc) => (
        <MapMarker key={loc.id} location={loc} />
      ))}

      {/* --- ACTIVE MATCH ANNOTATION POPUP (Library) --- */}
      {primaryLocation && <MapAnnotation location={primaryLocation} />}

      {/* --- MAP LEGEND PILL (Bottom Left) --- */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[#0B0F1B]/90 border border-indigo-950/80 backdrop-blur-md shadow-lg text-[10px] font-bold tracking-wider text-slate-300">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>Lost</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Found</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <span>Match</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Recovered</span>
        </span>
      </div>

      {/* Campus Map Label Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-xl bg-[#0B0F1B]/90 border border-indigo-900/50 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-violet-400 shadow-md">
        <span>CAMPUS RECOVERY MAP</span>
      </div>

    </div>
  );
};
