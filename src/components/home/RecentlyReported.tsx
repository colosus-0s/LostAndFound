import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Tag, Sparkles } from 'lucide-react';
import { MOCK_BROWSE_ITEMS } from '../../data/mockBrowseItems';

export const RecentlyReported: React.FC = () => {
  // Take top 6 recent items from mock data
  const recentItems = MOCK_BROWSE_ITEMS.slice(0, 6);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Section Header & View All CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase inline-block">
              COMMUNITY FEED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] font-sans tracking-tight">
              Recently reported
            </h2>
            <p className="text-gray-600 text-base max-w-xl font-normal">
              See what's been reported across the community. Browse items, check locations, or search for a match.
            </p>
          </div>

          <Link
            to="/browse"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 hover:border-blue-500 transition-all shadow-subtle shrink-0 group"
          >
            <span>View All Items</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentItems.map((item) => {
            const isLost = item.status === 'LOST';
            return (
              <Link
                key={item.id}
                to={`/item/${item.id}`}
                className="group bg-white border border-gray-200 hover:border-blue-500 rounded-2xl overflow-hidden transition-all duration-200 hover:translate-y-[-2px] shadow-subtle hover:shadow-card flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase shadow-sm ${
                        isLost
                          ? 'bg-red-100 border border-red-200 text-red-700'
                          : 'bg-teal-100 border border-teal-200 text-teal-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Match Confidence Overlay */}
                  {item.matchConfidence && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span>{item.matchConfidence}% Match</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider uppercase text-gray-400">
                      <Tag className="w-3 h-3 text-blue-600 shrink-0" />
                      <span>{item.category}</span>
                      {item.metadata.brand && (
                        <>
                          <span>•</span>
                          <span className="text-gray-600">{item.metadata.brand}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-[#111318] font-extrabold text-base md:text-lg tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 text-xs font-normal leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-gray-400 shrink-0 font-bold">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-[#111318] font-sans">
              Looking for something specific?
            </h4>
            <p className="text-xs text-gray-600">
              Filter by campus location, item category, date range, or keyword in the directory.
            </p>
          </div>
          <Link
            to="/browse"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
          >
            Open Full Directory
          </Link>
        </div>

      </div>
    </section>
  );
};
