import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface PotentialMatchesGroupProps {
  matches: BrowseItem[];
  currentItemStatus: BrowseItem['status'];
}

export const PotentialMatchesGroup: React.FC<PotentialMatchesGroupProps> = ({
  matches,
  currentItemStatus,
}) => {
  const targetType = currentItemStatus === 'LOST' ? 'FOUND' : 'LOST';

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-subtle">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>POTENTIAL MATCH CANDIDATES ({targetType})</span>
        </div>
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
          Signal Evaluation Active
        </span>
      </div>

      <div className="space-y-3">
        {matches.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-500 transition-all shadow-subtle group"
          >
            <div className="flex items-center gap-3.5">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-12 h-12 rounded-xl object-cover border border-gray-200 shrink-0"
              />
              <div>
                <h4 className="font-extrabold text-[#111318] text-sm group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <span className="text-xs text-gray-500 font-medium">{item.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-black">
                {item.matchConfidence || 85}% Match
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
