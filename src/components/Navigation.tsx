'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, switchLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations].nav;

  const languages = [
    { code: 'el', label: 'ΕΛ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'zh', label: 'ZH' },
    { code: 'ar', label: 'AR' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.portfolio, href: '/portfolio' },
    { name: t.services, href: '/services' },
    { name: t.about, href: '/about' },
    { name: t.contact, href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-expo ${isScrolled
          ? 'py-4 glass-warm border-b border-soft-skin/50'
          : 'py-8 bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-tighter text-black leading-none">
                DG<span className="text-black/30">.</span>
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.4em] text-black/40 mt-1">
                Glass
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold uppercase tracking-[0.2em] py-2 group overflow-hidden ${pathname === link.href ? 'text-black' : 'text-black/60 hover:text-black'
                  }`}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {link.name}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-500 origin-left ease-expo ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </Link>
            ))}
          </div>

          {/* Right Side: Language & CTA */}
          <div className="flex items-center gap-6">

            {/* Language Picker */}
            <div className="relative z-50">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-xs font-bold text-black/60 hover:text-black transition-colors uppercase tracking-widest"
              >
                <Globe size={14} />
                <span>{language.toUpperCase()}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-4 bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden w-24">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 text-[10px] font-bold tracking-widest hover:bg-black/5 transition-colors ${language === lang.code ? 'bg-black/5 text-black' : 'text-black/60'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:flex items-center justify-center px-8 py-3 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-black transition-all duration-500 hover:bg-black hover:text-white hover:border-black group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.contact}
                <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 text-black hover:text-black/60 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-1000 ease-expo ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto clip-path-full' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-heading font-bold text-black hover:text-black/50 transition-all duration-500 opacity-0 animate-slide-up"
              style={{ animationDelay: `${100 + idx * 50}ms`, animationFillMode: 'forwards' }}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Language Picker */}
          <div className="flex gap-4 mt-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`text-sm font-bold tracking-widest uppercase ${language === lang.code ? 'text-black underline' : 'text-black/40'
                  }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
