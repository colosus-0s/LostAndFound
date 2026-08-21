import React from 'react';

interface DescriptionStepProps {
  description: string;
  onChange: (value: string) => void;
}

const MAX_CHAR = 500;

export const DescriptionStep: React.FC<DescriptionStepProps> = ({ description, onChange }) => {
  const remaining = MAX_CHAR - description.length;

  return (
    <div className="space-y-6 max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Identifying Description
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Describe anything that could help recognize this item. Include details such as color, case, stickers, scratches, or unique marks.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300">
          <label>Description Details</label>
          <span className={remaining < 50 ? 'text-amber-400 font-bold' : 'text-slate-400'}>
            {remaining} characters remaining
          </span>
        </div>

        <textarea
          rows={5}
          maxLength={MAX_CHAR}
          value={description}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Space Black iPhone 14 Pro with a dark clear silicone case. Left near computer workstation 14 in the 2nd floor library study area..."
          className="w-full p-4 bg-[#0B0F1B] border border-indigo-900/60 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-violet-500 leading-relaxed resize-none"
        />
        <p className="text-[#8890A6] text-xs">
          Do not include passwords, PINs, or private financial details in public description fields.
        </p>
      </div>
    </div>
  );
};
