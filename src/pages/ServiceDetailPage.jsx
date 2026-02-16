import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServicesData } from '../data/services';
import Navigation from '../components/Navigation';
import ServiceDetailHeader from '../components/ServiceDetail/Header';
import ServiceDetailContent from '../components/ServiceDetail/Content';
import ServiceDetailSidebar from '../components/ServiceDetail/Sidebar';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const servicesData = getServicesData();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pure-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dode-navy mb-4">404</h1>
          <p className="text-concrete mb-8">Η υπηρεσία δεν βρέθηκε.</p>
          <Link to="/" className="btn-dode btn-primary">ΕΠΙΣΤΡΟΦΗ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white font-sans text-dode-navy antialiased">
      <Navigation />
      
      <main>
        <ServiceDetailHeader service={service} />

        <section className="section-padding bg-pure-white">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <ServiceDetailContent serviceTitle={service.title} />
            <ServiceDetailSidebar />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
