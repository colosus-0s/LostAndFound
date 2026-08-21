import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { MockMatchData } from '../../data/mockMatches';
import { MatchLostCard } from './MatchLostCard';
import { MatchingCore } from './MatchingCore';
import { MatchCandidateCard } from './MatchCandidateCard';

gsap.registerPlugin(ScrollTrigger);

export const MatchingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const lostCardRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const statusBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const surfaceEl = surfaceRef.current;
    const sectionEl = sectionRef.current;

    if (!sectionEl || !surfaceEl) return;

    // Failsafe: Ensure everything is fully visible by default
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header entrance (Safe fromTo)
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        );
      }

      // 2. Safe Master Narrative Timeline (Parent surfaceRef is NEVER hidden!)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: surfaceEl,
          start: 'top 80%',
          toggleActions: 'play none none none', // Never reverses to opacity 0 on scroll!
        },
        defaults: { ease: 'power3.out' },
      });

      // Step 1: Lost Card Subtle Entrance
      if (lostCardRef.current) {
        tl.fromTo(
          lostCardRef.current,
          { x: -15, opacity: 0.3 },
          { x: 0, opacity: 1, duration: 0.5 },
        );
      }

      // Step 2: Signal Nodes Sequential Highlight
      const signalNodes = surfaceEl.querySelectorAll('.js-signal-node');
      if (signalNodes.length > 0) {
        tl.fromTo(
          signalNodes,
          { opacity: 0.4, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.4,
            ease: 'back.out(1.4)',
          },
          '-=0.2',
        );
      }

      // Step 3: Central Engine Core Glow
      const coreBadge = surfaceEl.querySelector('.js-core-badge');
      const coreCaption = surfaceEl.querySelector('.js-core-caption');
      if (coreBadge) {
        tl.fromTo(
          coreBadge,
          { scale: 0.9, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' },
          '-=0.2',
        );
      }
      if (coreCaption) {
        tl.to(
          coreCaption,
          { color: '#A78BFA', borderColor: 'rgba(139,92,246,0.8)', duration: 0.3 },
          '-=0.2',
        );
      }

      // Step 4: Candidate Cards Sequential Reveal
      const candidateCards = surfaceEl.querySelectorAll('.js-candidate-card');
      if (candidateCards.length > 0) {
        tl.fromTo(
          candidateCards,
          { x: 15, opacity: 0.3 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
          '-=0.2',
        );
      }

      // Step 5: Match Scores Count-up (0% -> Target Scores)
      const matchScoreElements = surfaceEl.querySelectorAll('.js-match-score');
      matchScoreElements.forEach((el) => {
        const targetScore = parseInt(el.getAttribute('data-target-score') || '0', 10);
        const scoreObj = { val: 0 };

        tl.to(
          scoreObj,
          {
            val: targetScore,
            duration: 0.7,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = `${Math.round(scoreObj.val)}%`;
            },
          },
          '-=0.4',
        );
      });

      // Step 6: Highlight Primary 92% Candidate
      const primaryCandidate = surfaceEl.querySelector('.js-primary-candidate');
      if (primaryCandidate) {
        tl.to(
          primaryCandidate,
          {
            boxShadow: '0 0 35px rgba(139,92,246,0.45)',
            borderColor: 'rgba(139,92,246,0.9)',
            duration: 0.4,
          },
          '-=0.2',
        );
      }

      // Step 7: POTENTIAL MATCH FOUND Status Badge Glow
      if (statusBadgeRef.current) {
        tl.to(
          statusBadgeRef.current,
          { opacity: 1, scale: 1, duration: 0.3 },
          '-=0.2',
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-28 overflow-hidden bg-[#04060A]">
      
      {/* Visual Continuity Gradient Line from Section 2 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Atmospheric Background Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/5 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>THE SYSTEM CONNECTS THE DOTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Let the system connect the dots.
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Every report carries clues. Location, time, category, description, and details come together to surface the connections that matter.
          </p>

        </div>

        {/* Large Main Matching Surface (Always 100% visible in baseline CSS) */}
        <div
          ref={surfaceRef}
          className="max-w-[1200px] mx-auto bg-[#0A0D18]/90 backdrop-blur-xl border border-indigo-950/80 rounded-3xl p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.6)] opacity-100 visible"
        >
          {/* Top Status Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-indigo-950/80 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-slate-200">MATCHING ENGINE ACTIVE</span>
            </div>
            <div
              ref={statusBadgeRef}
              className="flex items-center gap-2 text-violet-300 bg-violet-950/60 px-3.5 py-1 rounded-full border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-500 opacity-100"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>POTENTIAL MATCH FOUND</span>
            </div>
          </div>

          {/* 3-Column Matching Visualization Grid */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-6">
            
            {/* LEFT: Lost Item Card */}
            <div className="w-full lg:w-[320px] shrink-0 flex items-center">
              <MatchLostCard cardRef={lostCardRef} item={MockMatchData.LOST_ITEM} />
            </div>

            {/* CENTER: Smart Match Core & Signal Metadata Nodes */}
            <MatchingCore coreRef={coreRef} signals={MockMatchData.SIGNALS} />

            {/* RIGHT: Candidate Found Matches Stack */}
            <div className="w-full lg:w-[360px] shrink-0 flex flex-col justify-center space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-1">
                CANDIDATE FOUND ITEMS
              </span>
              {MockMatchData.CANDIDATES.map((cand) => (
                <MatchCandidateCard key={cand.id} candidate={cand} />
              ))}
            </div>

          </div>
        </div>

        {/* Subtle Supporting Statement */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            Matching doesn't rely on one clue. It connects the details.
          </p>
        </div>

      </div>
    </section>
  );
};
