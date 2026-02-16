'use client';

import React from 'react';
import InfoColumn from './Inquiry/InfoColumn';
import ContactForm from './Inquiry/ContactForm';

const InquiryForm = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <ContactForm />
    </div>
  );
};

export default InquiryForm;
