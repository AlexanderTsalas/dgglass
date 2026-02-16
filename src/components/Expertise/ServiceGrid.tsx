'use client';

import React from 'react';
import ExpertiseItem from './Item';
import { getServicesData } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

const ServiceGrid = ({ gridRef }: { gridRef: React.RefObject<HTMLDivElement | null> }) => {
  const { language } = useLanguage();
  const services = getServicesData(language);

  return (
    <div className="w-full" ref={gridRef}>
      {/* Masonry-style Grid using CSS Columns for true staggered look, or standard Grid with varied spans */}
      {/* Using standard grid but with spans for visual interest "Bento" style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {services.map((service: any, index: number) => {
          // Establish a pattern for spanning
          // Example: Every 1st item of a row could be wider, or random
          // Simple span logic: 
          // Index 0 (first item) -> col-span-2 row-span-2 (Hero feature)
          // Index 6 (middle feature) -> col-span-2
          // Note: Logic needs to assume a valid index within the localized array

          const isFeatured = index === 0;
          const isWide = index === 6 || index === 10;

          let spanClass = "col-span-1";
          if (isFeatured) spanClass = "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
          if (isWide) spanClass = "col-span-1 md:col-span-2";

          return (
            <div key={service.slug} className={`${spanClass} h-full`}>
              {/* Pass 'isFeatured' to maximize height usage if needed */}
              <div className={`h-full ${isFeatured ? 'min-h-[600px]' : ''}`}>
                <ExpertiseItem {...service} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceGrid;
