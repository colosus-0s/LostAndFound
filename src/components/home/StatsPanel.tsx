import React from 'react';
import { PackageCheck, ShieldCheck, Clock, Users } from 'lucide-react';

const STATS_DATA = [
  { label: 'Community Reports Processed', value: '1,280+', icon: PackageCheck },
  { label: 'Ownership Verification Rate', value: '94.2%', icon: ShieldCheck },
  { label: 'Avg Recovery Window', value: '48 Hours', icon: Clock },
  { label: 'Active Community Members', value: '3,500+', icon: Users },
];

export const StatsPanel: React.FC = () => {
  return (
    <section className="relative w-full py-8 bg-[#F8F9FA] border-y border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-subtle grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#111318] tracking-tight block font-sans">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-gray-500 block">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
