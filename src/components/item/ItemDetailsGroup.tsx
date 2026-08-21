import React from 'react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ItemDetailsGroupProps {
  item: BrowseItem;
}

export const ItemDetailsGroup: React.FC<ItemDetailsGroupProps> = ({ item }) => {
  const details = [
    { label: 'Category', value: item.category },
    { label: 'Report Status', value: item.status },
    { label: 'Reported Date', value: item.date },
    { label: 'Location Zone', value: item.location },
    { label: 'Color / Finish', value: item.metadata.color || 'Standard' },
    { label: 'Brand / Make', value: item.metadata.brand || 'Unspecified' },
    { label: 'Verification Protocol', value: 'Encrypted Ownership Proof' },
  ];

  return (
    <div className="w-full bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 md:p-8 space-y-4 shadow-lg">
      <h3 className="text-lg font-extrabold text-white font-sans tracking-tight">
        Detailed Specifications
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {details.map((d, idx) => (
          <div key={idx} className="bg-[#0B0F1B]/80 border border-indigo-950/80 p-3.5 rounded-xl space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
              {d.label}
            </span>
            <span className="text-white text-sm font-semibold block truncate">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
