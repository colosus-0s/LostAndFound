import React from 'react';
import { Tag, Palette, Shield, Info } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ItemDetailsGroupProps {
  item: BrowseItem;
}

export const ItemDetailsGroup: React.FC<ItemDetailsGroupProps> = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-subtle">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500">
        <Info className="w-4 h-4 text-blue-600" />
        <span>REPORT SPECIFICATIONS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Category */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>Category</span>
          </div>
          <span className="font-extrabold text-[#111318] text-base block">{item.category}</span>
        </div>

        {/* Brand */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Brand / Manufacturer</span>
          </div>
          <span className="font-extrabold text-[#111318] text-base block">
            {item.metadata.brand || 'Unspecified'}
          </span>
        </div>

        {/* Color */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>Primary Color</span>
          </div>
          <span className="font-extrabold text-[#111318] text-base block">
            {item.metadata.color || 'Unspecified'}
          </span>
        </div>

        {/* Status */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Listing Type</span>
          </div>
          <span className="font-extrabold text-[#111318] text-base block">{item.status}</span>
        </div>

      </div>
    </div>
  );
};
