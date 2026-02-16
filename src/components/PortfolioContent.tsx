'use client';

import React, { useState } from 'react';
import ProjectGallery from '../components/ShowcaseGallery';
import { Camera, MapPin } from 'lucide-react';

const PortfolioContent = () => {
    const [filter, setFilter] = useState('ALL');

    return (
        <div className="pt-32 bg-soft-white min-h-screen text-black">
            <section className="bg-white py-24 px-6 border-b border-black/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Our Work</span>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-black mb-8">
                                Portfolio <br /> <span className="text-black/30 font-serif italic">Έργων.</span>
                            </h1>
                            <p className="text-black/60 text-sm leading-relaxed uppercase tracking-widest font-bold">
                                Μια συλλογή από επιλεγμένες εγκαταστάσεις σε όλη την επικράτεια των Δωδεκανήσων.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {['ALL', 'HOTELS', 'RESIDENTIAL', 'COMMERCIAL'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`text-[9px] font-bold tracking-widest px-8 py-3 border rounded-full transition-all duration-300 ${filter === cat ? 'bg-black text-white border-black' : 'border-black/10 text-black/60 hover:border-black hover:text-black'}`}
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
            <section className="py-32 bg-black text-white px-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
                    <div className="space-y-4">
                        <Camera className="text-white" size={32} strokeWidth={1} />
                        <h4 className="text-4xl font-bold tracking-tighter">500+</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Ολοκληρωμένα Έργα</p>
                    </div>
                    <div className="space-y-4">
                        <MapPin className="text-white" size={32} strokeWidth={1} />
                        <h4 className="text-4xl font-bold tracking-tighter">12</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Νησιά Εξυπηρέτησης</p>
                    </div>
                    <div className="space-y-4 flex flex-col justify-end">
                        <p className="text-sm font-light text-white/60 italic">"Κάθε έργο μας αποτελεί μια απόδειξη της δέσμευσής μας στην ποιότητα και την αρχιτεκτονική αρτιότητα."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioContent;
