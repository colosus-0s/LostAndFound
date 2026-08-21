import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsPanel } from '../components/home/StatsPanel';
import { JourneySection } from '../components/home/JourneySection';
import { MatchingSection } from '../components/home/MatchingSection';
import { VerificationSection } from '../components/home/VerificationSection';
import { RecoverySection } from '../components/home/RecoverySection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#111318] flex flex-col justify-between overflow-hidden">
      
      {/* Main Narrative Sequence: Hero -> Stats -> Journey -> Matching -> Verification -> Recovery */}
      <main className="flex-1 flex flex-col justify-center">
        <HeroSection />
        <StatsPanel />
        <JourneySection />
        <MatchingSection />
        <VerificationSection />
        <RecoverySection />
      </main>

    </div>
  );
};
