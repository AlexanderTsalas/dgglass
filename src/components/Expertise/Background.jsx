import React from 'react';

const ExpertiseBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dode-accent/5 to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-dode-accent/[0.02] rounded-full blur-[120px]" />
      
      {/* Subtle Glass Texture Pattern */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
};

export default ExpertiseBackground;
