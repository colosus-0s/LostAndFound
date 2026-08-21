import React from 'react';
import { Smartphone, Wallet, Backpack, Watch, Laptop, Headphones } from 'lucide-react';

const CATEGORIES = [
  { label: 'Phones', icon: Smartphone },
  { label: 'Wallets', icon: Wallet },
  { label: 'Backpacks', icon: Backpack },
  { label: 'Watches', icon: Watch },
  { label: 'Laptops', icon: Laptop },
  { label: 'Earbuds', icon: Headphones },
];

export const CategoryPills: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      <span className="text-xs md:text-sm font-semibold text-slate-400 mr-1">Trending:</span>
      {CATEGORIES.map(({ label, icon: Icon }) => (
        <button
          key={label}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F1B]/80 hover:bg-violet-950/40 border border-indigo-900/40 hover:border-violet-500/50 text-slate-300 hover:text-white text-xs md:text-sm font-medium transition-all group shadow-sm"
        >
          <Icon className="w-3.5 h-3.5 text-violet-400 group-hover:text-cyan-400 transition-colors" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
