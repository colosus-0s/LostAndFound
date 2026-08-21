import React from 'react';
import { MapPin, ShieldAlert, Building2 } from 'lucide-react';

interface ItemLocationPreviewProps {
  location: string;
}

export const ItemLocationPreview: React.FC<ItemLocationPreviewProps> = ({ location }) => {
  return (
    <div className="w-full bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 md:p-8 space-y-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-white font-sans tracking-tight flex items-center gap-2">
          <MapPin className="w-5 h-5 text-violet-400" />
          <span>Reported Location Zone</span>
        </h3>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
          Approximate Public Zone
        </span>
      </div>

      {/* Visual Campus Zone Card Placeholder */}
      <div className="relative w-full h-44 rounded-2xl bg-[#04060A] border border-indigo-950/80 overflow-hidden flex flex-col justify-between p-5">
        
        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300 font-bold text-xs">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Campus Security Zone</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">GPS Ref: 37.7749° N, 122.4194° W</span>
        </div>

        <div className="relative z-10 space-y-1">
          <h4 className="text-white font-extrabold text-lg font-sans">
            {location}
          </h4>
          <p className="text-slate-400 text-xs">
            Specific room details or cabinet security numbers are kept private until verification.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-1.5 text-[11px] text-slate-400 pt-2 border-t border-indigo-950/80">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Exact storage location is disclosed only to verified owners.</span>
        </div>

      </div>
    </div>
  );
};
