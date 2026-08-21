import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, User, ArrowRight, PackageSearch } from 'lucide-react';

const ACTIONS = [
  {
    title: 'Report Lost Item',
    subtitle: 'REPORT LOST',
    desc: 'Tell the community what you lost with category, date, and location details.',
    icon: Search,
    href: '/report',
    accentBg: 'bg-red-50 text-red-600 border-red-200',
    buttonBg: 'bg-red-600 hover:bg-red-700 text-white',
  },
  {
    title: 'Report Found Item',
    subtitle: 'REPORT FOUND',
    desc: 'Help return something to its rightful owner. Location details stay private.',
    icon: Plus,
    href: '/report',
    accentBg: 'bg-teal-50 text-teal-700 border-teal-200',
    buttonBg: 'bg-teal-700 hover:bg-teal-800 text-white',
  },
  {
    title: 'Browse Directory',
    subtitle: 'BROWSE ITEMS',
    desc: 'Search, filter, and sort active lost & found reports across campus.',
    icon: PackageSearch,
    href: '/browse',
    accentBg: 'bg-blue-50 text-blue-600 border-blue-200',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    title: 'Sign In / Account',
    subtitle: 'MY REPORTS',
    desc: 'Track your active report submissions, potential matches, and claim status.',
    icon: User,
    href: '/login',
    accentBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    buttonBg: 'bg-gray-900 hover:bg-black text-white',
  },
];

export const QuickActions: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase inline-block">
            QUICK ACTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111318] font-sans tracking-tight">
            What would you like to do?
          </h2>
          <p className="text-gray-600 text-sm font-normal">
            Choose an option below to start your search or submit a community report.
          </p>
        </div>

        {/* 4 Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIONS.map((act, idx) => {
            const IconComp = act.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-gray-200 hover:border-gray-300 rounded-3xl p-6 space-y-5 shadow-subtle flex flex-col justify-between transition-all duration-200 hover:translate-y-[-2px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${act.accentBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">
                      {act.subtitle}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-extrabold text-[#111318] font-sans">
                      {act.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {act.desc}
                    </p>
                  </div>
                </div>

                <Link
                  to={act.href}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm group ${act.buttonBg}`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
