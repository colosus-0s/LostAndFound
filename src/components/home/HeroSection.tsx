import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MapPin, Sparkles, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { MOCK_BROWSE_ITEMS } from '../../data/mockBrowseItems';

const CATEGORIES = [
  'Phones',
  'Wallets',
  'Backpacks',
  'Student IDs',
  'Earbuds',
  'Keys',
  'Laptops',
  'Watches',
];

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  const handleCategoryClick = (cat: string) => {
    navigate(`/browse?category=${encodeURIComponent(cat)}`);
  };

  // Featured real items for hero right visual
  const featuredLostItem = MOCK_BROWSE_ITEMS[0]; // iPhone 14 Pro
  const featuredFoundItem = MOCK_BROWSE_ITEMS[1]; // Wallet

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Clear Product Communication & Actions (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Campus Community Lost & Found</span>
            </div>

            {/* Main Product Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111318] tracking-tight font-sans leading-[1.1]">
                Lost something? <br />
                <span className="text-blue-600">Let's help you find it.</span>
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Search reported community items, report belongings you've lost or found, and connect potential matches in one place.
              </p>
            </div>

            {/* Main Prominent Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-2xl">
              <div className="relative flex items-center bg-white border-2 border-gray-200 focus-within:border-blue-600 rounded-2xl p-2 shadow-card transition-all">
                <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search lost or found items (e.g. iPhone, Wallet, Library)..."
                  className="w-full px-3 py-2.5 text-gray-900 placeholder-gray-400 text-sm md:text-base focus:outline-none font-medium bg-transparent"
                  aria-label="Search lost or found items"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shrink-0 transition-all shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Primary Action Buttons: Report Lost & Report Found */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-2xl">
              <button
                onClick={() => navigate('/report')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-sm group"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Report Lost Item</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/report')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm transition-all shadow-sm group"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Report Found Item</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trending Categories Chips */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 block">
                Popular Browse Categories:
              </span>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-xs font-bold transition-all shadow-subtle flex items-center gap-1.5"
                  >
                    <Tag className="w-3 h-3 text-gray-400" />
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Real Physical Item Cards & Campus Location Visual (5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Top Visual Card: Lost Item */}
            <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-card space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
                  LOST REPORT
                </span>
                <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>92% Potential Match</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={featuredLostItem.imageUrl}
                  alt={featuredLostItem.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-gray-200 shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-[#111318] text-base leading-tight">
                    {featuredLostItem.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{featuredLostItem.location}</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 block">
                    Reported on {featuredLostItem.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Match Card: Found Item */}
            <div className="bg-white border-2 border-indigo-500/80 rounded-3xl p-5 shadow-float space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-teal-100 border border-teal-200 text-teal-800 text-xs font-black uppercase tracking-wider">
                  FOUND MATCH CANDIDATE
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Ready for Verification
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={featuredFoundItem.imageUrl}
                  alt={featuredFoundItem.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-gray-200 shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-[#111318] text-base leading-tight">
                    {featuredFoundItem.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{featuredFoundItem.location}</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 block">
                    Reported on {featuredFoundItem.date}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-600">
                <span>Matching Attributes:</span>
                <span className="text-indigo-600">Category + Location + Time</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
