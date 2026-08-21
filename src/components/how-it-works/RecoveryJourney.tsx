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
    badgeBg: 'bg-rose-100 border-rose-200 text-rose-800',
  },
  {
    step: '02',
    title: 'Tell us what happened.',
    subtitle: 'REPORT',
    desc: 'Submit key identifying information: category, brand, color, location zone, date window, and photos. Guided reporting takes under 2 minutes.',
    badgeBg: 'bg-blue-100 border-blue-200 text-blue-800',
    hasCta: true,
  },
  {
    step: '03',
    title: 'The directory brings everything together.',
    subtitle: 'DISCOVER',
    desc: 'All active community reports are organized into a searchable directory. Filter by status, campus building, or date to explore matches.',
    badgeBg: 'bg-teal-100 border-teal-200 text-teal-800',
    miniBrowsePreview: true,
  },
  {
    step: '04',
    title: 'The system connects the dots.',
    subtitle: 'MATCH',
    desc: 'Signals across location, category, time windows, and descriptions are evaluated to surface potential match connections automatically.',
    badgeBg: 'bg-indigo-100 border-indigo-200 text-indigo-800',
    matchSignal: true,
  },
  {
    step: '05',
    title: 'A match isn\'t proof.',
    subtitle: 'VERIFY',
    desc: 'Potential matches surface possibilities, but ownership must be verified privately before any item changes hands. Trust comes first.',
    badgeBg: 'bg-purple-100 border-purple-200 text-purple-800',
    trustBox: true,
  },
  {
    step: '06',
    title: 'Make your claim.',
    subtitle: 'CLAIM',
    desc: 'The potential owner submits private proof—such as serial numbers, lock codes, or custom distinguishing marks—to confirm ownership.',
    badgeBg: 'bg-blue-100 border-blue-200 text-blue-800',
  },
  {
    step: '07',
    title: 'Back where it belongs.',
    subtitle: 'RECOVER',
    desc: 'Once verification is approved by moderators, a secure handover is arranged at a designated campus security desk. The journey completes.',
    badgeBg: 'bg-emerald-100 border-emerald-200 text-emerald-800',
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
          { y: 10, opacity: 0.85 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerEl,
              start: 'top 80%',
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
    <section ref={containerRef} className="relative w-full py-16 md:py-24 overflow-hidden bg-[#F8F9FA]">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>THE RECOVERY JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111318] tracking-tight font-sans">
            One item. Seven connected steps.
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
            Every recovery follows an intentional, transparent path from report to return.
          </p>
        </div>

        {/* Desktop Connected SVG Timeline */}
        <div className="relative mb-16 hidden lg:block">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 1200 40" fill="none">
            <path d="M 60 20 L 1140 20" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="6 6" />
            <path
              ref={pathRef}
              d="M 60 20 L 1140 20"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray="800"
              strokeDashoffset="0"
            />
          </svg>
        </div>

        {/* 7 Connected Steps Stack / Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {STEPS_DATA.map((item) => (
            <div
              key={item.step}
              className={`js-journey-step ${
                item.isFinal
                  ? 'bg-emerald-50/80 border-2 border-emerald-500 shadow-md'
                  : 'bg-white border border-gray-200 shadow-subtle'
              } rounded-3xl p-6 sm:p-8 space-y-4 transition-all duration-300 opacity-100 visible`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-black">
                    {item.step}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${item.badgeBg}`}>
                    {item.subtitle}
                  </span>
                </div>
                {item.isFinal && (
                  <span className="flex items-center gap-1 text-emerald-700 text-xs font-extrabold tracking-wider uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>RETURN COMPLETE</span>
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111318] font-sans tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Step 02 CTA */}
              {item.hasCta && (
                <div className="pt-2">
                  <Link
                    to="/report"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>Report an Item Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Step 03 Mini Browse Preview */}
              {item.miniBrowsePreview && (
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[#111318] font-extrabold block">iPhone 14 Pro (Space Black)</span>
                      <span className="text-gray-500 text-[11px]">LOST • Library Study Area</span>
                    </div>
                  </div>
                  <Link
                    to="/browse"
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-blue-600 text-[11px] font-bold hover:bg-gray-100 transition-all shrink-0"
                  >
                    Explore Directory →
                  </Link>
                </div>
              )}

              {/* Step 04 Match Signal Box */}
              {item.matchSignal && (
                <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-indigo-900 font-bold">
                    <Tag className="w-4 h-4 text-indigo-600" />
                    <span>Signals Matched: Category + Location + Time</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-black text-xs">
                    92% Match
                  </span>
                </div>
              )}

              {/* Step 05 Trust Box */}
              {item.trustBox && (
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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
