import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

const ServiceDetailSidebar = () => {
   return (
      <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
         <div className="glass-panel p-10 border-black/5 shadow-lg bg-white">
            <h3 className="text-xl font-heading font-medium mb-6 tracking-tight text-black">Χρειάζεστε βοήθεια;</h3>
            <p className="text-sm text-black/60 leading-relaxed mb-8 font-sans">
               Επικοινωνήστε με την τεχνική μας ομάδα για μια δωρεάν εκτίμηση του χώρου σας.
            </p>
            <div className="space-y-4">
               <a href="tel:+302241000000" className="flex items-center gap-4 p-4 rounded-full bg-black text-white hover:bg-black/80 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[9px] uppercase tracking-widest opacity-60">Καλεστε μας</span>
                     <span className="text-xs font-bold">+30 22410 00000</span>
                  </div>
               </a>

               <Link href="/contact" className="flex items-center gap-4 p-4 rounded-full border border-black/10 text-black hover:border-black transition-all group">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black">
                     <MessageSquare size={18} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[9px] uppercase tracking-widest opacity-60">Ενδιαφερομαι</span>
                     <span className="text-xs font-bold">Zητήστε Προσφορά</span>
                  </div>
               </Link>
            </div>
         </div>

         <div className="glass-panel p-8 border-black/5 bg-gray-50 flex items-center gap-6 rounded-sm">
            <ShieldCheck className="text-black/40" size={32} strokeWidth={1} />
            <div>
               <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 block mb-1">Πιστοποιημενη εργασια</span>
               <span className="text-xs font-bold text-black"> ISO 9001:2015</span>
            </div>
         </div>
      </div>
   );
};

export default ServiceDetailSidebar;
