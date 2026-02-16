import React, { useState } from 'react';
import ProjectGallery from '../components/ShowcaseGallery';
import { Camera, MapPin } from 'lucide-react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('ALL');

  return (
    <div className="pt-32">
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Work</span>
              <h1 className="text-dode-navy mb-8">Portfolio <span className="text-dode-accent">Έργων.</span></h1>
              <p className="text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold">
                Μια συλλογή από επιλεγμένες εγκαταστάσεις σε όλη την επικράτεια των Δωδεκανήσων. Από πολυτελείς βίλες μέχρι σύγχρονα εμπορικά κέντρα.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {['ALL', 'HOTELS', 'RESIDENTIAL', 'COMMERCIAL'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[9px] font-bold tracking-widest px-8 py-3 border transition-all ${filter === cat ? 'bg-dode-navy text-pure-white border-dode-navy' : 'border-gray-200 text-concrete hover:border-dode-accent'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery />

      {/* Stats HUB */}
      <section className="py-24 bg-dode-navy text-pure-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-4">
            <Camera className="text-dode-accent mb-6" size={32} />
            <h4 className="text-4xl font-bold tracking-tighter">500+</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-pure-white/40">Ολοκληρωμένα Έργα</p>
          </div>
          <div className="space-y-4">
            <MapPin className="text-dode-accent mb-6" size={32} />
            <h4 className="text-4xl font-bold tracking-tighter">12</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-pure-white/40">Νησιά Εξυπηρέτησης</p>
          </div>
          <div className="space-y-4 flex flex-col justify-end">
             <p className="text-sm italic text-pure-white/60">"Κάθε έργο μας αποτελεί μια απόδειξη της δέσμευσής μας στην ποιότητα και την αρχιτεκτονική αρτιότητα."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
