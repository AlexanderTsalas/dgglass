import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import SEOManager from './components/SEOManager';
import BackToTop from './components/BackToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProductsPage from './pages/ProductsPage';
import PortfolioPage from './pages/PortfolioPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <BackToTop />
      <div className="min-h-screen bg-pure-white font-sans text-dode-navy antialiased">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Unified Footer */}
        <footer className="bg-dode-navy border-t border-pure-white/5 py-32 px-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-dode-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 text-pure-white relative z-10">
            <div className="col-span-2 space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter text-pure-white uppercase">ΔΩΔΕΚΑΝΗΣΑ <br /> <span className="text-dode-accent">GLASS.</span></h2>
              <p className="text-pure-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-sm">
                Premium προϊόντα γυαλιού και επαγγελματική εγκατάσταση σε όλα τα Δωδεκάνησα. Η αξιοπιστία και η ποιότητα στην υπηρεσία σας.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-dode-accent">Πλοήγηση</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                <li className="hover:opacity-100 transition-opacity cursor-pointer">Αρχική</li>
                <li className="hover:opacity-100 transition-opacity cursor-pointer">Προϊόντα</li>
                <li className="hover:opacity-100 transition-opacity cursor-pointer">Έργα</li>
                <li className="hover:opacity-100 transition-opacity cursor-pointer">Συχνές Ερωτήσεις</li>
              </ul>
            </div>

            <div>
               <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-dode-accent">Επικοινωνία</h4>
               <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                <li className="hover:opacity-100 transition-opacity cursor-pointer">info@dodekanisaglass.gr</li>
                <li className="hover:opacity-100 transition-opacity cursor-pointer">+30 22410 00000</li>
                <li className="hover:opacity-100 transition-opacity cursor-pointer">Ρόδος, Ελλάδα</li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1800px] mx-auto mt-32 pt-10 border-t border-pure-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <p className="text-[9px] font-bold tracking-[0.3em] text-pure-white/20 uppercase">© 2026 Dodekanisa Glass Systems. All rights reserved.</p>
            <div className="flex gap-10">
              <span className="text-[9px] font-bold tracking-[0.3em] text-pure-white/20 uppercase hover:text-dode-accent cursor-pointer transition-colors">FACEBOOK</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-pure-white/20 uppercase hover:text-dode-accent cursor-pointer transition-colors">INSTAGRAM</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
