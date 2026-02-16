'use client';

import React from 'react';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ProfileHub = () => {
  const { language } = useLanguage();
  const t = translations[language].home.profile;

  return (
    <section id="about" className="section-padding bg-dode-navy text-pure-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dode-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
            alt="About Dodekanisa Glass"
            className="w-full h-[600px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-dode-accent p-12 hidden md:block">
            <h4 className="text-4xl font-bold tracking-tighter">25+</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-dode-navy opacity-60">{t.years_badge}</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-[1px] bg-dode-accent" />
            <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em]">{t.label}</span>
          </div>

          <h2 className="text-pure-white">
            {t.title} <br />
            <span className="text-concrete">{t.subtitle}</span>
          </h2>

          <p className="text-pure-white/60 text-lg leading-relaxed">
            {t.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-pure-white/10">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dode-accent">{t.resale_title}</h4>
              <p className="text-xs text-pure-white/40 leading-relaxed uppercase tracking-widest font-semibold">
                {t.resale_desc}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dode-accent">{t.support_title}</h4>
              <p className="text-xs text-pure-white/40 leading-relaxed uppercase tracking-widest font-semibold">
                {t.support_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHub;
