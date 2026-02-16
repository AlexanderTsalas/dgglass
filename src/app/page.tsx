import React from 'react';
import Hero from '../components/Hero';
import ProfileHub from '../components/ProfileHub';
import AdvantagePoints from '../components/AdvantagePoints';
import ExpertiseCatalog from '../components/ExpertiseCatalog';
import ShowcaseGallery from '../components/ShowcaseGallery';
import InquiryForm from '../components/InquiryForm';

export const metadata = {
    title: 'Δωδεκάνησα Glass | Κορυφαία Προϊόντα & Εγκατάσταση Γυαλιού',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <ExpertiseCatalog />
            {/* <ProfileHub /> */}
            {/* <AdvantagePoints /> */}
            {/* <ShowcaseGallery /> */}
            {/* <InquiryForm /> */}
        </>
    );
}
