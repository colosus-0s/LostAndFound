import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Search, ShieldCheck } from 'lucide-react';

export const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Node Geometry Vector */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg className="w-full max-w-4xl h-64" viewBox="0 0 800 200" fill="none">
          <circle cx="150" cy="100" r="6" fill="#8B5CF6" />
          <circle cx="400" cy="60" r="6" fill="#6366F1" />
          <circle cx="650" cy="120" r="6" fill="#10B981" />
          <path d="M 150 100 Q 275 30 400 60 T 650 120" stroke="url(#hero-node-gradient)" strokeWidth="1.5" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="hero-node-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-6 max-w-3xl">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(124,58,237,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>HOW IT WORKS</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-sans">
          From lost <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">to found.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          One report starts a chain of connections. We bring together the details that help people find what they thought was gone.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/report"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
          >
            <span>Report an Item</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/browse"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B0F1B] border border-indigo-900/60 text-slate-300 font-bold text-xs uppercase tracking-wider hover:text-white hover:border-violet-500/50 transition-all"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Browse Items</span>
          </Link>
        </div>

        {/* Trust Note */}
        <div className="inline-flex items-center gap-2 text-xs text-slate-400 pt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Encrypted ownership verification protects every community report.</span>
        </div>

      </div>
    </section>
  );
};
