import React from 'react';
import { ArrowRight, Hammer } from 'lucide-react';

const HeroContent = () => (
  <div className="lg:col-span-8 flex flex-col justify-center">
    <div className="hero-text mb-8 inline-flex items-center gap-3">
       <div className="w-12 h-[1px] bg-dode-accent" />
       <span className="text-dode-accent text-xs font-bold uppercase tracking-[0.5em]">DODEKANISA GLASS</span>
    </div>
    
    <h1 className="hero-text text-pure-white mb-8 max-w-4xl">
      Κορυφαία Προϊόντα Γυαλιού <br /> 
      <span className="text-dode-accent">& Εξειδικευμένη Τοποθέτηση.</span>
    </h1>
    
    <p className="hero-text text-pure-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
      Είμαστε εξουσιοδοτημένοι μεταπωλητές υαλοπινάκων κορυφαίας ποιότητας και παρέχουμε πλήρεις υπηρεσίες επαγγελματικής εγκατάστασης για κάθε κατασκευή.
    </p>

    <div className="hero-text flex flex-wrap gap-6">
      <button className="btn-dode btn-primary flex items-center gap-4 group">
        ΔΕΙΤΕ ΤΑ ΠΡΟΪΟΝΤΑ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="btn-dode border border-pure-white/20 text-pure-white hover:bg-pure-white/10 flex items-center gap-4 group text-[10px] font-bold uppercase tracking-widest">
        Κλείστε Ραντεβού Εγκατάστασης <Hammer size={16} />
      </button>
    </div>
  </div>
);

export default HeroContent;
