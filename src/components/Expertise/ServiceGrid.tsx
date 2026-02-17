'use client';

import React from 'react';
import ExpertiseItem from './Item';
import { getServicesData } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

const ServiceGrid = ({ gridRef }: { gridRef: React.RefObject<HTMLDivElement | null> }) => {
  const { language } = useLanguage();
  const services = getServicesData(language);

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4" ref={gridRef}>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {services.map((service, index) => {
          // Masonry Logic: Varied heights for visual interest
          // Pattern: Tall, Short, Medium, Tall...
          const heightPattern = [
            'h-[300px] md:h-[500px]', // 0: Tall
            'h-[240px] md:h-[350px]', // 1: Short
            'h-[280px] md:h-[450px]', // 2: Medium
            'h-[320px] md:h-[600px]', // 3: Exra Tall
            'h-[240px] md:h-[400px]', // 4: Short
            'h-[300px] md:h-[480px]', // 5: Standard
          ];

          // Cycle through the pattern
          const heightClass = heightPattern[index % heightPattern.length];

          return (
            <div key={service.slug} className="break-inside-avoid mb-6">
              <ExpertiseItem {...service} className={heightClass} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceGrid;
