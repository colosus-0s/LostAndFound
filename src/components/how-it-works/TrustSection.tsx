import React from 'react';
import { ShieldCheck, EyeOff, Activity, UserCheck } from 'lucide-react';

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Ownership Verification',
    desc: 'Items require proof review before transfer, eliminating false claims.',
  },
  {
    icon: EyeOff,
    title: 'Privacy-First Locations',
    desc: 'Public location zones remain approximate to protect privacy.',
  },
  {
    icon: Activity,
    title: 'Transparent Status Tracking',
    desc: 'Clear, real-time visibility from initial report to final return.',
  },
  {
    icon: UserCheck,
    title: 'Structured Handover',
    desc: 'Physical returns are arranged safely at designated campus security desks.',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#04060A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-[1200px] mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-8 md:p-12 shadow-xl space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase inline-block">
              TRUST ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
              Built around trust, not assumptions.
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-normal">
              Every feature exists to ensure belongings safely reach their true owners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/40 flex items-center justify-center text-violet-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-extrabold text-base font-sans">{p.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
