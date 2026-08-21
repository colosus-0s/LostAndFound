import React from 'react';
import { ShieldCheck, Search, FileText, CheckCircle2, PackageCheck } from 'lucide-react';

const CLAIM_STEPS = [
  { step: '01', title: 'Identify Item', desc: 'Inspect location, time window, and category details.', icon: Search },
  { step: '02', title: 'Submit Ownership Info', desc: 'Provide private serial proof or distinguishing marks.', icon: FileText },
  { step: '03', title: 'Verification Review', desc: 'Moderators review proof privately and encrypt records.', icon: CheckCircle2 },
  { step: '04', title: 'Recovery Arranged', desc: 'Pick up item safely at designated campus security desk.', icon: PackageCheck },
];

export const ClaimInfoBox: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-lg">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-400" />
        <h3 className="text-xl font-extrabold text-white font-sans tracking-tight">
          How Claiming Works
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CLAIM_STEPS.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.step} className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-500 tracking-widest">{item.step}</span>
                <IconComp className="w-4 h-4 text-violet-400" />
              </div>
              <h4 className="text-white font-bold text-sm font-sans">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
