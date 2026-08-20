import React from 'react';
import { Package, Heart, Building2, ShieldCheck } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '2,450+',
      label: 'Items Recovered',
      subtext: 'Successfully returned to their rightful owners',
      icon: Package,
      color: 'text-[#6366F1]',
      bgColor: 'bg-[#6366F1]/10',
    },
    {
      value: '1,890+',
      label: 'Happy Reunions',
      subtext: 'People reunited with what matters most',
      icon: Heart,
      color: 'text-[#22D3EE]',
      bgColor: 'bg-[#22D3EE]/10',
    },
    {
      value: '75+',
      label: 'Active Campuses',
      subtext: 'Universities and organizations trusting our platform',
      icon: Building2,
      color: 'text-[#A855F7]',
      bgColor: 'bg-[#A855F7]/10',
    },
    {
      value: '98%',
      label: 'Success Rate',
      subtext: 'High matching accuracy and verification rate',
      icon: ShieldCheck,
      color: 'text-[#10B981]',
      bgColor: 'bg-[#10B981]/10',
    },
  ];

  return (
    <div className="stats-strip-container w-full pt-8">
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-start gap-4 ${
                  index !== 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className={`p-3.5 rounded-2xl ${item.bgColor} border border-white/10 ${item.color} shrink-0 mt-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-gray-200">
                    {item.label}
                  </span>
                  <p className="text-[11px] text-gray-400 leading-snug max-w-[200px]">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
