import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroSection } from '../components/hero';

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animation Timeline as defined in design reference:
      // 1. Navbar fade in (0.1s)
      // 2. Eyebrow text fade up (0.2s)
      // 3. Headline reveal (0.3s)
      // 4. Description fade up (0.2s)
      // 5. Search bar slide up (0.3s)
      // 6. Trending pills stagger (0.3s)
      // 7. Network nodes scale in (0.4s)
      // 8. Connection lines draw (0.6s)
      // 9. Central card float in (0.4s)
      // 10. Stats count up / fade on load (0.8s)

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.nav-header', { y: -15, opacity: 0, duration: 0.4 })
        .from('.hero-eyebrow', { y: 15, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.hero-headline', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-description', { y: 15, opacity: 0, duration: 0.4 }, '-=0.3')
        .from('.search-bar-container', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.trending-pill', { y: 10, opacity: 0, duration: 0.4, stagger: 0.05 }, '-=0.3')
        .from('.item-card-container', { scale: 0.9, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.network-node', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.5')
        .from('.stats-strip-container', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <HeroSection />
    </div>
  );
};
