import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VERIFY_STEPS = [
  {
    icon: SparklesIcon,
    title: '1. Potential Match Surface',
    desc: 'Signal matching suggests potential candidate connections based on report metadata.',
  },
  {
    icon: FileText,
    title: '2. Ownership Questions',
    desc: 'The claimant provides private verification answers (e.g. lock code, unique scuffs, serial numbers).',
  },
  {
    icon: Lock,
    title: '3. Private Moderator Review',
    desc: 'Campus administrators review claims confidentially without exposing personal information.',
  },
  {
    icon: CheckCircle2,
    title: '4. Verified & Returned',
    desc: 'Upon approval, a secure handover is arranged at a designated campus security desk.',
  },
];

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

export const VerificationSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold tracking-wide uppercase inline-block">
            OWNERSHIP VERIFICATION
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111318] tracking-tight font-sans">
            A match isn't proof.
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Potential matches surface possibilities. Ownership still needs to be verified privately before anything changes hands.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {VERIFY_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            const isFinal = idx === 3;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border space-y-4 flex flex-col justify-between ${
                  isFinal
                    ? 'bg-emerald-50/80 border-2 border-emerald-500 shadow-md'
                    : 'bg-white border-gray-200 shadow-subtle'
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isFinal
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-50 border border-blue-100 text-blue-600'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-extrabold text-[#111318] text-base font-sans">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {isFinal && (
                  <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% Verified Handover</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Learn more about how verification works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
