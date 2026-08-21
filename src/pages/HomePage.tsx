import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsPanel } from '../components/home/StatsPanel';
import { JourneySection } from '../components/home/JourneySection';
import { MatchingSection } from '../components/home/MatchingSection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-hero-atmosphere flex flex-col justify-between overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area: Hero, Stats, Journey & Matching Sections */}
      <main className="flex-1 flex flex-col justify-center">
        <HeroSection />
        <StatsPanel />
        <JourneySection />
        <MatchingSection />
      </main>

    </div>
  );
};
