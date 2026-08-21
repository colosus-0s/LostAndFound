import React from 'react';
import { HowItWorksHero } from '../components/how-it-works/HowItWorksHero';
import { RecoveryJourney } from '../components/how-it-works/RecoveryJourney';
import { TrustSection } from '../components/how-it-works/TrustSection';
import { HowItWorksCTA } from '../components/how-it-works/HowItWorksCTA';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111318] relative overflow-hidden">
      <main className="space-y-4">
        <HowItWorksHero />
        <RecoveryJourney />
        <TrustSection />
        <HowItWorksCTA />
      </main>
    </div>
  );
};
