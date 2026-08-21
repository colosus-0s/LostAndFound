import React from 'react';
import { Tag, Palette, Shield, AlertCircle } from 'lucide-react';

interface ItemInformationStepProps {
  itemName: string;
  category: string;
  brand: string;
  color: string;
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

const CATEGORIES = [
  'Phones',
  'Wallets',
  'Backpacks',
  'Laptops',
  'Earbuds',
  'Watches',
  'Keys',
  'Student ID',
  'Accessories',
  'Other',
];

export const ItemInformationStep: React.FC<ItemInformationStepProps> = ({
  itemName,
  category,
  brand,
  color,
  onChange,
  errors = {},
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Item Information
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Provide basic details about the item to help identify and categorize it.
        </p>
      </div>

      {/* Item Name */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Item Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => onChange('itemName', e.target.value)}
          placeholder="e.g. iPhone 14 Pro, Black Leather Wallet, Car Keys"
          className={`w-full px-4 py-3 bg-[#0B0F1B] border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-violet-500 ${
            errors.itemName ? 'border-rose-500' : 'border-indigo-900/60'
          }`}
        />
        {errors.itemName && (
          <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.itemName}</span>
          </span>
        )}
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-violet-400" />
          <span>Category <span className="text-rose-400">*</span></span>
        </label>
        <select
          value={category}
          onChange={(e) => onChange('category', e.target.value)}
          className={`w-full px-4 py-3 bg-[#0B0F1B] border rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 cursor-pointer ${
            errors.category ? 'border-rose-500' : 'border-indigo-900/60'
          }`}
        >
          <option value="" className="text-slate-400">Select a category...</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat} className="bg-[#0B0F1B] text-white">
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="flex items-center gap-1 text-xs text-rose-400 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.category}</span>
          </span>
        )}
      </div>

      {/* 2-Column Grid: Brand & Color */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Brand */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Brand / Make (Optional)</span>
          </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => onChange('brand', e.target.value)}
            placeholder="e.g. Apple, Fossil, Nike"
            className="w-full px-4 py-3 bg-[#0B0F1B] border border-indigo-900/60 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Color */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-emerald-400" />
            <span>Color / Finish (Optional)</span>
          </label>
          <input
            type="text"
            value={color}
            onChange={(e) => onChange('color', e.target.value)}
            placeholder="e.g. Space Black, Dark Blue"
            className="w-full px-4 py-3 bg-[#0B0F1B] border border-indigo-900/60 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>
    </div>
  );
};
