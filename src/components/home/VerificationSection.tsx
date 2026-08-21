import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Lock, CheckCircle2, MapPin, Sparkles, UserCheck, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VERIFICATION_CHECKS = [
  { id: 'check-1', label: 'Item details & category matched' },
  { id: 'check-2', label: 'Private ownership details confirmed' },
  { id: 'check-3', label: 'Serial / security proof reviewed' },
  { id: 'check-4', label: 'Claim verification approved' },
];

export const VerificationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const surfaceEl = surfaceRef.current;
    const sectionEl = sectionRef.current;

    if (!sectionEl || !surfaceEl || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
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

      // 2. Safe Verification Surface Animation (Surface remains 100% visible)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: surfaceEl,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      // Step 1: Left Potential Match Entrance
      const matchCard = surfaceEl.querySelector('.js-verif-match');
      if (matchCard) {
        tl.fromTo(matchCard, { x: -15, opacity: 0.4 }, { x: 0, opacity: 1, duration: 0.5 });
      }

      // Step 2: Center Shield Core Glow
      const shieldCore = surfaceEl.querySelector('.js-verif-shield');
      if (shieldCore) {
        tl.fromTo(shieldCore, { scale: 0.9, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.2');
      }

      // Step 3: Verification Checks Stagger Illuminate
      const checkItems = surfaceEl.querySelectorAll('.js-verif-check');
      if (checkItems.length > 0) {
        tl.fromTo(
          checkItems,
          { opacity: 0.3, x: -10 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
          '-=0.2',
        );
      }

      // Step 4: Right Verified Result Card Highlights (Green Glow)
      const verifiedCard = surfaceEl.querySelector('.js-verif-result');
      if (verifiedCard) {
        tl.to(
          verifiedCard,
          {
            boxShadow: '0 0 35px rgba(16,185,129,0.35)',
            borderColor: 'rgba(16,185,129,0.8)',
            duration: 0.5,
          },
          '-=0.2',
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-28 overflow-hidden bg-[#04060A]">
      
      {/* Visual Continuity Gradient Line from Section 3 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Background Atmosphere Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-emerald-600/10 via-violet-600/10 to-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <Lock className="w-3.5 h-3.5 text-violet-400" />
            <span>TRUST BEFORE TRANSFER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Before anything changes hands.
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            A potential match is only the beginning. Ownership is verified privately before an item can be claimed and returned.
          </p>

        </div>

        {/* Main Verification Surface (1100px-1200px on desktop) */}
        <div
          ref={surfaceRef}
          className="max-w-[1200px] mx-auto bg-[#0A0D18]/90 backdrop-blur-xl border border-indigo-950/80 rounded-3xl p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.6)] opacity-100 visible"
        >
          {/* Surface Top Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-indigo-950/80 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200">PRIVACY & OWNERSHIP PROTOCOL</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-emerald-400 bg-emerald-950/40 px-3.5 py-1 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENCRYPTED CLAIM PROCESS</span>
            </div>
          </div>

          {/* 3-Part Verification Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT: Potential Match Card (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="js-verif-match w-full bg-[#0B0F1B]/95 border border-violet-500/40 rounded-2xl p-5 shadow-[0_0_20px_rgba(124,58,237,0.2)] space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-violet-600/30 border border-violet-500/40 text-violet-300 text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    <span>POTENTIAL MATCH</span>
                  </span>
                  <span className="text-[10px] font-bold text-violet-400">92% Match</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-white font-extrabold text-lg font-sans">
                    iPhone 14 Pro
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    <span>Library — Study Area</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-indigo-950/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Claim Status:</span>
                  <span className="text-amber-400 font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                    Verification Pending
                  </span>
                </div>

              </div>
            </div>

            {/* CENTER: Private Verification Engine & Checks (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 space-y-4">
              
              {/* Central Shield Icon Core */}
              <div className="js-verif-shield relative flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0A0D18] border border-violet-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.5)] backdrop-blur-md">
                  <Shield className="w-8 h-8 text-violet-400 animate-pulse" />
                </div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-violet-300 mt-2">
                  VERIFYING OWNERSHIP
                </span>
              </div>

              {/* Verification Checklist Signals */}
              <div className="w-full space-y-2">
                {VERIFICATION_CHECKS.map((check) => (
                  <div
                    key={check.id}
                    className="js-verif-check flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0B0F1B]/95 border border-indigo-900/50 text-xs font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{check.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT: Verified Owner Result Card (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="js-verif-result w-full bg-[#0B0F1B]/95 border-2 border-emerald-500/60 rounded-2xl p-5 shadow-[0_0_30px_rgba(16,185,129,0.3)] space-y-4 transition-all duration-500">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    <span>VERIFIED OWNER</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    CONFIRMED
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-white font-extrabold text-lg font-sans">
                    Ownership Confirmed
                  </h4>
                  <p className="text-slate-300 text-xs font-normal leading-relaxed">
                    Security details and serial proof matched successfully with the claimant.
                  </p>
                </div>

                <div className="pt-3 border-t border-indigo-950/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Next Step:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/40">
                    Ready for Handover →
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Subtle Supporting Explanation */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            Private verification prevents false claims and ensures belongings reach their true owner.
          </p>
        </div>

      </div>
    </section>
  );
};
