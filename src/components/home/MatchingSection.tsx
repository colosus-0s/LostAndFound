import React from 'react';
import { Sparkles, MapPin, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_BROWSE_ITEMS } from '../../data/mockBrowseItems';

export const MatchingSection: React.FC = () => {
  const lostItem = MOCK_BROWSE_ITEMS[0];
  const candidateMatches = MOCK_BROWSE_ITEMS.slice(1, 4);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wide uppercase inline-block">
            INTELLIGENT MATCHING
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] tracking-tight font-sans">
            Connecting the clues around every item.
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Our engine evaluates category, color, brand, location zone, and date windows to bring potential matches forward.
          </p>
        </div>

        {/* Matching Visual Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Lost Report Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 space-y-5 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-lg bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider inline-block">
                LOST REPORT
              </span>

              <img
                src={lostItem.imageUrl}
                alt={lostItem.name}
                className="w-full h-48 rounded-2xl object-cover border border-gray-200"
              />

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#111318] font-sans">
                  {lostItem.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{lostItem.location}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {lostItem.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500">
              <span>Category: {lostItem.category}</span>
              <span>Date: {lostItem.date}</span>
            </div>
          </div>

          {/* Right: Candidate Matches List (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 space-y-4 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  CANDIDATE FOUND ITEMS
                </span>
                <span className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Automated Signal Evaluation</span>
                </span>
              </div>

              <div className="space-y-3">
                {candidateMatches.map((cand, idx) => (
                  <div
                    key={cand.id}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      idx === 0
                        ? 'bg-white border-2 border-indigo-500 shadow-md'
                        : 'bg-white/80 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={cand.imageUrl}
                        alt={cand.name}
                        className="w-14 h-14 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <h4 className="font-extrabold text-[#111318] text-sm leading-snug">
                          {cand.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium block">
                          {cand.location}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-black inline-block ${
                          idx === 0
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {cand.matchConfidence}% Match
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500">
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-indigo-600" />
                <span>Highest Match: 92% Confidence</span>
              </span>
              <Link to="/browse" className="text-indigo-600 hover:underline flex items-center gap-1">
                <span>View in Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
