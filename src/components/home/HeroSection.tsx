import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, ChevronRight, Shield, RefreshCw } from 'lucide-react';
import { Container, Button, Input, Badge } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'Phone',
    'Wallet',
    'Backpack',
    'Watch',
    'Laptop',
    'Earbuds',
  ];

  const stats = [
    { value: '2,450+', label: 'Items Recovered', icon: CheckCircle2, color: 'text-indigo-400' },
    { value: '1,890+', label: 'Happy Reunions', icon: Sparkles, color: 'text-cyan-400' },
    { value: '75+', label: 'Active Campuses', icon: Shield, color: 'text-purple-400' },
    { value: '98%', label: 'Success Rate', icon: RefreshCw, color: 'text-emerald-400' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`;
    } else {
      window.location.href = ROUTE_PATHS.PUBLIC.BROWSE;
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-[#0a0a0c] via-[#0e0f14] to-[#0a0a0c]">
      {/* Background Radial Glow & Mesh Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Search Experience */}
          <div className="lg:col-span-7 space-y-8 text-left hero-text-container">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Smart. Secure. Reunite.</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Reuniting what matters,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                restoring peace of mind.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              The intelligent Lost & Found platform that connects people, matches items, verifies ownership, and brings everything back where it belongs.
            </p>

            {/* Prominent Search Bar Experience */}
            <form onSubmit={handleSearchSubmit} className="bg-[#121318] p-2 sm:p-3 rounded-2xl border border-white/[0.12] shadow-2xl shadow-black/50 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search for lost or found items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-5 h-5 text-gray-400" />}
                  className="bg-transparent border-0 focus:ring-0 text-base"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#1a1c23] text-gray-300 text-sm font-medium rounded-xl border border-white/[0.08] px-3.5 py-2.5 outline-none focus:border-indigo-500/50 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="phone">Phones</option>
                  <option value="wallet">Wallets</option>
                  <option value="bag">Backpacks & Bags</option>
                  <option value="watch">Watches</option>
                  <option value="laptop">Laptops</option>
                  <option value="earbuds">Earbuds</option>
                </select>

                <Button type="submit" variant="primary" size="lg" className="shrink-0">
                  Search
                </Button>
              </div>
            </form>

            {/* Quick Category Shortcuts */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Trending:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.toLowerCase());
                    window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?category=${cat.toLowerCase()}`;
                  }}
                  className="px-3 py-1 text-xs font-medium text-gray-300 hover:text-white bg-[#121318] hover:bg-[#1a1c23] border border-white/[0.08] rounded-lg transition-colors cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Platform Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#121318]/60 p-3.5 rounded-xl border border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">{item.value}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-400">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Signature Connection Visual Concept */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] hero-visual-container">
            {/* Futuristic Animated Connection Orbital Container */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-[#121318]/90 to-[#1a1c23]/90 border border-white/[0.12] p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* SVG Animated Orbital Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 400" fill="none">
                <path d="M 50 200 Q 200 50 350 200 T 50 200" stroke="url(#hero-gradient-1)" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 200 50 L 200 350" stroke="url(#hero-gradient-2)" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="100" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" />
                <defs>
                  <linearGradient id="hero-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="hero-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Top Card Badge: Lost Item Node */}
              <div className="flex items-center justify-between z-10 bg-[#0a0a0c]/80 backdrop-blur-md p-3.5 rounded-2xl border border-red-500/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <span className="text-red-400 text-xs font-bold">LOST</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">iPhone 14 Pro</h4>
                    <p className="text-xs text-gray-400">Library — Study Area</p>
                  </div>
                </div>
                <Badge variant="lost" size="sm" dot>Reported</Badge>
              </div>

              {/* Center Orbital Node: Match Confidence */}
              <div className="self-center z-10 my-6 bg-gradient-to-tr from-indigo-900/80 to-purple-900/80 backdrop-blur-xl p-5 rounded-3xl border border-indigo-500/40 shadow-2xl shadow-indigo-500/20 text-center max-w-[240px] transform transition-transform hover:scale-105">
                <div className="inline-flex p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-2">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-2xl font-extrabold text-white">92% Match</h4>
                <p className="text-xs text-indigo-200 mt-1">Smart Deterministic Algorithm</p>
                <div className="mt-3">
                  <Button variant="primary" size="sm" fullWidth rightIcon={<ChevronRight className="w-3.5 h-3.5" />}>
                    View Match
                  </Button>
                </div>
              </div>

              {/* Bottom Card Badge: Found / Recovered Node */}
              <div className="flex items-center justify-between z-10 bg-[#0a0a0c]/80 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-500/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Verified & Returned</h4>
                    <p className="text-xs text-gray-400">Campus Staff Handover</p>
                  </div>
                </div>
                <Badge variant="verified" size="sm" dot>Recovered</Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
