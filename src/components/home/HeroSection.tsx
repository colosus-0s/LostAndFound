import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container, Button, Input, Badge } from '../ui';
import { StatisticsStrip } from './StatisticsStrip';
import { ROUTE_PATHS } from '../../routes';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingCategories = [
    'Phones',
    'Wallets',
    'Backpacks',
    'Watches',
    'Laptops',
    'Earbuds',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?q=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = ROUTE_PATHS.PUBLIC.BROWSE;
    }
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-[#0a0a0c]">
      {/* Global Atmospheric Background Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-indigo-600/12 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Background Micro Network Particle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <Container size="xl" className="relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, Search, Trending */}
          <div className="lg:col-span-7 space-y-8 hero-text-container">
            {/* Eyebrow Label */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>SMART. SECURE. COMMUNITY DRIVEN.</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Reuniting what matters. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                restoring peace of mind.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              An intelligent Lost & Found platform that connects people, matches items, verifies ownership, and brings everything back where it belongs.
            </p>

            {/* Hero Search Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="hero-search bg-[#121318] p-2 sm:p-2.5 rounded-2xl border border-white/[0.12] shadow-2xl shadow-black/60 flex items-center gap-2 focus-within:border-indigo-500/50 transition-all max-w-xl"
            >
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search for lost or found items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-5 h-5 text-gray-400" />}
                  className="bg-transparent border-0 focus:ring-0 text-sm sm:text-base text-white placeholder:text-gray-500"
                />
              </div>
              <Button type="submit" variant="primary" size="md" className="shrink-0 px-5 shadow-lg shadow-indigo-600/30">
                Search
              </Button>
            </form>

            {/* Trending Category Pills */}
            <div className="hero-trending flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Trending:</span>
              {trendingCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    window.location.href = `${ROUTE_PATHS.PUBLIC.BROWSE}?category=${cat.toLowerCase()}`;
                  }}
                  className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-[#121318] hover:bg-[#1a1c23] border border-white/[0.08] hover:border-indigo-500/30 rounded-full transition-all cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Connection / Recovery Visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] hero-visual-container">
            {/* Ambient Halo Behind Visual */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-indigo-500/10 blur-[90px] pointer-events-none" />

            {/* Network Visualization Container */}
            <div className="relative w-full max-w-md aspect-[4/4.2] rounded-3xl bg-[#121318]/90 backdrop-blur-xl border border-white/[0.12] p-6 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
              {/* Thin SVG Living Connection Network Lines & Orbit */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 420" fill="none">
                <circle cx="200" cy="210" r="140" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.25" />
                <path d="M 60 70 Q 200 130 200 210 T 340 350" stroke="url(#net-gradient-1)" strokeWidth="1.5" strokeDasharray="6 6" className="network-path-1" />
                <path d="M 340 70 Q 200 130 200 210 T 60 350" stroke="url(#net-gradient-2)" strokeWidth="1.5" className="network-path-2" />

                {/* Pulsing Orbit Nodes */}
                <circle cx="60" cy="70" r="4" fill="#6366f1" />
                <circle cx="340" cy="70" r="4" fill="#8b5cf6" />
                <circle cx="340" cy="350" r="4" fill="#06b6d4" />
                <circle cx="60" cy="350" r="4" fill="#22c55e" />

                <defs>
                  <linearGradient id="net-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="net-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Journey Step 1: Reported Node (Top Bar) */}
              <div className="flex items-center justify-between z-10 bg-[#0a0a0c]/90 backdrop-blur-md p-3 rounded-2xl border border-indigo-500/20 shadow-md transform transition-transform group-hover:translate-y-[-2px]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-200">1. Reported</span>
                </div>
                <Badge variant="lost" size="sm">LOST ITEM</Badge>
              </div>

              {/* Central Focal Focal Item Card */}
              <div className="z-10 my-4 bg-[#1a1c23]/95 backdrop-blur-2xl p-5 rounded-2xl border border-white/[0.12] shadow-xl shadow-black/70 space-y-3 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-indigo-500/40">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">iPhone 14 Pro</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-indigo-400" /> Library — Study Area
                    </p>
                  </div>
                  <Badge variant="matched" size="sm" dot>
                    92% Match
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-white/[0.08]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-500" /> May 20, 2026
                  </span>
                  <span className="font-semibold text-purple-400">Smart Match</span>
                </div>

                <div className="pt-1">
                  <a href={`${ROUTE_PATHS.PUBLIC.BROWSE}/1`}>
                    <Button variant="primary" size="sm" fullWidth rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      View Match
                    </Button>
                  </a>
                </div>
              </div>

              {/* Journey Step 3 & 4: Verified & Returned Nodes (Bottom Bar) */}
              <div className="flex items-center justify-between z-10 bg-[#0a0a0c]/90 backdrop-blur-md p-3 rounded-2xl border border-emerald-500/20 shadow-md transform transition-transform group-hover:translate-y-[2px]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-gray-200">Verified Proof</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Returned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Strip Component */}
        <StatisticsStrip />
      </Container>
    </section>
  );
};
