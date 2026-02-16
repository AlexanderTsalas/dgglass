import React from 'react';
import Hero from '../components/Hero';
import ProfileHub from '../components/ProfileHub';
import AdvantagePoints from '../components/AdvantagePoints';
import ExpertiseCatalog from '../components/ExpertiseCatalog';
import ShowcaseGallery from '../components/ShowcaseGallery';
import InquiryForm from '../components/InquiryForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProfileHub />
      <ExpertiseCatalog />
      <AdvantagePoints />
      <ShowcaseGallery />
      <InquiryForm />
    </>
  );
};

export default HomePage;
