'use client';

import React, { useState, useMemo } from 'react';
import ServiceSearch from '../../../components/Services/ServiceSearch';
import EnhancedServiceCard from '../../../components/Services/EnhancedServiceCard';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

import { getServicesData } from '../../../data/services';

export default function ServicesClientPage() {
    const { language } = useLanguage();
    const t = translations[language].services;
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('ALL');

    const allServices = useMemo(() => {
        const services = getServicesData(language);
        return services.map(service => ({
            ...service,
            // Ensure properties match what EnhancedServiceCard expects
            // Local data structure already matches well, but we can ensure defaults here
        }));
    }, [language]);

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = allServices.map(s => s.category).filter(Boolean);
        return [...new Set(cats)];
    }, [allServices]);

    // Filter Logic
    const filteredServices = useMemo(() => {
        return allServices.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'ALL' || service.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, category, allServices]);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft-white text-black">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
                <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block animate-slide-up">
                    {t.label}
                </span>
                <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-black mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                    {t.title} <span className="text-black/30 italic font-serif">{t.subtitle}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-black/60 text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
                    {t.description}
                </p>
            </div>

            {/* Search & Filter */}
            <div className="px-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
                <ServiceSearch
                    categories={categories}
                    activCategory={category}
                    onCategoryChange={setCategory}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
            </div>

            {/* Results Grid */}
            <div className="max-w-[1400px] mx-auto px-6">
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, idx) => (
                            <div key={service.slug} className="animate-scale-in" style={{ animationDelay: `${idx * 50}ms` }}>
                                <EnhancedServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 text-black/40">
                        <p>{t.no_results}</p>
                        <button
                            onClick={() => { setCategory('ALL'); setSearchTerm(''); }}
                            className="mt-4 text-xs font-bold uppercase tracking-widest text-black underline"
                        >
                            {t.clear_filters}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
