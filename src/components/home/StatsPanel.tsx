import React from 'react';
import { Package, Heart, Building2, ShieldCheck } from 'lucide-react';

const STATS = [
  {
    icon: Package,
    number: '2,450+',
    title: 'Items Recovered',
    description: 'Successfully returned to their rightful owners',
    color: 'violet', // violet/purple glow
    iconBg: 'bg-violet-600/20 border-violet-500/40 text-violet-400 shadow-[0_0_15px_rgba(124,58,237,0.3)]',
    titleColor: 'text-violet-400',
  },
  {
    icon: Heart,
    number: '1,890+',
    title: 'Happy Reunions',
    description: 'People reunited with what matters most',
    color: 'purple',
    iconBg: 'bg-violet-600/20 border-violet-500/40 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]',
    titleColor: 'text-violet-400',
  },
  {
    icon: Building2,
    number: '75+',
    title: 'Active Campuses',
    description: 'Universities and organizations trusting our platform',
    color: 'blue',
    iconBg: 'bg-blue-600/20 border-blue-500/40 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    titleColor: 'text-blue-400',
  },
  {
    icon: ShieldCheck,
    number: '98%',
    title: 'Success Rate',
    description: 'High matching accuracy and verification rate',
    color: 'cyan',
    iconBg: 'bg-cyan-600/20 border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    titleColor: 'text-cyan-400',
  },
];

export const StatsPanel: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 mt-12 md:mt-16 mb-16">
      <div className="w-full bg-[#0A0D18]/85 backdrop-blur-xl border border-indigo-950/60 rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-indigo-950/80">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="flex items-start gap-5 lg:px-8 first:pl-0 last:pr-0">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
                    {stat.number}
                  </span>
                  <span className={`text-sm font-bold mt-1 ${stat.titleColor}`}>
                    {stat.title}
                  </span>
                  <p className="text-slate-400 text-xs md:text-sm mt-1.5 font-normal leading-relaxed">
                    {stat.description}
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
