import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Search, PackageCheck } from 'lucide-react';

interface JourneyOptionProps {
  type: 'lost' | 'found';
  badgeText: string;
  itemPreviewTitle: string;
  location: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const JourneyOption: React.FC<JourneyOptionProps> = ({
  type,
  badgeText,
  itemPreviewTitle,
  location,
  heading,
  description,
  ctaText,
  ctaLink,
}) => {
  const isLost = type === 'lost';

  return (
    <div
      className={`relative w-full bg-[#0A0D18]/90 backdrop-blur-xl border rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-500 hover:translate-y-[-4px] shadow-[0_10px_35px_rgba(0,0,0,0.5)] group ${
        isLost
          ? 'border-rose-900/30 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]'
          : 'border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
      }`}
    >
      {/* Background Subtle Gradient Corner Glow */}
      <div
        className={`absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isLost ? 'bg-rose-600/10 group-hover:opacity-100' : 'bg-cyan-500/10 group-hover:opacity-100'
        }`}
      />

      <div>
        {/* Floating Mini Report Preview Badge */}
        <div className="w-full bg-[#0B0F1B]/95 border border-indigo-950/80 rounded-2xl p-4 mb-6 relative overflow-hidden shadow-inner flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                isLost
                  ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                  : 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
              }`}
            >
              {isLost ? <Search className="w-5 h-5" /> : <PackageCheck className="w-5 h-5" />}
            </div>
            <div className="flex flex-col">
              <span
                className={`text-[10px] font-extrabold uppercase tracking-widest ${
                  isLost ? 'text-rose-400' : 'text-cyan-400'
                }`}
              >
                {badgeText}
              </span>
              <span className="text-white font-semibold text-sm font-sans tracking-tight">
                {itemPreviewTitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate max-w-[120px] sm:max-w-[150px]">{location}</span>
          </div>
        </div>

        {/* Heading & Copy */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans mb-3">
          {heading}
        </h3>
        <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <Link
          to={ctaLink}
          className={`inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl font-semibold text-sm md:text-base transition-all transform active:scale-95 ${
            isLost
              ? 'bg-gradient-to-r from-violet-600 via-rose-600 to-rose-500 hover:from-violet-500 hover:to-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]'
              : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
