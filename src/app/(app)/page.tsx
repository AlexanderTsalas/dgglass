import React from 'react';
import Hero from '../../components/Hero';
import ExpertiseCatalog from '../../components/ExpertiseCatalog';
import AdvantagePoints from '../../components/AdvantagePoints';
import ShowcaseGallery from '../../components/ShowcaseGallery';

export const metadata = {
    title: 'Δωδεκάνησα Glass | Κορυφαία Προϊόντα & Εγκατάσταση Γυαλιού',
    description: 'Εξειδικευμένες λύσεις γυαλιού για οικιακούς και επαγγελματικούς χώρους στα Δωδεκάνησα.',
};

export default function HomePage() {
    return (
        <>
            <Hero
                title="Architectural Glass Systems"
                subtitle="Premium glazing solutions for residential and commercial projects covering the Dodecanese."
                backgroundImage={{ url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200' }}
                cta={{ label: 'View Portfolio', link: '/portfolio' }}
            />
            <ExpertiseCatalog />
            <AdvantagePoints />
            <ShowcaseGallery />
        </>
    );
}
