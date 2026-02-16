import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => (
  <div className="glass-panel p-12 md:p-16 border-dode-navy/5 shadow-2xl">
    <form className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Όνοματεπώνυμο</label>
          <input type="text" className="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy" placeholder="John Doe" />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Email</label>
          <input type="email" className="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy" placeholder="john@example.com" />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Ενδιαφέρον για</label>
        <select className="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy">
           <option>Προϊόντα & Εγκατάσταση</option>
           <option>Μόνο Προϊόντα (Resale)</option>
           <option>Επισκευή / Στεγανοποίηση</option>
           <option>Άλλο</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Μήνυμα</label>
        <textarea rows="4" className="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy resize-none" placeholder="Περιγράψτε το έργο σας..." />
      </div>

      <button className="w-full btn-dode btn-primary flex items-center justify-center gap-4 group transition-all duration-300 ease-expo">
        ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-expo" />
      </button>
    </form>
  </div>
);

export default ContactForm;
