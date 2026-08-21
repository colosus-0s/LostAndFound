import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

export const HowItWorksCTA: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#04060A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Lost something? Found something?
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal max-w-md mx-auto">
            Either way, the first step is simple.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/report"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              <span>Report an Item</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/browse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B0F1B] border border-indigo-900/60 text-slate-300 font-bold text-xs uppercase tracking-wider hover:text-white hover:border-violet-500/50 transition-all"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Browse Lost & Found</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
