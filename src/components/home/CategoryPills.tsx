import React, { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setSelectedCategory((prev) => (prev === label ? null : label));
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-2">
      <span className="text-xs md:text-sm font-semibold text-slate-400 mr-1">Trending:</span>
      {CATEGORIES.map(({ label, icon: Icon }) => {
        const isSelected = selectedCategory === label;
        return (
          <button
            key={label}
            onClick={() => handleToggle(label)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-[1.04] active:scale-95 group ${
              isSelected
                ? 'bg-gradient-to-r from-violet-600/40 to-indigo-600/40 border-violet-400 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#0B0F1B]/80 hover:bg-violet-950/40 border-indigo-900/40 hover:border-violet-500/60 text-slate-300 hover:text-white shadow-sm'
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 transition-colors ${
                isSelected ? 'text-cyan-400' : 'text-violet-400 group-hover:text-cyan-400'
              }`}
            />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
