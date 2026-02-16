import React from 'react';
import ContactForm from '../components/InquiryForm';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32">
       <section className="bg-gray-50 py-24 px-6 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Contact Us</span>
          <h1 className="text-dode-navy mb-8">Επικοινωνία <span className="text-dode-accent">& Υποστήριξη.</span></h1>
          <p className="max-w-2xl text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold">
            Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση. Επισκεφθείτε την έδρα μας ή στείλτε μας το μήνυμά σας για μια δωρεάν εκτίμηση κόστους.
          </p>
        </div>
      </section>

      <ContactForm />

      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-dode-accent">Κεντρικό Γραφείο</h4>
            <p className="text-sm font-bold text-dode-navy flex items-center gap-3">
              <MapPin size={16} /> Ρόδος, Ελλάδα
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-dode-accent">Τηλεφωνικό Κέντρο</h4>
            <p className="text-sm font-bold text-dode-navy flex items-center gap-3">
              <Phone size={16} /> +30 22410 00000
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-dode-accent">Email</h4>
            <p className="text-sm font-bold text-dode-navy flex items-center gap-3">
              <Mail size={16} /> info@dodekanisaglass.gr
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-dode-accent">Social Media</h4>
            <p className="text-sm font-bold text-dode-navy flex items-center gap-3">
              <Globe size={16} /> @dodekanisaglass
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
