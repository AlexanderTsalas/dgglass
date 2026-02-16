import React from 'react';
import { getServicesData } from '../../../data/services';
import ServiceDetailHeader from '../../../components/ServiceDetail/Header';
import ServiceDetailContent from '../../../components/ServiceDetail/Content';
import ServiceDetailSidebar from '../../../components/ServiceDetail/Sidebar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const servicesData = getServicesData();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return {
            title: 'Υπηρεσία δεν βρέθηκε | Δωδεκάνησα Glass',
        };
    }

    return {
        title: `${service.title} | Δωδεκάνησα Glass`,
        description: service.description || `Λεπτομέρειες για την υπηρεσία ${service.title}`,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const servicesData = getServicesData();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            <ServiceDetailHeader service={service} />

            <section className="section-padding bg-pure-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <ServiceDetailContent serviceTitle={service.title} />
                    <ServiceDetailSidebar />
                </div>
            </section>
        </main>
    );
}
