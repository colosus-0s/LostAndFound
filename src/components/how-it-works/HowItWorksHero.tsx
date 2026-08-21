import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Search, ShieldCheck } from 'lucide-react';

export const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-6 max-w-3xl">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>HOW IT WORKS</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111318] tracking-tight font-sans">
          From lost <span className="text-blue-600">to found.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          One report starts a chain of connections. We bring together the details that help people find what they thought was gone.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <span>Browse Items</span>
          </Link>
        </div>

        {/* Trust Note */}
        <div className="inline-flex items-center gap-2 text-xs text-gray-500 pt-2 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Encrypted ownership verification protects every community report.</span>
        </div>

      </div>
    </section>
  );
};
