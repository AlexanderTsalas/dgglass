import React, { useRef } from 'react';
import ExpertiseSidebar from './Expertise/Sidebar';
import ExpertiseBackground from './Expertise/Background';
import ServiceGrid from './Expertise/ServiceGrid';
import { useServicesAnimation } from './Expertise/useServicesAnimation';

const ExpertiseCatalog = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Hook handles GSAP scroll-triggered entrance
  useServicesAnimation(sectionRef, gridRef);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding relative bg-white overflow-hidden"
    >
      <ExpertiseBackground />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="service-group">
            <ExpertiseSidebar />
          </div>

          <ServiceGrid gridRef={gridRef} />

        </div>
      </div>
    </section>
  );
};

export default ExpertiseCatalog;
