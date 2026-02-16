import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '/' },
    { name: 'Προϊόντα', href: '/products' },
    { name: 'Έργα', href: '/portfolio' },
    { name: 'Προφίλ', href: '/about' },
    { name: 'Ερωτήσεις', href: '/faq' },
    { name: 'Επικοινωνία', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-dode-navy/5 py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-14 h-14 bg-dode-navy border border-pure-white/20 flex items-center justify-center font-bold text-pure-white text-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-dode-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="relative tracking-tighter letter-spacing-[-0.1em]">DG</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-dode-accent ${isScrolled ? 'text-dode-navy' : 'text-pure-white'}`}>ΔΩΔΕΚΑΝΗΣΑ</span>
            <span className={`text-[10px] font-bold tracking-[0.5em] ${isScrolled ? 'text-concrete' : 'text-pure-white/60'}`}>GLASS SYSTEMS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${pathname === link.href ? 'text-dode-accent' : (isScrolled ? 'text-dode-navy hover:text-dode-accent' : 'text-pure-white hover:text-dode-accent')}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-dode-accent group-hover:text-pure-white transition-all ${isScrolled ? 'bg-dode-navy/5 text-dode-navy' : 'bg-pure-white/10 text-pure-white'}`}>
              <Phone size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className={`text-[9px] font-bold uppercase tracking-widest ${isScrolled ? 'text-concrete' : 'text-pure-white/40'}`}>Καλέστε μας</span>
              <span className={`text-xs font-bold ${isScrolled ? 'text-dode-navy' : 'text-pure-white'}`}>+30 22410 00000</span>
            </div>
          </div>
          
          <Link to="/contact" className={`hidden sm:flex items-center gap-3 px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all group active:scale-95 ${isScrolled ? 'bg-dode-navy text-pure-white hover:bg-dode-accent' : 'bg-pure-white text-dode-navy hover:bg-dode-accent hover:text-pure-white'}`}>
            ΕΚΤΙΜΗΣΗ ΚΟΣΤΟΥΣ <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-dode-navy' : 'text-pure-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[999] transition-transform duration-700 ease-sharp ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-2xl font-bold uppercase tracking-[0.2em] text-dode-navy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-dode-navy/10 my-4" />
          <span className="text-sm font-bold text-dode-navy">+30 22410 00000</span>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-dode-navy text-pure-white py-5 text-xs font-bold uppercase tracking-widest text-center">
            ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
