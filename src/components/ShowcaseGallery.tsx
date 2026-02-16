'use client';

import React, { useState, useEffect } from 'react';
import { getPortfolioData } from '../data/portfolio';

const PortfolioItem = ({ url, location, type, index }) => (
  <div className="relative aspect-square overflow-hidden group cursor-pointer bg-dode-navy">
    <img
      src={url}
      alt={type}
      className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-expo"
    />
    <div className="absolute inset-0 bg-dode-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className="absolute inset-x-8 bottom-8 glass-dark p-8 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
      <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-3">{type}</span>
      <h4 className="text-pure-white text-2xl font-bold tracking-tight">{location}</h4>
    </div>
    <div className="absolute top-8 right-8 w-12 h-12 glass-panel border-white/10 flex items-center justify-center text-pure-white text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-expo">
      0{index + 1}
    </div>
  </div>
);

const ShowcaseGallery = () => {
  const items = getPortfolioData();

  return (
    <section id="portfolio" className="section-padding bg-dode-navy">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Portfolio</span>
            <h2 className="text-white">Πρόσφατα <span className="text-dode-accent">Έργα.</span></h2>
          </div>
          <a href="#" className="hidden md:block text-[11px] font-bold uppercase tracking-[0.3em] border-b-2 border-dode-navy pb-1">ΔΕΙΤΕ ΟΛΑ ΤΑ ΕΡΓΑ</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {items.map((item, idx) => (
            <PortfolioItem key={idx} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;
