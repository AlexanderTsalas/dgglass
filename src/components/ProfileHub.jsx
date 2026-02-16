import React from 'react';

const ProfileHub = () => {
  return (
    <section id="about" className="section-padding bg-dode-navy text-pure-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dode-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" 
            alt="About Dodekanisa Glass" 
            className="w-full h-[600px] object-cover shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-dode-accent p-12 hidden md:block">
            <h4 className="text-4xl font-bold tracking-tighter">25+</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-dode-navy opacity-60">Έτη Εμπειρίας</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="inline-flex items-center gap-3">
             <div className="w-12 h-[1px] bg-dode-accent" />
             <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em]">COMPANY PROFILE</span>
          </div>
          
          <h2 className="text-pure-white">
            Ολοκληρωμένες Λύσεις <br /> 
            <span className="text-concrete">Γυαλιού & Εγκατάστασης.</span>
          </h2>
          
          <p className="text-pure-white/60 text-lg leading-relaxed">
            Η Δωδεκάνησα Glass αποτελεί τον μοναδικό σας προορισμό για προϊόντα γυαλιού κορυφαίας ποιότητας και εξειδικευμένες υπηρεσίες εγκατάστασης. Συνδυάζουμε την εμπορία υλικών από τους κορυφαίους οίκους με την τεχνική αρτιότητα των πιστοποιημένων συνεργείων μας.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-pure-white/10">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dode-accent">Εμπορία Υλικών</h4>
              <p className="text-xs text-pure-white/40 leading-relaxed uppercase tracking-widest font-semibold">
                Authorized resellers των μεγαλύτερων κατασκευαστών υαλοπινάκων παγκοσμίως.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dode-accent">Τεχνική Υποστήριξη</h4>
              <p className="text-xs text-pure-white/40 leading-relaxed uppercase tracking-widest font-semibold">
                Πλήρης μελέτη και επίβλεψη από την επιλογή του υλικού μέχρι την τελική τοποθέτηση.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHub;
