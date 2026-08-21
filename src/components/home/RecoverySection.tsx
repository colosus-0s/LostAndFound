import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, PackageCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const RECOVERY_MILESTONES = [
  {
    step: '01',
    title: 'MATCHED',
    desc: 'Potential match identified by signals & location.',
    icon: Sparkles,
    badgeBg: 'bg-violet-950/50 border-violet-500/40 text-violet-300',
  },
  {
    step: '02',
    title: 'VERIFIED',
    desc: 'Ownership confirmed privately and securely.',
    icon: ShieldCheck,
    badgeBg: 'bg-indigo-950/50 border-indigo-500/40 text-indigo-300',
  },
  {
    step: '03',
    title: 'RECOVERED',
    desc: 'Item returned to its rightful owner.',
    icon: PackageCheck,
    badgeBg: 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400',
  },
];

export const RecoverySection: React.FC = () => {
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

      // 2. Safe Master Recovery Timeline (Parent surface remains 100% visible)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: surfaceEl,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      // Step 1: Milestones entrance
      const milestones = surfaceEl.querySelectorAll('.js-recovery-node');
      if (milestones.length > 0) {
        tl.fromTo(
          milestones,
          { y: 15, opacity: 0.4 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
        );
      }

      // Step 2: SVG Path Stroke Draw
      const pathLine = surfaceEl.querySelector('.js-recovery-path');
      if (pathLine) {
        tl.fromTo(
          pathLine,
          { strokeDashoffset: 400 },
          { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.3',
        );
      }

      // Step 3: Highlight Final Recovered Node & Item Card (Emerald Glow)
      const finalCard = surfaceEl.querySelector('.js-recovery-final');
      if (finalCard) {
        tl.to(
          finalCard,
          {
            boxShadow: '0 0 40px rgba(16,185,129,0.35)',
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
    <section ref={sectionRef} className="relative w-full py-20 md:py-32 overflow-hidden bg-[#04060A]">
      
      {/* Visual Continuity Gradient Line from Section 4 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* Atmospheric Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-emerald-600/10 via-violet-600/10 to-indigo-600/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE JOURNEY COMPLETE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            Back where it belongs.
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            What started as a lost item ends with a successful return. Every report, match, and verification step exists to make that moment possible.
          </p>

        </div>

        {/* Main Recovery Surface (~1200px on desktop) */}
        <div
          ref={surfaceRef}
          className="max-w-[1200px] mx-auto bg-[#0A0D18]/90 backdrop-blur-xl border border-indigo-950/80 rounded-3xl p-6 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.6)] opacity-100 visible"
        >
          
          {/* SVG Connection Path Overlay (Desktop) */}
          <div className="relative mb-12 hidden lg:block">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 1000 40" fill="none">
              <path
                d="M 160 20 L 500 20 L 840 20"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                className="js-recovery-path"
                d="M 160 20 L 500 20 L 840 20"
                stroke="url(#recovery-gradient)"
                strokeWidth="2.5"
                strokeDasharray="400"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="recovery-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3 Milestone Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
            
            {RECOVERY_MILESTONES.map((item, idx) => {
              const IconComp = item.icon;
              const isFinal = idx === 2;

              return (
                <div
                  key={item.step}
                  className={`js-recovery-node ${
                    isFinal
                      ? 'js-recovery-final bg-[#0B0F1B]/95 border-2 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.25)]'
                      : 'bg-[#0B0F1B]/80 border border-indigo-950/80'
                  } rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all duration-500`}
                >
                  {/* Top Node Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-slate-500 uppercase">
                      {item.step}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-widest uppercase border flex items-center gap-1.5 ${item.badgeBg}`}>
                      <IconComp className="w-3 h-3" />
                      <span>{item.title}</span>
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="space-y-2">
                    <h4 className="text-white font-extrabold text-lg tracking-tight font-sans">
                      {item.title === 'MATCHED' && 'Signal Match'}
                      {item.title === 'VERIFIED' && 'Ownership Verified'}
                      {item.title === 'RECOVERED' && 'Item Returned'}
                    </h4>
                    <p className="text-slate-300 text-xs font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Milestone Status Pill */}
                  <div className="pt-4 border-t border-indigo-950/80 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400">Status:</span>
                    <span className={isFinal ? 'text-emerald-400 flex items-center gap-1 font-bold' : 'text-slate-300'}>
                      {isFinal && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{isFinal ? 'RETURNED' : 'COMPLETE'}</span>
                    </span>
                  </div>

                </div>
              );
            })}

          </div>

          {/* Connected Recovery Highlight Banner */}
          <div className="bg-[#080B14]/90 border border-emerald-500/30 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-0.5 text-center sm:text-left">
                <h5 className="text-white font-bold text-sm md:text-base">
                  iPhone 14 Pro — Return Completed
                </h5>
                <p className="text-slate-300 text-xs font-medium">
                  Verified owner received item on campus. Report successfully closed.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold tracking-wider uppercase shrink-0">
              SUCCESSFUL RETURN
            </span>
          </div>

        </div>

        {/* Final Restrained CTA Area */}
        <div className="mt-14 max-w-xl mx-auto text-center space-y-6">
          <p className="text-slate-300 text-sm md:text-base font-normal">
            Have you lost something, or found an item that belongs to someone else?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/report"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              <span>Report an Item</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/browse"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B0F1B] border border-indigo-900/60 text-slate-200 font-bold text-sm hover:text-white hover:border-violet-500/50 transition-all"
            >
              <span>Browse Lost & Found</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
