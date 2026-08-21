import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Search } from 'lucide-react';

export const RecoverySection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-subtle">
          
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold tracking-widest uppercase inline-block">
              THE JOURNEY COMPLETE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
              Back where it belongs.
            </h2>
            <p className="text-gray-600 text-base max-w-lg mx-auto leading-relaxed">
              What started as a lost item ends with a safe, verified return. Join thousands of campus community members reuniting belongings every day.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/report"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Report an Item Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/browse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-800 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all shadow-subtle"
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span>Browse Directory</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
