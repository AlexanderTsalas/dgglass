import React from 'react';
import GroupOne from './GroupOne';
import GroupTwo from './GroupTwo';
import GroupThree from './GroupThree';

const ServiceGrid = ({ gridRef }) => {
  return (
    <div className="lg:col-span-9" ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-[1px]">
        <div className="service-group contents">
          <GroupOne />
        </div>
        <div className="service-group contents">
          <GroupTwo />
        </div>
        <div className="service-group contents">
          <GroupThree />
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
