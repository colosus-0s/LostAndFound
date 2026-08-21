import React from 'react';
import { Search, PackageCheck, AlertCircle } from 'lucide-react';

interface ReportTypeStepProps {
  reportType: 'LOST' | 'FOUND' | null;
  onSelectType: (type: 'LOST' | 'FOUND') => void;
  error?: string;
}

export const ReportTypeStep: React.FC<ReportTypeStepProps> = ({ reportType, onSelectType, error }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
          What happened?
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Select whether you lost an item or found something that belongs to someone else.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-bold max-w-md mx-auto">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* 2 Selectable Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        
        {/* LOST CARD */}
        <div
          onClick={() => onSelectType('LOST')}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectType('LOST')}
          className={`p-6 sm:p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
            reportType === 'LOST'
              ? 'bg-rose-950/40 border-rose-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] translate-y-[-2px]'
              : 'bg-[#0A0D18]/90 border-indigo-950/80 hover:border-rose-500/40 hover:bg-[#0B0F1B]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/60 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Search className="w-6 h-6" />
            </div>
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${
                reportType === 'LOST'
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {reportType === 'LOST' ? 'Selected' : 'Option 01'}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight">
              LOST SOMETHING?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Tell us what you lost so our matching system can compare your report against found items.
            </p>
          </div>
        </div>

        {/* FOUND CARD */}
        <div
          onClick={() => onSelectType('FOUND')}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectType('FOUND')}
          className={`p-6 sm:p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
            reportType === 'FOUND'
              ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] translate-y-[-2px]'
              : 'bg-[#0A0D18]/90 border-indigo-950/80 hover:border-cyan-500/40 hover:bg-[#0B0F1B]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <PackageCheck className="w-6 h-6" />
            </div>
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${
                reportType === 'FOUND'
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {reportType === 'FOUND' ? 'Selected' : 'Option 02'}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white font-sans tracking-tight">
              FOUND SOMETHING?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Tell us what you found so we can help privately verify ownership and return it to its rightful owner.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
