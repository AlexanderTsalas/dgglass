'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Shield, Target, ArrowUpRight, CheckCircle2, Ruler } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

export default function AboutClient() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <div className="pt-32 bg-white min-h-screen text-black">

            {/* 1. Impact Header (Split Layout) */}
            <section className="px-6 mb-24 lg:mb-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
                        <div className="lg:col-span-7">
                            <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block animate-slide-up">
                                {t.label}
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.8] text-black mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                                {t.title} <br /> <span className="text-black/30 font-serif italic text-5xl md:text-7xl lg:text-8xl align-top">{t.subtitle}</span>
                            </h1>
                        </div>
                        <div className="lg:col-span-5 pb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                            <p className="text-xl md:text-2xl leading-relaxed font-light text-black/70">
                                {t.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Visual Storytelling (Full Width Image) */}
            <section className="mb-24 lg:mb-32">
                <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Glass Architecture Workshop"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Floating Stats Board */}
                <div className="max-w-[1400px] mx-auto px-6 -mt-20 relative z-10">
                    <div className="bg-black text-white p-12 pr-24 inline-flex flex-col md:flex-row gap-16 shadow-2xl">
                        <div>
                            <span className="block text-5xl font-bold tracking-tighter mb-2">30+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t.stats.experience}</span>
                        </div>
                        <div>
                            <span className="block text-5xl font-bold tracking-tighter mb-2">500+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t.stats.projects}</span>
                        </div>
                        <div>
                            <span className="block text-5xl font-bold tracking-tighter mb-2">12</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t.stats.islands}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values (Grid) */}
            <section className="px-6 mb-24 lg:mb-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16 border-b border-black/10 pb-8">
                        <h2 className="text-3xl font-bold tracking-tight">{t.values.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="group">
                            <div className="mb-6 inline-block p-4 bg-soft-white rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <Target size={32} strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.values.mission_title}</h3>
                            <p className="text-black/60 leading-relaxed text-sm">
                                {t.values.mission_desc}
                            </p>
                        </div>

                        <div className="group">
                            <div className="mb-6 inline-block p-4 bg-soft-white rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <Ruler size={32} strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.values.precision_title}</h3>
                            <p className="text-black/60 leading-relaxed text-sm">
                                {t.values.precision_desc}
                            </p>
                        </div>

                        <div className="group">
                            <div className="mb-6 inline-block p-4 bg-soft-white rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                <Shield size={32} strokeWidth={1} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.values.standards_title}</h3>
                            <p className="text-black/60 leading-relaxed text-sm">
                                {t.values.standards_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Team / Culture (Split) */}
            <section className="bg-soft-white py-32 px-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em]">{t.team.label}</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                            {t.team.title} <br /> {t.team.subtitle}
                        </h2>
                        <p className="text-lg text-black/60 leading-relaxed max-w-md">
                            {t.team.description}
                        </p>

                        <div className="pt-8">
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{t.team.certifications}</h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-white border border-black/5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-green-600" /> ISO 9001:2015
                                </span>
                                <span className="px-4 py-2 bg-white border border-black/5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-green-600" /> EC Declaration
                                </span>
                                <span className="px-4 py-2 bg-white border border-black/5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-green-600" /> Energy Star
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <div className="relative aspect-[3/4] mt-12">
                            <Image src="https://images.unsplash.com/photo-1556912173-3db996e160d7?auto=format&fit=crop&q=80&w=800" fill alt="Team Member" className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="relative aspect-[3/4]">
                            <Image src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800" fill alt="Team Member" className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Area */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-4xl mx-auto">
                    {t.cta.title}
                </h2>
                <Link href="/contact" className="inline-flex items-center bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black/80 transition-transform hover:scale-105">
                    {t.cta.button} <ArrowUpRight className="ml-2" size={16} />
                </Link>
            </section>

        </div>
    );
}
