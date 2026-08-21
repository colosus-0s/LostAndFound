import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, CheckCircle2, Search, ArrowRight, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STEPS_DATA = [
  {
    step: '01',
    title: 'Something went missing. Or something was found.',
    subtitle: 'LOST / FOUND',
    desc: 'Either side can start the recovery process. Reporting a lost item alerts the community, while reporting a found item makes it claimable.',
    badgeBg: 'bg-rose-950/60 border-rose-500/50 text-rose-300',
  },
  {
    step: '02',
    title: 'Tell us what happened.',
    subtitle: 'REPORT',
    desc: 'Submit key identifying information: category, brand, color, location zone, date window, and photos. Guided reporting takes under 2 minutes.',
    badgeBg: 'bg-violet-950/60 border-violet-500/50 text-violet-300',
    hasCta: true,
  },
  {
    step: '03',
    title: 'The directory brings everything together.',
    subtitle: 'DISCOVER',
    desc: 'All active community reports are organized into a searchable directory. Filter by status, campus building, or date to explore matches.',
    badgeBg: 'bg-[#0B0F1B] border-cyan-500/50 text-cyan-300',
    miniBrowsePreview: true,
  },
  {
    step: '04',
    title: 'The system connects the dots.',
    subtitle: 'MATCH',
    desc: 'Signals across location, category, time windows, and descriptions are evaluated to surface potential match connections automatically.',
    badgeBg: 'bg-violet-950/60 border-violet-500/50 text-violet-300',
    matchSignal: true,
  },
  {
    step: '05',
    title: 'A match isn\'t proof.',
    subtitle: 'VERIFY',
    desc: 'Potential matches surface possibilities, but ownership must be verified privately before any item changes hands. Trust comes first.',
    badgeBg: 'bg-indigo-950/60 border-indigo-500/50 text-indigo-300',
    trustBox: true,
  },
  {
    step: '06',
    title: 'Make your claim.',
    subtitle: 'CLAIM',
    desc: 'The potential owner submits private proof—such as serial numbers, lock codes, or custom distinguishing marks—to confirm ownership.',
    badgeBg: 'bg-violet-950/60 border-violet-500/50 text-violet-300',
  },
  {
    step: '07',
    title: 'Back where it belongs.',
    subtitle: 'RECOVER',
    desc: 'Once verification is approved by moderators, a secure handover is arranged at a designated campus security desk. The journey completes.',
    badgeBg: 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400',
    isFinal: true,
  },
];

export const RecoveryJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const containerEl = containerRef.current;
    if (!containerEl || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Stagger step reveals safely (all elements stay 100% visible)
      const stepCards = containerEl.querySelectorAll('.js-journey-step');
      if (stepCards.length > 0) {
        gsap.fromTo(
          stepCards,
          { y: 15, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerEl,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          },
        );
      }

      // 2. Animate SVG Path Stroke Draw
      if (pathRef.current) {
        gsap.fromTo(
          pathRef.current,
          { strokeDashoffset: 800 },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerEl,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-28 overflow-hidden bg-[#04060A]">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>THE RECOVERY JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            One item. Seven connected steps.
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
            Every recovery follows an intentional, transparent path from report to return.
          </p>
        </div>

        {/* Desktop Connected SVG Timeline */}
        <div className="relative mb-16 hidden lg:block">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 1200 40" fill="none">
            <path d="M 60 20 L 1140 20" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" strokeDasharray="6 6" />
            <path
              ref={pathRef}
              d="M 60 20 L 1140 20"
              stroke="url(#journey-line-gradient)"
              strokeWidth="3"
              strokeDasharray="800"
              strokeDashoffset="0"
            />
            <defs>
              <linearGradient id="journey-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="30%" stopColor="#8B5CF6" />
                <stop offset="60%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 7 Connected Steps Stack / Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {STEPS_DATA.map((item) => (
            <div
              key={item.step}
              className={`js-journey-step ${
                item.isFinal
                  ? 'bg-[#0B0F1B]/95 border-2 border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.3)]'
                  : 'bg-[#0A0D18]/90 border border-indigo-950/80 hover:border-violet-500/40'
              } rounded-3xl p-6 sm:p-8 space-y-4 transition-all duration-300 opacity-100 visible`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-violet-950/60 border border-violet-500/40 text-violet-300 flex items-center justify-center text-xs font-black">
                    {item.step}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${item.badgeBg}`}>
                    {item.subtitle}
                  </span>
                </div>
                {item.isFinal && (
                  <span className="flex items-center gap-1 text-emerald-400 text-xs font-extrabold tracking-wider uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>RETURN COMPLETE</span>
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Step 02 CTA */}
              {item.hasCta && (
                <div className="pt-2">
                  <Link
                    to="/report"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                  >
                    <span>Report an Item Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Step 03 Mini Browse Preview */}
              {item.miniBrowsePreview && (
                <div className="mt-4 bg-[#080B14] border border-indigo-950/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-white font-bold block">iPhone 14 Pro (Space Black)</span>
                      <span className="text-slate-400 text-[11px]">LOST • Library Study Area</span>
                    </div>
                  </div>
                  <Link
                    to="/browse"
                    className="px-3 py-1.5 rounded-lg bg-[#0B0F1B] border border-indigo-900/60 text-cyan-300 text-[11px] font-bold hover:text-white transition-all shrink-0"
                  >
                    Explore Directory →
                  </Link>
                </div>
              )}

              {/* Step 04 Match Signal Box */}
              {item.matchSignal && (
                <div className="mt-4 bg-[#080B14] border border-violet-500/40 rounded-2xl p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-violet-300 font-bold">
                    <Tag className="w-4 h-4 text-violet-400" />
                    <span>Signals Matched: Category + Location + Time</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-violet-600/30 border border-violet-500/50 text-violet-300 font-black text-xs">
                    92% Match
                  </span>
                </div>
              )}

              {/* Step 05 Trust Box */}
              {item.trustBox && (
                <div className="mt-4 bg-[#080B14] border border-indigo-950/80 rounded-2xl p-4 flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Matching signals trigger private proof verification. Items are never handed over based solely on automated matches.</span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
