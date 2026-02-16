'use client';

import React, { useRef } from 'react';
import ServiceGrid from './Expertise/ServiceGrid';
import { useServicesAnimation } from './Expertise/useServicesAnimation';

const ExpertiseCatalog = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useServicesAnimation(sectionRef, gridRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative bg-soft-white overflow-hidden py-32"
    >
      <div className="max-w-[1920px] mx-auto relative z-10 px-6 md:px-12">
        {/* Header Section - Editorial Style */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 border-b border-black/5 pb-12">
          <div className="max-w-4xl">
            <span className="text-black/40 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
              Οι Υπηρεσιες Μας
            </span>
            <h2 className="text-black text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8]">
              Αρχιτεκτονική <br />
              <span className="text-black/30 italic font-serif">Διαφάνεια.</span>
            </h2>
          </div>

          <div className="max-w-md pb-4">
            <p className="text-black/60 text-sm md:text-base leading-relaxed font-medium">
              Δημιουργούμε διάφανες αρχιτεκτονικές λύσεις που ορίζουν τον σύγχρονο τρόπο ζωής. Από εξειδικευμένες εγκαταστάσεις έως εμπορικές προσόψεις μεγάλης κλίμακας.
            </p>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="w-full">
          <ServiceGrid gridRef={gridRef} />
        </div>

      </div>
    </section>
  );
};

export default ExpertiseCatalog;
