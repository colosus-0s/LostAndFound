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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
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

      // 2. Matching Surface & Cards Sequence
      if (surfaceRef.current) {
        const signalNodes = surfaceRef.current.querySelectorAll('.js-signal-node');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: surfaceRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.from(surfaceRef.current, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
          .from(
            signalNodes,
            {
              scale: 0.85,
              opacity: 0,
              stagger: 0.12,
              duration: 0.5,
              ease: 'back.out(1.5)',
            },
            '-=0.4',
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

        {/* Large Main Matching Surface (1100px-1250px on desktop) */}
        <div
          ref={surfaceRef}
          className="max-w-[1200px] mx-auto bg-[#0A0D18]/90 backdrop-blur-xl border border-indigo-950/80 rounded-3xl p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Top Status Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-indigo-950/80 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-slate-200">MATCHING ENGINE ACTIVE</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-violet-400 bg-violet-950/40 px-3 py-1 rounded-full border border-violet-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>POTENTIAL MATCH FOUND</span>
            </div>
          </div>

          {/* 3-Column Matching Visualization Grid */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-6">
            
            {/* LEFT: Lost Item Card */}
            <div className="w-full lg:w-[320px] shrink-0 flex items-center">
              <MatchLostCard item={MockMatchData.LOST_ITEM} />
            </div>

            {/* CENTER: Smart Match Core & Signal Metadata Nodes */}
            <MatchingCore signals={MockMatchData.SIGNALS} />

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
