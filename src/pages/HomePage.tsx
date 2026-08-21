import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { QuickActions } from '../components/home/QuickActions';
import { RecentlyReported } from '../components/home/RecentlyReported';
import { JourneySection } from '../components/home/JourneySection';
import { MatchingSection } from '../components/home/MatchingSection';
import { VerificationSection } from '../components/home/VerificationSection';
import { RecoverySection } from '../components/home/RecoverySection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#111318] flex flex-col justify-between overflow-hidden">
      
      {/* Product Narrative Sequence:
          1. Understand (Hero + Search + Twin Report CTAs)
          2. Quick Actions (Report Lost / Report Found / Browse / Sign In)
          3. Recently Reported (Real Community Reports Feed)
          4. How the System Helps (From Report to Recovery)
          5. Intelligent Signal Matching
          6. Ownership Verification & Trust
          7. Final Action & Recovery Payoff
      */}
      <main className="flex-1 flex flex-col justify-center">
        <HeroSection />
        <QuickActions />
        <RecentlyReported />
        <JourneySection />
        <MatchingSection />
        <VerificationSection />
        <RecoverySection />
      </main>

    </div>
  );
};
