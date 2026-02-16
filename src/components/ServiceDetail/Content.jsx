import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceDetailContent = ({ serviceTitle }) => {
  return (
    <div className="lg:col-span-8 space-y-16">
       <div className="glass-panel p-10 md:p-16 border-dode-navy/5 shadow-2xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-dode-navy">Σχετικά με την Υπηρεσία</h2>
          <p className="text-concrete text-lg leading-relaxed font-medium">
             Στην ΔΩΔΕΚΑΝΗΣΑ Glass Systems, η εγκατάσταση {serviceTitle.toLowerCase()} αποτελεί μια από τις βασικές μας εξειδικεύσεις. 
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
               <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-dode-accent/20 transition-all duration-300">
                  <CheckCircle2 className="text-dode-accent shrink-0" size={20} />
                  <span className="text-sm font-bold text-dode-navy/80 uppercase tracking-widest leading-loose">{feat}</span>
               </div>
             ))}
          </div>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden glass-panel border-dode-navy/5">
             <img 
                src="https://images.unsplash.com/photo-1541824894660-f23ef082086e?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace" 
                className="w-full h-full object-cover opacity-80"
             />
          </div>
          <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden glass-panel border-dode-navy/5">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Minimal Office" 
                className="w-full h-full object-cover opacity-80"
             />
          </div>
       </div>
    </div>
  );
};

export default ServiceDetailContent;
