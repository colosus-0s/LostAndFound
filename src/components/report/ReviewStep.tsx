import React from 'react';
import { ReportFormData } from '../../services/reportService';
import { Edit3, CheckCircle2 } from 'lucide-react';

interface ReviewStepProps {
  data: ReportFormData;
  onEditStep: (stepNumber: number) => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ data, onEditStep }) => {
  const isLost = data.reportType === 'LOST';

  return (
    <div className="space-y-6 max-w-3xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
          Review Report Summary
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Please review your report details carefully before final submission.
        </p>
      </div>

      {/* Summary Group Cards */}
      <div className="space-y-4">
        
        {/* Section 1: Type */}
        <div className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Report Type</span>
            <span className={`inline-block mt-1 px-3 py-0.5 rounded-md text-xs font-extrabold tracking-widest uppercase ${
              isLost ? 'bg-rose-950/90 border border-rose-500/40 text-rose-300' : 'bg-cyan-950/90 border border-cyan-500/40 text-cyan-300'
            }`}>
              {data.reportType} ITEM
            </span>
          </div>
          <button
            onClick={() => onEditStep(1)}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 2: Item Info */}
        <div className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Item Details</span>
            <h4 className="text-white font-bold text-base">{data.itemName}</h4>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300 font-medium">
              <span>Category: <strong className="text-white">{data.category}</strong></span>
              {data.brand && <span>Brand: <strong className="text-white">{data.brand}</strong></span>}
              {data.color && <span>Color: <strong className="text-white">{data.color}</strong></span>}
            </div>
          </div>
          <button
            onClick={() => onEditStep(2)}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 3: Photos */}
        <div className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Item Photos</span>
            {data.photos.length > 0 ? (
              <div className="flex items-center gap-3">
                {data.photos.map((url, idx) => (
                  <img key={idx} src={url} alt={`Upload ${idx}`} className="w-14 h-14 rounded-xl object-cover border border-indigo-900" />
                ))}
              </div>
            ) : (
              <span className="text-xs text-slate-400 font-medium italic">No photos attached</span>
            )}
          </div>
          <button
            onClick={() => onEditStep(3)}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 4 & 5: Location, Date & Time */}
        <div className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Location & Date</span>
            <div className="text-sm font-bold text-white">
              {data.locationArea} {data.specificPlace ? `(${data.specificPlace})` : ''}
            </div>
            <div className="text-xs text-slate-300 font-medium">
              Reported Date: {data.date} • {data.approxTime}
            </div>
          </div>
          <button
            onClick={() => onEditStep(4)}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 6: Description */}
        <div className="bg-[#0B0F1B]/90 border border-indigo-950/80 rounded-2xl p-4 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Description</span>
            <p className="text-slate-300 text-xs leading-relaxed">
              {data.description || <em className="text-slate-400">No additional description provided.</em>}
            </p>
          </div>
          <button
            onClick={() => onEditStep(6)}
            className="flex items-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

      </div>

      <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Your report is ready for submission. Once submitted, matching algorithms will evaluate incoming community reports.</span>
      </div>
    </div>
  );
};
