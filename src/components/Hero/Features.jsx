import React from 'react';
import { Box, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, isFloat }) => (
  <div className={`hero-text glass-card p-10 hover:border-dode-accent/40 transition-all duration-500 group border-white/5 ${isFloat ? 'animate-float' : ''}`}>
    <Icon size={32} className="text-dode-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-pure-white mb-4 uppercase tracking-widest font-bold text-base">{title}</h3>
    <p className="text-pure-white/40 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
      {description}
    </p>
  </div>
);

const HeroFeatures = () => (
  <div className="lg:col-span-4 flex flex-col justify-center gap-6">
    <FeatureCard 
      icon={Box} 
      title="Premium Resale" 
      description="Εξουσιοδοτημένοι συνεργάτες των μεγαλύτερων οίκων παραγωγής υαλοπινάκων."
      isFloat={true}
    />
    <FeatureCard 
      icon={ShieldCheck} 
      title="Expert Services" 
      description="Certified πιστοποιημένη εγκατάσταση με εγγύηση εργασίας και υλικών."
      isFloat={false}
    />
  </div>
);

export default HeroFeatures;
