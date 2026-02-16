'use client';

import React from 'react';
import { Send } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language].inquiry.form;
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      interest: formData.get('interest'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form className="space-y-12" onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.name}</label>
            <input
              name="name"
              type="text"
              required
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500"
              placeholder={t.name_placeholder}
            />
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.email}</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500"
              placeholder={t.email_placeholder}
            />
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.interest}</label>
            <div className="relative">
              <select name="interest" className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black focus:border-[#B08968] focus:outline-none transition-all duration-500 appearance-none cursor-pointer">
                <option value="products_install">{t.options.products_install}</option>
                <option value="products_only">{t.options.products_only}</option>
                <option value="repair">{t.options.repair}</option>
                <option value="other">{t.options.other}</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#B08968]/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-2 group-focus-within:text-black transition-colors">{t.message}</label>
            <textarea
              name="message"
              rows={2}
              required
              className="w-full bg-transparent border-b border-black/10 py-4 text-lg md:text-xl font-medium text-black placeholder:text-black/10 focus:border-[#B08968] focus:outline-none transition-all duration-500 resize-none min-h-[80px]"
              placeholder={t.message_placeholder}
            />
          </div>
        </div>

        <div className="pt-4">
          <button type="submit" disabled={status === 'submitting'} className="group flex items-center gap-4 text-sm md:text-base font-bold uppercase tracking-wider hover:opacity-80 transition-opacity text-black">
            <span>{status === 'submitting' ? 'Sending...' : t.submit}</span>
            <div className="w-12 h-12 rounded-full bg-[#B08968] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md">
              <Send size={18} className="-ml-1 mt-1" />
            </div>
          </button>
          {status === 'success' && <p className="text-green-600 mt-4 text-sm font-bold">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 mt-4 text-sm font-bold">Something went wrong. Please try again.</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
