import React from 'react';
import { SearchBar } from './SearchBar';
import { TrendingCategories } from './TrendingCategories';
import { NetworkVisualization } from './NetworkVisualization';
import { StatsStrip } from './StatsStrip';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-[#06080E] overflow-hidden">
      {/* Deep Atmospheric Background Glows matching reference specification */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#6366F1]/18 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-0 w-[650px] h-[650px] bg-[#22D3EE]/12 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#A855F7]/12 blur-[150px] pointer-events-none rounded-full" />

      {/* Star / Particle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.7) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06080E] via-transparent to-[#06080E] pointer-events-none" />

      {/* Main Centered Content Container for Large Monitors */}
      <div className="max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content (~50% width) */}
          <div className="lg:col-span-7 space-y-7 hero-text-container text-left">
            {/* Eyebrow Label */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#A855F7] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>_SMART. SECURE. COMMUNITY DRIVEN.</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-4xl sm:text-5xl lg:text-[3.85rem] font-extrabold text-white tracking-tight leading-[1.08]">
              Reuniting what matters. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] via-[#A855F7] to-[#22D3EE]">
                restoring peace of mind.
              </span>
            </h1>

            {/* Description Text */}
            <p className="hero-description text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              An intelligent Lost & Found platform that connects people, matches items, verifies ownership, and brings everything back where it belongs.
            </p>

            {/* Search Input Bar */}
            <SearchBar />

            {/* Trending Categories Pills */}
            <TrendingCategories />
          </div>

          {/* Right Column Visual (~50% width) */}
          <div className="lg:col-span-5 flex items-center justify-center hero-visual-container">
            <NetworkVisualization />
          </div>
        </div>

        {/* Statistics Strip */}
        <StatsStrip />
      </div>
    </section>
  );
};
