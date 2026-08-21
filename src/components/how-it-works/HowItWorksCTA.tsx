import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

export const HowItWorksCTA: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-subtle">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
            Lost something? Found something?
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-normal max-w-md mx-auto">
            Either way, the first step is simple.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/report"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Report an Item</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/browse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all shadow-subtle"
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span>Browse Lost & Found</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
