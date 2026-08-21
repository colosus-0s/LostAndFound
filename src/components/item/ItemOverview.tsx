import React from 'react';
import { MapPin, Calendar, ShieldCheck, ArrowRight, Tag } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ItemOverviewProps {
  item: BrowseItem;
  onInitiateClaim: () => void;
}

export const ItemOverview: React.FC<ItemOverviewProps> = ({ item, onInitiateClaim }) => {
  const isLost = item.status === 'LOST';

  return (
    <div className="space-y-6">
      
      {/* Category & Status Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500">
          <Tag className="w-4 h-4 text-blue-600" />
          <span>{item.category}</span>
          {item.metadata.brand && (
            <>
              <span>•</span>
              <span className="text-gray-700">{item.metadata.brand}</span>
            </>
          )}
        </div>

        <span
          className={`px-3 py-1 rounded-lg text-xs font-black tracking-widest uppercase border ${
            isLost
              ? 'bg-red-100 border-red-200 text-red-700'
              : 'bg-teal-100 border-teal-200 text-teal-800'
          }`}
        >
          {item.status} REPORT
        </span>
      </div>

      {/* Item Title */}
      <h1 className="text-3xl sm:text-4xl font-black text-[#111318] font-sans tracking-tight leading-tight">
        {item.name}
      </h1>

      {/* Meta Chips Row */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-600">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 border border-gray-200">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{item.location}</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 border border-gray-200">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>Reported {item.date}</span>
        </div>
      </div>

      {/* Description Box */}
      <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
          REPORT DESCRIPTION
        </span>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Primary Action Button */}
      <div className="pt-2">
        <button
          onClick={onInitiateClaim}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-sm ${
            isLost
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-teal-700 hover:bg-teal-800'
          }`}
        >
          <span>{isLost ? 'I Found This Item (Start Claim)' : 'This Is My Item (Start Claim)'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust Disclaimer */}
      <div className="flex items-center gap-2 text-xs text-gray-500 pt-1 font-medium">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Verification proof is required before handover location details are disclosed.</span>
      </div>

    </div>
  );
};
