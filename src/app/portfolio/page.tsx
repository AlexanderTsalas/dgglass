'use client';

import React, { useState, useMemo } from 'react';
import { getPortfolioData } from '../../data/portfolio';
import PortfolioFilters from '../../components/Portfolio/PortfolioFilters';
import MasonryGrid from '../../components/Portfolio/MasonryGrid';
import { Camera, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export default function PortfolioPage() {
    const { language } = useLanguage();
    const t = translations[language].portfolio;
    const allProjects = getPortfolioData(language);
    const [filter, setFilter] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesFilter = filter === 'ALL' || project.category === filter;
            const matchesSearch = project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.type.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchTerm, allProjects, language]);

    return (
        <div className="pt-32 bg-soft-white min-h-screen text-black">
            {/* Header Section */}
            <section className="bg-white py-24 px-6 border-b border-black/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-4xl">
                        <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block animate-slide-up">
                            {t.label}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-black mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                            {t.title} <br /> <span className="text-black/30 font-serif italic">{t.subtitle}</span>
                        </h1>
                        <p className="text-black/60 text-sm leading-relaxed uppercase tracking-widest font-bold max-w-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
                            {t.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-6 min-h-[60vh]">
                <div className="max-w-[1600px] mx-auto">
                    <PortfolioFilters
                        activeCategory={filter}
                        onCategoryChange={setFilter}
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />

                    {filteredProjects.length > 0 ? (
                        <MasonryGrid items={filteredProjects} />
                    ) : (
                        <div className="text-center py-24 text-black/40">
                            <p>{t.no_results}</p>
                            <button
                                onClick={() => { setFilter('ALL'); setSearchTerm(''); }}
                                className="mt-4 text-xs font-bold uppercase tracking-widest text-black underline"
                            >
                                {t.view_all}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats */}
            <section className="py-32 bg-black text-white px-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
                    <div className="space-y-4">
                        <Camera className="text-white" size={32} strokeWidth={1} />
                        <h4 className="text-4xl font-bold tracking-tighter">500+</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t.stats.projects}</p>
                    </div>
                    <div className="space-y-4">
                        <MapPin className="text-white" size={32} strokeWidth={1} />
                        <h4 className="text-4xl font-bold tracking-tighter">12</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t.stats.islands}</p>
                    </div>
                    <div className="space-y-4 flex flex-col justify-end">
                        <p className="text-sm font-light text-white/60 italic">{t.stats.quote}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
