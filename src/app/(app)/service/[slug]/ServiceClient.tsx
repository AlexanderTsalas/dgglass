'use client';

import React from 'react';
import { getServiceBySlug } from '../../../../data/services';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

export default function ServiceClient({ slug }: { slug: string }) {
    const { language } = useLanguage();
    // Fetch service based on current language
    const service = getServiceBySlug(slug, language);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen text-black pt-32">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* Minimal Header */}
                <div className="mb-16">
                    <Link href="/services" className="inline-flex items-center text-black/40 hover:text-black mb-8 transition-colors uppercase text-xs tracking-[0.2em] font-bold">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Services
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <div className="animate-slide-up">
                            <span className="text-black/40 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                                {service.category || "Service Category"}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-xl font-light text-black/60 leading-relaxed max-w-xl pb-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
                            {service.description}
                        </p>
                    </div>
                </div>

                {/* Split Layout: Image & Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-24 border-b border-black/10">

                    {/* Visual Side */}
                    <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative rounded-lg overflow-hidden animate-scale-in">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-5 space-y-12 py-8">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-6">Overview</h3>
                            <div className="prose prose-lg text-black/70">
                                <p>
                                    Experience the perfect blend of functionality and elegance with our {service.title}.
                                    Designed to transform spaces, our solutions offer superior performance in energy efficiency,
                                    sound insulation, and security while maximizing natural light.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-black/10 pb-4">Key Features</h3>
                            <ul className="space-y-4">
                                {service.features && service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start group">
                                        <span className="mr-4 text-black/30 group-hover:text-black transition-colors">0{idx + 1}</span>
                                        <span className="font-medium text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-soft-white p-8 rounded-lg mt-auto">
                            <h4 className="font-bold text-xl mb-2">Start your project</h4>
                            <p className="text-black/60 mb-6 text-sm">Contact our team for a custom quote tailored to your needs.</p>
                            <Link href="/contact" className="inline-block w-full text-center bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-black/80 transition-colors">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation / Related */}
                <div className="py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-black/10 hover:border-black/30 transition-colors">
                        <Link href="/portfolio" className="block h-full">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2 block">Explore Work</span>
                            <h3 className="text-2xl font-bold">View Portfolio</h3>
                            <p className="text-black/60 mt-2">See our recent {service.title} installations.</p>
                        </Link>
                    </div>
                    <div className="p-8 border border-black/10 hover:border-black/30 transition-colors">
                        <Link href="/contact" className="block h-full">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2 block">Get in Touch</span>
                            <h3 className="text-2xl font-bold">Contact Support</h3>
                            <p className="text-black/60 mt-2">Questions about specs or installation?</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
