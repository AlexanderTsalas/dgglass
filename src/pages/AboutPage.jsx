import React from 'react';
import { Award, Shield, Users, Target, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-32">
      {/* Hero-like intro */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-3">
               <div className="w-12 h-[1px] bg-dode-accent" />
               <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em]">WHO WE ARE</span>
            </div>
            <h1 className="text-dode-navy">Η Ιστορία μας & <br /> <span className="text-dode-accent">Το Όραμά μας.</span></h1>
            <p className="text-lg text-concrete leading-relaxed font-medium uppercase tracking-widest max-w-xl">
               Είμαστε εξουσιοδοτημένοι μεταπωλητές προϊόντων γυαλιού υψηλής ποιότητας ΚΑΙ παρέχουμε επαγγελματικές υπηρεσίες εγκατάστασης.
            </p>
            <p className="text-sm text-dode-navy/60 leading-relaxed font-bold uppercase tracking-widest">
               Η Δωδεκάνησα Glass ξεκίνησε με έναν στόχο: να φέρει την κορυφαία αρχιτεκτονική υάλωση σε κάθε σπίτι και επαγγελματικό χώρο στα Δωδεκάνησα, συνδυάζοντας την εμπορία με την τεχνική αρτιότητα.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-10 bg-dode-navy/5 -skew-x-12 translate-x-1/2 p-20" />
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-[600px] object-cover relative z-10 shadow-2xl"
               alt="Modern Office Glass"
             />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-dode-navy text-pure-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               <div className="space-y-6">
                  <Target size={40} className="text-dode-accent" />
                  <h3 className="uppercase tracking-widest">Η Αποστολή</h3>
                  <p className="text-pure-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                     Να προσφέρουμε μια ολοκληρωμένη λύση (One-Stop Solution) για την αγορά και την τοποθέτηση γυαλιού, εξασφαλίζοντας ποιότητα και ασφάλεια.
                  </p>
               </div>
               <div className="space-y-6">
                  <Shield size={40} className="text-dode-accent" />
                  <h3 className="uppercase tracking-widest">Η Δέσμευση</h3>
                  <p className="text-pure-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                     Κάθε εγκατάσταση αντιμετωπίζεται με ακρίβεια και φροντίδα από τους πιστοποιημένους επαγγελματίες μας.
                  </p>
               </div>
               <div className="space-y-6">
                  <Award size={40} className="text-dode-accent" />
                  <h3 className="uppercase tracking-widest">Πιστοποιήσεις</h3>
                  <p className="text-pure-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                     Συμμόρφωση με όλα τα ευρωπαϊκά πρότυπα (EC Declaration) και χρήση μόνο πιστοποιημένων υλικών.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Compliance Bar */}
      <section className="py-12 bg-gray-50 border-y border-dode-navy/5">
         <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-wrap items-center justify-between gap-12">
            <span className="text-[10px] font-bold text-concrete uppercase tracking-[0.4em]">Service Area Map Rhodes - Kos - Samos</span>
            <div className="flex items-center gap-6">
               <CheckCircle2 size={18} className="text-dode-accent" />
               <span className="text-[11px] font-bold text-dode-navy uppercase tracking-widest">EC DECLARATION COMPLIANT</span>
            </div>
            <div className="flex items-center gap-6">
               <CheckCircle2 size={18} className="text-dode-accent" />
               <span className="text-[11px] font-bold text-dode-navy uppercase tracking-widest">ISO 9001 QUALIFIED</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
