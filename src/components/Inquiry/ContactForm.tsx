import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => (
  <div className="glass-panel p-12 md:p-16 border-black/5 shadow-xl bg-white/50">
    <form className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Όνοματεπώνυμο</label>
          <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors duration-300 text-sm font-bold text-black placeholder:text-black/20" placeholder="Όνομα Επώνυμο" />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email</label>
          <input type="email" className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors duration-300 text-sm font-bold text-black placeholder:text-black/20" placeholder="email@example.com" />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Ενδιαφέρον για</label>
        <select className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors duration-300 text-sm font-bold text-black cursor-pointer">
          <option>Προϊόντα & Εγκατάσταση</option>
          <option>Μόνο Προϊόντα (Resale)</option>
          <option>Επισκευή / Στεγανοποίηση</option>
          <option>Άλλο</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Μήνυμα</label>
        <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors duration-300 text-sm font-bold text-black resize-none placeholder:text-black/20" placeholder="Περιγράψτε το έργο σας..." />
      </div>

      <button className="w-full bg-black hover:bg-black/80 text-white font-bold py-4 rounded-full flex items-center justify-center gap-4 group transition-all duration-500">
        ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </form>
  </div>
);

export default ContactForm;
