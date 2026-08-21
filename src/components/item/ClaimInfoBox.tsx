import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { BrowseItem } from '../../data/mockBrowseItems';

interface ClaimInfoBoxProps {
  itemStatus: BrowseItem['status'];
  onInitiateClaim: () => void;
}

export const ClaimInfoBox: React.FC<ClaimInfoBoxProps> = ({ itemStatus, onInitiateClaim }) => {
  const isLost = itemStatus === 'LOST';

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-5 shadow-subtle">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>RECOVERY & CLAIM WORKFLOW</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-[#111318] font-sans">
          {isLost ? 'Found this item?' : 'Is this your item?'}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal">
          {isLost
            ? 'If you have found or recovered this missing item, notify the owner by starting the claim verification workflow.'
            : 'If this belongs to you, submit your ownership proof (serial number, lock code, or distinguishing features) to initiate a return.'}
        </p>
      </div>

      <button
        onClick={onInitiateClaim}
        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm ${
          isLost
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-teal-700 hover:bg-teal-800'
        }`}
      >
        <span>{isLost ? 'I Found This Item' : 'Start Ownership Verification'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <span className="text-[11px] text-gray-400 block text-center font-semibold">
        Verification forms are encrypted and handled by campus administrators.
      </span>
    </div>
  );
};
