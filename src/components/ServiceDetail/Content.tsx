import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceDetailContent = ({ serviceTitle }) => {
   return (
      <div className="lg:col-span-8 space-y-16">
         <div className="glass-panel p-10 md:p-16 border-black/5 shadow-sm space-y-8 bg-white/50">
            <h2 className="text-3xl font-heading font-medium tracking-tight text-black">Σχετικά με την Υπηρεσία</h2>
            <p className="text-black/70 text-lg leading-relaxed font-sans font-light">
               Στην ΔΩΔΕΚΑΝΗΣΑ Glass Systems, η εγκατάσταση <span className="font-medium text-black">{serviceTitle}</span> αποτελεί μια από τις βασικές μας εξειδικεύσεις.
               Χρησιμοποιούμε υλικά κορυφαίας ποιότητας και πιστοποιημένες τεχνικές για να εξασφαλίσουμε το βέλτιστο αισθητικό και λειτουργικό αποτέλεσμα.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
               {[
                  'Υψηλή Αντοχή & Ασφάλεια',
                  'Minimal Αισθητική',
                  'Εγγύηση Εργασίας',
                  'Custom Σχεδίαση',
                  'Θερμομονωτικές Ιδιότητες',
                  'Εύκολη Συντήρηση'
               ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-sm bg-white border border-black/5 group hover:border-black/20 transition-all duration-300">
                     <CheckCircle2 className="text-black/20 group-hover:text-black transition-colors" size={20} strokeWidth={1} />
                     <span className="text-xs font-bold text-black uppercase tracking-widest leading-loose">{feat}</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden border border-black/5">
               <img
                  src="https://images.unsplash.com/photo-1541824894660-f23ef082086e?auto=format&fit=crop&q=80&w=1000"
                  alt="Επαγγελματικός Χώρος"
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden border border-black/5">
               <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Minimal Γραφείο"
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
         </div>
      </div>
   );
};

export default ServiceDetailContent;
