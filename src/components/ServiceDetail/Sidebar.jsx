import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';

const ServiceDetailSidebar = () => {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
       <div className="glass-panel p-10 border-dode-navy/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] bg-white/80">
          <h3 className="text-xl font-bold mb-6 tracking-tight">Χρειάζεστε βοήθεια;</h3>
          <p className="text-sm text-concrete leading-relaxed mb-8 font-medium">
             Επικοινωνήστε με την τεχνική μας ομάδα για μια δωρεάν εκτίμηση του χώρου σας.
          </p>
          <div className="space-y-4">
             <a href="tel:+302241000000" className="flex items-center gap-4 p-4 rounded-xl bg-dode-navy text-pure-white hover:bg-dode-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-pure-white/10 flex items-center justify-center">
                   <Phone size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] uppercase tracking-widest opacity-60">Καλέστε μας</span>
                   <span className="text-xs font-bold">+30 22410 00000</span>
                </div>
             </a>
             
             <Link to="/contact" className="flex items-center gap-4 p-4 rounded-xl border border-dode-navy/10 text-dode-navy hover:border-dode-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-dode-navy/5 flex items-center justify-center text-dode-navy group-hover:text-dode-accent">
                   <MessageSquare size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] uppercase tracking-widest opacity-60">Ενδιαφέρομαι</span>
                   <span className="text-xs font-bold">Zητήστε Προσφορά</span>
                </div>
             </Link>
          </div>
       </div>
       
       <div className="glass-panel p-10 border-dode-navy/5 bg-gray-50 flex items-center gap-6">
          <ShieldCheck className="text-dode-accent" size={32} />
          <div>
             <span className="text-[9px] font-bold uppercase tracking-widest text-concrete block mb-1">Πιστοποιημένη εργασία</span>
             <span className="text-xs font-bold text-dode-navy"> ISO 9001:2015</span>
          </div>
       </div>
    </div>
  );
};

export default ServiceDetailSidebar;
