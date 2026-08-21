import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ChevronRight, SearchX } from 'lucide-react';
import { itemService } from '../services/itemService';
import { ItemGallery } from '../components/item/ItemGallery';
import { ItemOverview } from '../components/item/ItemOverview';
import { ItemDetailsGroup } from '../components/item/ItemDetailsGroup';
import { ItemLocationPreview } from '../components/item/ItemLocationPreview';
import { PotentialMatchesGroup } from '../components/item/PotentialMatchesGroup';
import { ClaimInfoBox } from '../components/item/ClaimInfoBox';

gsap.registerPlugin(ScrollTrigger);

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Retrieve item dynamically using itemService
  const item = id ? itemService.getItemById(id) : undefined;
  const potentialMatches = item ? itemService.getPotentialMatches(item, 3) : [];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!containerRef.current || prefersReducedMotion || !item) return;

    const ctx = gsap.context(() => {
      // Subtle page entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0.85, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [id, item]);

  // Error State: Item Not Found
  if (!item) {
    return (
      <div className="min-h-[75vh] bg-[#F8F9FA] text-[#111318] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111318] tracking-tight mb-2 font-sans">
          Item Report Not Found
        </h1>
        <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
          The requested item report could not be found. It may have been resolved, returned, or the link may be invalid.
        </p>
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Browse Directory</span>
        </Link>
      </div>
    );
  }

  const handleInitiateClaim = () => {
    alert(`Initiating ownership claim workflow for "${item.name}". Verification proof form will open.`);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F9FA] text-[#111318] py-10 md:py-16 px-6 md:px-12 relative overflow-hidden">
      
      <main className="max-w-[1440px] mx-auto relative z-10 space-y-10">
        
        {/* Subtle Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link to="/browse" className="hover:text-[#111318] transition-colors">
            Browse Directory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-blue-600 font-bold truncate max-w-xs md:max-w-md">{item.name}</span>
        </nav>

        {/* Main Desktop 2-Column Product Layout */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Large Item Gallery (5 Columns) */}
          <div className="lg:col-span-5 w-full">
            <ItemGallery
              mainImageUrl={item.imageUrl}
              name={item.name}
              status={item.status}
              matchConfidence={item.matchConfidence}
            />
          </div>

          {/* RIGHT: Item Overview & Actions (7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <ItemOverview item={item} onInitiateClaim={handleInitiateClaim} />
          </div>

        </div>

        {/* Specifications & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Specs Group (7 Columns) */}
          <div className="lg:col-span-7 w-full space-y-8">
            <ItemDetailsGroup item={item} />
            
            {/* Potential Matches */}
            {potentialMatches.length > 0 && (
              <PotentialMatchesGroup matches={potentialMatches} currentItemStatus={item.status} />
            )}
          </div>

          {/* Location & Claim Info (5 Columns) */}
          <div className="lg:col-span-5 w-full space-y-8">
            <ItemLocationPreview location={item.location} date={item.date} />
            <ClaimInfoBox itemStatus={item.status} onInitiateClaim={handleInitiateClaim} />
          </div>

        </div>

      </main>
    </div>
  );
};
