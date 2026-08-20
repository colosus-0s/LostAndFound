import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroSection } from '../components/home';

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion accessibility setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create smooth, cinematic entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.nav-header', {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-eyebrow',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          '.hero-headline',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.3'
        )
        .from(
          '.hero-description',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-search',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-trending',
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.4'
        )
        .from(
          '.hero-visual-container',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.8'
        )
        .from(
          '.stat-strip-container',
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <HeroSection />
    </div>
  );
};
