import React from 'react';
import { getServicesData } from '../../../data/services';
import ServiceClient from './ServiceClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const servicesData = getServicesData('el'); // Default to Greek metadata
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found | Δωδεκάνησα Glass',
        };
    }

    return {
        title: `${service.title} | Δωδεκάνησα Glass`,
        description: service.description || `High quality ${service.title} solutions in Rhodes.`,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // We don't fetch data here because we want it to be reactive to language on the client.
    // However, if we wanted SEO for the initial load language, we could fetch here.
    // For now, we delegate rendering to the client component.
    return <ServiceClient slug={slug} />;
}
