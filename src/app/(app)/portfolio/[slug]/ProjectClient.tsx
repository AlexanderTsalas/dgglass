'use client';

import React from 'react';
import { getProjectBySlug } from '../../../../data/portfolio';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../data/translations';

// Default images for gallery to ensure we have content to show
const defaultGallery = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1000"
];

export default function ProjectClient({ slug }: { slug: string }) {
    const { language } = useLanguage();
    const t = translations[language].project;
    const project = getProjectBySlug(slug, language);

    if (!project) {
        notFound();
    }

    // Combine main image with gallery images for a full showcase
    const allImages = project.images && project.images.length > 0 ? [project.url, ...project.images] : [project.url, ...defaultGallery];

    return (
        <div className="bg-white min-h-screen text-black pt-32">

            {/* Container */}
            <div className="max-w-[1600px] mx-auto px-6">

                {/* Minimal Header */}
                <div className="mb-16">
                    <Link href="/portfolio" className="inline-flex items-center text-black/40 hover:text-black mb-8 transition-colors uppercase text-xs tracking-[0.2em] font-bold">
                        <ArrowLeft size={16} className="mr-2" />
                        {t.back}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8 animate-slide-up">
                            <span className="text-black/40 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                                {project.category} — {project.year}
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] text-black">
                                {project.location}
                            </h1>
                        </div>

                        <div className="lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end justify-end animate-slide-up" style={{ animationDelay: '100ms' }}>
                            <h2 className="text-xl md:text-2xl font-light italic text-black/60 mb-6">
                                {project.type}
                            </h2>
                            <div className="flex flex-col gap-2 text-sm text-black/50">
                                <span>{t.client}: <span className="text-black">{project.client || t.private_client}</span></span>
                                <span>{t.architect}: <span className="text-black">{project.architect || t.na}</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Description (Brief) */}
                {project.description && (
                    <div className="mb-16 max-w-3xl">
                        <p className="text-xl leading-relaxed text-black/70">
                            {project.description}
                        </p>
                    </div>
                )}

                {/* Gallery Grid - The "Work" */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 pb-24">
                    {allImages.map((img, idx) => {
                        let gridClass = "lg:col-span-4 aspect-square";
                        if (idx === 0) gridClass = "lg:col-span-8 aspect-[16/10]";
                        else if (idx === 1) gridClass = "lg:col-span-4 aspect-[4/5]";
                        else if (idx === 2 || idx === 3) gridClass = "lg:col-span-6 aspect-[16/9]";

                        return (
                            <div key={idx} className={`relative overflow-hidden group rounded-lg ${gridClass}`}>
                                <Image
                                    src={img}
                                    alt={`${project.location} - View ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                                        {t.view}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-black/10 py-16 flex justify-between items-center">
                    <Link href="/portfolio" className="group flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                            <ArrowLeft size={20} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">{t.all_projects}</span>
                    </Link>

                    <Link href="/contact" className="group flex items-center space-x-4">
                        <span className="text-sm font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">{t.start_project}</span>
                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black/80 transition-colors">
                            <ArrowUpRight size={20} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
