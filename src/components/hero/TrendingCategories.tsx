import React from 'react';
import { Smartphone, Wallet, Backpack, Watch, Laptop, Headphones } from 'lucide-react';
import { ROUTE_PATHS } from '../../routes';

export const TrendingCategories: React.FC = () => {
  const categories = [
    { label: 'Phones', icon: Smartphone, query: 'phone' },
    { label: 'Wallets', icon: Wallet, query: 'wallet' },
    { label: 'Backpacks', icon: Backpack, query: 'backpack' },
    { label: 'Watches', icon: Watch, query: 'watch' },
    { label: 'Laptops', icon: Laptop, query: 'laptop' },
    { label: 'Earbuds', icon: Headphones, query: 'earbuds' },
  ];

  return (
    <div className="trending-categories-container flex flex-wrap items-center gap-2 pt-1">
      <span className="text-xs font-medium text-gray-400 mr-1">Trending:</span>
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.label}
            type="button"
            onClick={() => {
              window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?category=${cat.query}`;
            }}
            className="trending-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-[#111827]/80 hover:bg-[#1E1B4B] border border-white/10 hover:border-[#6366F1]/40 rounded-full transition-all cursor-pointer shadow-sm"
          >
            <Icon className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};
