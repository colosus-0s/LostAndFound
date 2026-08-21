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
    <section className="relative w-full py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-[1200px] mx-auto bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 shadow-subtle space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-extrabold tracking-widest uppercase inline-block">
              TRUST ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
              Built around trust, not assumptions.
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-normal">
              Every feature exists to ensure belongings safely reach their true owners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3 shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#111318] font-extrabold text-base font-sans">{p.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-normal">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
