import React from 'react';
import ServicesGrid from '../components/ExpertiseCatalog';
import { ShoppingCart, PenTool as Tool, CheckCircle, ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="pt-32">
      <section className="bg-dode-navy py-24 px-6 text-pure-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-dode-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Catalog</span>
          <h1 className="mb-8">Προϊόντα <span className="text-dode-accent">& Συστήματα.</span></h1>
          <p className="max-w-2xl text-pure-white/60 text-lg leading-relaxed">
            Ανακαλύψτε την πλήρη γκάμα των υαλοπινάκων μας. Προσφέρουμε λύσεις για κάθε ανάγκη, από απλή προμήθεια υλικών μέχρι σύνθετες αρχιτεκτονικές εγκαταστάσεις.
          </p>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="glass-panel p-12 border-l-4 border-l-dode-accent">
            <ShoppingCart className="text-dode-accent mb-6" size={40} />
            <h3 className="text-2xl mb-4">Εμπορία & Μεταπώληση</h3>
            <p className="text-concrete text-sm leading-relaxed mb-8 uppercase tracking-widest font-bold">
              Προμήθεια πρώτων υλών για επαγγελματίες και ιδιώτες. Μεγάλο απόθεμα και άμεση παράδοση.
            </p>
            <ul className="space-y-3">
              {['Triplex/Securit', 'Ενεργειακά Κρύσταλλα', 'Διακοσμητικά Γυαλιά'].map(item => (
                <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-dode-navy">
                  <CheckCircle size={14} className="text-dode-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-12 border-l-4 border-l-dode-navy">
            <Tool className="text-dode-navy mb-6" size={40} />
            <h3 className="text-2xl mb-4">Μελέτη & Εγκατάσταση</h3>
            <p className="text-concrete text-sm leading-relaxed mb-8 uppercase tracking-widest font-bold">
              Ολοκληρωμένες λύσεις με το κλειδί στο χέρι. Από την επιμέτρηση μέχρι την τελική τοποθέτηση.
            </p>
            <ul className="space-y-3">
              {['Στατικές Μελέτες', 'Πιστοποιημένα Συνεργεία', 'Εγγύηση Εργασίας'].map(item => (
                <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-dode-navy">
                  <CheckCircle size={14} className="text-dode-navy" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Technical Spec CTA */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="mb-8">Χρειάζεστε <span className="text-dode-accent">Τεχνικές Προδιαγραφές;</span></h2>
          <p className="text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold mb-12">
            Οι ειδικοί μας μπορούν να σας βοηθήσουν να επιλέξετε τους κατάλληλους υαλοπίνακες βάσει των απαιτήσεων θέρμανσης, ήχου και ασφάλειας του έργου σας.
          </p>
          <button className="btn-dode btn-primary inline-flex items-center gap-4 group">
            ΖΗΤΗΣΤΕ ΤΕΧΝΙΚΟ ΦΥΛΛΑΔΙΟ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
