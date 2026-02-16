import React from 'react';
import { Send } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language].inquiry.form;

  return (
    <div className="w-full max-w-2xl">
      <form className="space-y-12">
        <div className="space-y-8">
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.name}</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500"
              placeholder={t.name_placeholder}
            />
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.email}</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500"
              placeholder={t.email_placeholder}
            />
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.interest}</label>
            <div className="relative">
              <select className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black focus:border-[#B08968] focus:outline-none transition-all duration-500 appearance-none cursor-pointer">
                <option>{t.options.products_install}</option>
                <option>{t.options.products_only}</option>
                <option>{t.options.repair}</option>
                <option>{t.options.other}</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#B08968]/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.message}</label>
            <textarea
              rows={2}
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500 resize-none min-h-[80px]"
              placeholder={t.message_placeholder}
            />
          </div>
        </div>

        <div className="pt-4">
          <button className="group flex items-center gap-4 text-sm md:text-base font-bold uppercase tracking-wider hover:opacity-80 transition-opacity text-black">
            <span>{t.submit}</span>
            <div className="w-12 h-12 rounded-full bg-[#B08968] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md">
              <Send size={18} className="-ml-1 mt-1" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
