import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Search, Home, ShieldCheck } from 'lucide-react';

interface ReportSuccessProps {
  reportId: string;
  reportType: 'LOST' | 'FOUND' | null;
}

export const ReportSuccess: React.FC<ReportSuccessProps> = ({ reportId, reportType }) => {
  const isLost = reportType === 'LOST';

  return (
    <div className="max-w-2xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fadeIn">
      {/* Icon */}
      <div className="w-20 h-20 rounded-3xl bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold tracking-widest uppercase inline-block">
          REPORT CONFIRMED • ID #{reportId}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
          Report Submitted Successfully
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Your {isLost ? 'lost item' : 'found item'} report is now active in the Lost & Found system. We'll use the information you provided to surface potential matches.
        </p>
      </div>

      {/* Trust Message Box */}
      <div className="p-4 rounded-2xl bg-[#0B0F1B] border border-indigo-900/60 text-xs text-slate-300 flex items-center justify-center gap-2 max-w-md mx-auto">
        <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
        <span>Privacy & ownership verification protocols active.</span>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/browse"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)]"
        >
          <Search className="w-4 h-4" />
          <span>Browse Lost & Found Directory</span>
        </Link>

        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B0F1B] border border-indigo-900/60 text-slate-300 font-bold text-xs uppercase tracking-wider hover:text-white hover:border-violet-500/50 transition-all"
        >
          <Home className="w-4 h-4 text-cyan-400" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};
