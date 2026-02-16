import React from 'react';

const ExpertiseSidebar = () => {
  return (
    <div className="lg:col-span-3 space-y-20">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-dode-accent/5 rounded-full blur-3xl pointer-events-none" />
        <span className="text-dode-accent text-[10px] font-black uppercase tracking-[0.6em] mb-8 block font-mono opacity-80">
           Est. 1989
        </span>
        <h2 className="text-dode-navy text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] mb-12">
          Υπηρεσίες <br /> 
          <span className="text-dode-accent/90 italic font-medium">Συσκευασμένες</span> <br /> 
          σε Γυαλί.
        </h2>
        <p className="text-concrete text-xs leading-loose uppercase tracking-[0.15em] font-semibold max-w-xs opacity-70">
          Από τη μελέτη έως την τελική τοποθέτηση, προσφέρουμε ολοκληρωμένες λύσεις αρχιτεκτονικού υαλοπίνακα με έμφαση στη λεπτομέρεια.
        </p>
      </div>

      <div className="space-y-12 pt-12 border-t border-dode-navy/5">
         <div className="group cursor-default relative">
            <span className="text-[9px] font-black text-dode-navy/30 uppercase tracking-[0.3em] block mb-3">Projects Delivered</span>
            <div className="flex items-baseline gap-2">
               <span className="text-5xl font-bold text-dode-navy tracking-tighter group-hover:text-dode-accent transition-colors duration-500">1,240</span>
               <span className="text-dode-accent font-bold">+</span>
            </div>
         </div>
         <div className="group cursor-default">
            <span className="text-[9px] font-black text-dode-navy/30 uppercase tracking-[0.3em] block mb-3">Certified Technicians</span>
            <span className="text-5xl font-bold text-dode-navy tracking-tighter group-hover:text-dode-accent transition-colors duration-500">24</span>
         </div>
         <div className="group cursor-default">
            <span className="text-[9px] font-black text-dode-navy/30 uppercase tracking-[0.3em] block mb-3">Experience Years</span>
            <div className="flex items-baseline gap-2">
               <span className="text-5xl font-bold text-dode-navy tracking-tighter group-hover:text-dode-accent transition-colors duration-500">35</span>
               <div className="w-2 h-2 rounded-full bg-dode-accent animate-pulse" />
            </div>
         </div>
      </div>

      <div className="glass-panel p-10 bg-white/40 border-white/40 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <span className="text-4xl font-serif italic text-dode-navy">DG</span>
          </div>
          <p className="text-[10px] font-bold text-dode-navy/70 leading-relaxed uppercase tracking-widest relative z-10">
             Κάθε κατασκευή μας συνοδεύεται από γραπτή εγγύηση ποιότητας και πιστοποιητικά ασφάλειας.
          </p>
      </div>
    </div>
  );
};

export default ExpertiseSidebar;
