import React from 'react';
import InfoColumn from './Inquiry/InfoColumn';
import ContactForm from './Inquiry/ContactForm';

const InquiryForm = () => {
  return (
    <section id="contact" className="section-padding bg-pure-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
        <InfoColumn />
        <ContactForm />
      </div>
    </section>
  );
};

export default InquiryForm;
