import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroVisual from './Hero/Visual';
import HeroContent from './Hero/Content';
import HeroFeatures from './Hero/Features';

const ScrollIndicator = () => (
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hero-text">
    <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-pure-white/20 rotate-90 mb-8 origin-center">Scroll</span>
    <div className="w-[1px] h-16 bg-gradient-to-b from-dode-accent to-transparent" />
  </div>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
      });

      gsap.from('.hero-visual', {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-dode-navy flex items-center overflow-hidden pt-20">
      <HeroVisual />

      <div className="max-w-[1800px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <HeroContent />
        <HeroFeatures />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
