import React from 'react';
import { Package, Heart, Building2, ShieldCheck } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '2,450+',
      label: 'Items Recovered',
      icon: Package,
      color: 'text-[#6366F1]',
    },
    {
      value: '1,890+',
      label: 'Happy Reunions',
      icon: Heart,
      color: 'text-[#22D3EE]',
    },
    {
      value: '75+',
      label: 'Active Campuses',
      icon: Building2,
      color: 'text-[#A855F7]',
    },
    {
      value: '98%',
      label: 'Success Rate',
      icon: ShieldCheck,
      color: 'text-[#10B981]',
    },
  ];

  return (
    <div className="stats-strip-container w-full pt-6">
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 ${
                  index !== 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className={`p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 ${item.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-400">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
