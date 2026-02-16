import React from 'react';
import { Award, Shield, Target, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'Η Εταιρεία | Δωδεκάνησα Glass',
    description: 'Η ιστορία, το όραμα και η φιλοσοφία της Δωδεκάνησα Glass.',
};

export default function AboutPage() {
    return (
        <div className="pt-32 bg-gradient-to-br from-soft-white via-[#F7F5F3] to-soft-skin min-h-screen text-black">
            {/* Hero-like intro */}
            <section className="section-padding overflow-hidden relative pb-24">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10 relative z-10">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-12 h-[1px] bg-black" />
                            <span className="text-black text-[10px] font-bold uppercase tracking-[0.5em]">WHO WE ARE</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                            Η Ιστορία μας & <br /> <span className="text-black/40 italic font-serif">Το Όραμα.</span>
                        </h1>
                        <p className="text-lg text-black/70 leading-relaxed font-medium uppercase tracking-widest max-w-xl">
                            Είμαστε εξουσιοδοτημένοι μεταπωλητές και πιστοποιημένοι εγκαταστάτες συστημάτων γυαλιού υψηλών απαιτήσεων.
                        </p>
                        <p className="text-sm text-black/50 leading-relaxed font-bold uppercase tracking-widest bg-white p-6 border-l-2 border-black">
                            Η Δωδεκάνησα Glass ξεκίνησε με έναν στόχο: να φέρει την κορυφαία αρχιτεκτονική υάλωση σε κάθε σπίτι και επαγγελματικό χώρο στα Δωδεκάνησα.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-10 bg-gray-100/50 -skew-x-12 translate-x-1/2 p-20" />
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                            className="w-full h-[600px] object-cover relative z-10 shadow-lg grayscale hover:grayscale-0 transition-all duration-1000"
                            alt="Modern Office Glass"
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding bg-black text-white py-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="space-y-6">
                            <Target size={40} className="text-white" strokeWidth={1} />
                            <h3 className="uppercase tracking-widest font-bold">Η Αποστολή</h3>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                Μια ολοκληρωμένη λύση (One-Stop Solution) για την αγορά και την τοποθέτηση γυαλιού, εξασφαλίζοντας ποιότητα και ασφάλεια.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <Shield size={40} className="text-white" strokeWidth={1} />
                            <h3 className="uppercase tracking-widest font-bold">Η Δέσμευση</h3>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                Κάθε εγκατάσταση αντιμετωπίζεται με ακρίβεια και φροντίδα από τους πιστοποιημένους επαγγελματίες μας.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <Award size={40} className="text-white" strokeWidth={1} />
                            <h3 className="uppercase tracking-widest font-bold">Πιστοποιήσεις</h3>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                Συμμόρφωση με όλα τα ευρωπαϊκά πρότυπα (EC Declaration) και χρήση μόνο πιστοποιημένων υλικών.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Bar */}
            <section className="py-12 bg-white border-y border-black/5">
                <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-wrap items-center justify-between gap-12">
                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em]">Service Area Map Rhodes - Kos - Samos</span>
                    <div className="flex items-center gap-6">
                        <CheckCircle2 size={18} className="text-black" />
                        <span className="text-[11px] font-bold text-black uppercase tracking-widest">EC DECLARATION COMPLIANT</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <CheckCircle2 size={18} className="text-black" />
                        <span className="text-[11px] font-bold text-black uppercase tracking-widest">ISO 9001 QUALIFIED</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
