import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Search, Home, ShieldCheck, Eye } from 'lucide-react';

interface ReportSuccessProps {
  reportId: string;
  reportType: 'LOST' | 'FOUND' | null;
}

export const ReportSuccess: React.FC<ReportSuccessProps> = ({ reportId, reportType }) => {
  const isLost = reportType === 'LOST';

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-subtle animate-fadeIn">
      {/* Icon */}
      <div className="w-20 h-20 rounded-3xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto shadow-sm">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold tracking-widest uppercase inline-block">
          REPORT CONFIRMED • ID #{reportId}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
          Report Submitted Successfully
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Your {isLost ? 'lost item' : 'found item'} report is now part of the Lost & Found directory. We'll use the information you provided to surface potential matches.
        </p>
      </div>

      {/* Trust Message Box */}
      <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center justify-center gap-2 max-w-md mx-auto">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Privacy & ownership verification protocols active.</span>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to={`/item/${reportId}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
        >
          <Eye className="w-4 h-4" />
          <span>View My Report</span>
        </Link>

        <Link
          to="/browse"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all shadow-subtle"
        >
          <Search className="w-4 h-4 text-blue-600" />
          <span>Browse Items</span>
        </Link>

        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-500 font-bold text-xs uppercase tracking-wider hover:text-gray-800 transition-all shadow-subtle"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};
