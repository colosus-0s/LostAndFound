import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass } from 'lucide-react';
import { JourneyOption } from './JourneyOption';
import { JourneyConnection } from './JourneyConnection';

gsap.registerPlugin(ScrollTrigger);

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header fade in & slide up
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 2. Left & Right Cards stagger entry
      if (leftCardRef.current && rightCardRef.current) {
        gsap.from([leftCardRef.current, rightCardRef.current], {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-28 overflow-hidden bg-[#04060A]">
      
      {/* Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-rose-600/5 via-violet-600/10 to-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 md:mb-20 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>START THE JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Every recovery starts with a report.
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Whether something disappeared from your pocket or you picked up something that isn't yours, the first step is simple. Tell us what happened, and we'll help connect the dots.
          </p>

        </div>

        {/* Interactive Experience Grid (Left Option — Connection Bridge — Right Option) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4 max-w-6xl mx-auto">
          
          {/* LEFT EXPERIENCE: LOST SOMETHING? */}
          <div ref={leftCardRef} className="flex-1 flex">
            <JourneyOption
              type="lost"
              badgeText="LOST REPORT"
              itemPreviewTitle="iPhone / Wallet / Backpack"
              location="Library — Study Area"
              heading="LOST SOMETHING?"
              description="Can't find something you own? Report it and let the platform help connect your report with potential matches."
              ctaText="Report Lost Item"
              ctaLink="/report?type=lost"
            />
          </div>

          {/* CENTER CONNECTION BRIDGE */}
          <JourneyConnection />

          {/* RIGHT EXPERIENCE: FOUND SOMETHING? */}
          <div ref={rightCardRef} className="flex-1 flex">
            <JourneyOption
              type="found"
              badgeText="FOUND REPORT"
              itemPreviewTitle="Black Leather Wallet"
              location="Student Center Cafeteria"
              heading="FOUND SOMETHING?"
              description="Found something that belongs to someone else? Report it and help get it back to its rightful owner."
              ctaText="Report Found Item"
              ctaLink="/report?type=found"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
