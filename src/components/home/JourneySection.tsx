import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase inline-block">
            THE RECOVERY PROCESS
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] tracking-tight font-sans">
            Every recovery starts with a report.
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Whether you lost a personal item or found something on campus, reporting it takes under 2 minutes.
          </p>
        </div>

        {/* 2 Main Action Cards (Lost vs Found) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* LEFT: Lost Option */}
          <div className="bg-white border border-gray-200 hover:border-red-400 rounded-3xl p-8 space-y-6 shadow-card transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
              <Search className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#111318] font-sans">
                I Lost Something
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provide details, category, date, and location zone. Our system alerts the community and checks against found reports.
              </p>
            </div>

            <Link
              to="/report"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>Report Lost Item</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT: Found Option */}
          <div className="bg-white border border-gray-200 hover:border-teal-400 rounded-3xl p-8 space-y-6 shadow-card transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Plus className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#111318] font-sans">
                I Found Something
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Report an item you found on campus. We protect location specifics until ownership is verified privately.
              </p>
            </div>

            <Link
              to="/report"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm group"
            >
              <span>Report Found Item</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
