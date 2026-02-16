import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Δωδεκάνησα Glass | Κορυφαία Προϊόντα & Εγκατάσταση Γυαλιού',
  '/about': 'Προφίλ | Δωδεκάνησα Glass',
  '/products': 'Προϊόντα & Υπηρεσίες | Δωδεκάνησα Glass',
  '/portfolio': 'Έργα & Portfolio | Δωδεκάνησα Glass',
  '/faq': 'Συχνές Ερωτήσεις | Δωδεκάνησα Glass',
  '/contact': 'Επικοινωνία | Δωδεκάνησα Glass',
};

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || 'Δωδεκάνησα Glass';
  }, [pathname]);

  return null;
};

export default SEOManager;
