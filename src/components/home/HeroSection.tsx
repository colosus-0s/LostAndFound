import React from 'react';
import { Shield } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { CategoryPills } from './CategoryPills';
import { NetworkVisualization } from './NetworkVisualization';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-6 md:pt-10 pb-4">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Search */}
          <div className="lg:col-span-6 flex flex-col space-y-6 z-10">
            
            {/* Eyebrow Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                <Shield className="w-3.5 h-3.5 text-violet-400" />
                <span>SMART. SECURE. COMMUNITY DRIVEN.</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.1] tracking-tight font-sans">
                Reuniting what <br />
                matters.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.1] tracking-tight font-sans text-gradient-hero">
                restoring peace of mind.
              </h1>
            </div>

            {/* Description Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              An intelligent Lost & Found platform that connects people, matches items, verifies ownership, and brings everything back where it belongs.
            </p>

            {/* Search Bar Component */}
            <div className="pt-2">
              <SearchBar />
            </div>

            {/* Trending Categories Pills */}
            <CategoryPills />

          </div>

          {/* Right Column: Orbital Network & Central Match Card */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end z-10 pt-6 lg:pt-0">
            <NetworkVisualization />
          </div>

        </div>
      </div>
    </section>
  );
};
