import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemService } from '../services/itemService';
import { ArrowLeft, MapPin, Calendar, Sparkles, Tag, ShieldCheck } from 'lucide-react';

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = id ? itemService.getItemById(id) : undefined;

  if (!item) {
    return (
      <div className="min-h-[70vh] bg-[#04060A] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Item Not Found</h2>
        <p className="text-slate-400 mb-6">The requested item report could not be found or has been removed.</p>
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Directory</span>
        </Link>
      </div>
    );
  }

  const isLost = item.status === 'LOST';

  return (
    <div className="min-h-screen bg-[#04060A] text-slate-100 py-10 md:py-16 px-6 md:px-12 relative">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Back Link */}
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Browse Directory</span>
        </Link>

        {/* Main Item Detail Card */}
        <div className="bg-[#0A0D18]/90 border border-indigo-950/80 rounded-3xl p-6 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#04060A] border border-indigo-950/80 h-72 lg:h-96 relative">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-extrabold tracking-widest uppercase shadow-md ${
                  isLost
                    ? 'bg-rose-950/90 border border-rose-500/50 text-rose-300'
                    : 'bg-cyan-950/90 border border-cyan-500/50 text-cyan-300'
                }`}
              >
                {item.status}
              </span>
            </div>
            {item.matchConfidence && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-lg bg-violet-950/90 border border-violet-500/50 text-violet-300 text-xs font-extrabold shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>{item.matchConfidence}% Match</span>
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Tag className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>{item.category}</span>
                {item.metadata.brand && <span>• {item.metadata.brand}</span>}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
                {item.name}
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300 border-y border-indigo-950/80 py-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Reported on {item.date}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Description</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Claim Action Box */}
            <div className="bg-[#080B14] border border-violet-500/30 rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Private Verification Enabled</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Think this item belongs to you or have information regarding its owner? Initiate a private claim verification.
              </p>
              <button
                onClick={() => alert('Private ownership verification claim initiated.')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:opacity-95 transition-all"
              >
                Initiate Ownership Claim
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
