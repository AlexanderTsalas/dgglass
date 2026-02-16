'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Simple load animation
    const title = titleRef.current;
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }

    // Mouse movement effect for the image
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // Move 20px
      const y = (clientY / window.innerHeight - 0.5) * 20;

      imageRef.current.style.transform = `translate(${x}px, ${y}px) rotate(2deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-soft-white via-[#F7F5F3] to-soft-skin">

      {/* Background Shapes: Warm & Soft */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-gradient-to-b from-white to-transparent rounded-full blur-[100px] opacity-40 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-soft-skin/50 to-transparent" />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="max-w-4xl order-2 lg:order-1">
          <span className="text-black/40 font-sans text-xs font-bold uppercase tracking-[0.4em] mb-8 block">
            {t.label}
          </span>
          <h1
            ref={titleRef}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-black leading-[0.9] mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            {t.title_line1} <br />
            <span className="text-black/20 italic font-serif">{t.title_line2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed font-light mb-16">
            {t.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <button className="btn-minimal group bg-black text-white border-transparent hover:bg-white hover:text-black hover:border-black shadow-lg hover:shadow-xl transition-all duration-500">
              <span className="relative z-10">{t.cta_portfolio}</span>
            </button>
            <div className="h-[1px] w-20 bg-black/10 hidden md:block" />
            <span className="text-xs font-bold uppercase tracking-widest text-black/40">Since 1993</span>
          </div>
        </div>

        {/* Hero Image - Floating Card */}
        <div className="relative h-[600px] w-full hidden lg:block order-1 lg:order-2 perspective-1000">
          <div
            ref={imageRef}
            className="absolute inset-0 w-full h-full glass-panel rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-100 ease-out"
            style={{ transform: 'rotate(2deg)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Glass House"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2000ms]"
            />

          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105">
            <span className="text-4xl font-bold block">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{t.badge_quality}</span>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-black/30 animate-bounce">
        <ArrowDown size={20} />
        <span className="text-[10px] font-bold uppercase tracking-widest">{t.scroll}</span>
      </div>
    </section>
  );
};

export default Hero;
