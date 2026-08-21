import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationRefs {
  heroRef: RefObject<HTMLDivElement | null>;
  eyebrowRef: RefObject<HTMLDivElement | null>;
  headlineRef: RefObject<HTMLDivElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  searchRef: RefObject<HTMLDivElement | null>;
  categoriesRef: RefObject<HTMLDivElement | null>;
  networkRef: RefObject<HTMLDivElement | null>;
  cardRef?: RefObject<HTMLDivElement | null>;
  statsRef: RefObject<HTMLDivElement | null>;
}

export const useHeroAnimation = ({
  heroRef,
  eyebrowRef,
  headlineRef,
  descriptionRef,
  searchRef,
  categoriesRef,
  networkRef,
  statsRef,
}: HeroAnimationRefs) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        return;
      }

      // --- 1. CINEMATIC HERO ENTRANCE TIMELINE ---
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (eyebrowRef.current) {
        tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.5 });
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('h1');
        tl.from(lines, { y: 30, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.3');
      }

      if (descriptionRef.current) {
        tl.from(descriptionRef.current, { y: 15, opacity: 0, duration: 0.5 }, '-=0.3');
      }

      if (searchRef.current) {
        tl.from(searchRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
      }

      if (categoriesRef.current) {
        const pills = categoriesRef.current.querySelectorAll('button');
        tl.from(pills, { y: 12, opacity: 0, duration: 0.4, stagger: 0.04 }, '-=0.2');
      }

      if (networkRef.current) {
        tl.from(networkRef.current, { scale: 0.95, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');
      }

      if (statsRef.current) {
        tl.from(statsRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.4');
      }

      // --- 2. STABLE SCROLL TRIGGER (Fixes Disappearing / Clipping Bug) ---
      // We keep opacity at 1 and apply only a subtle 15px transform during scroll
      if (heroRef.current && networkRef.current) {
        gsap.to(networkRef.current, {
          y: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [heroRef, eyebrowRef, headlineRef, descriptionRef, searchRef, categoriesRef, networkRef, statsRef]);
};
