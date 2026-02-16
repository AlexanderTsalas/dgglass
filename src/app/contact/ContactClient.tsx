'use client';

import React, { useRef } from 'react';
import InquiryForm from '../../components/InquiryForm';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function ContactClient() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const title = titleRef.current;
        if (title) {
            gsap.fromTo(title,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
            );
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="pt-32 min-h-screen bg-gradient-to-br from-soft-white via-soft-skin/30 to-soft-white text-black selection:bg-black selection:text-white">
            <div className="max-w-[1400px] mx-auto px-6 mb-12">
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black mb-8 uppercase leading-[0.9]">
                    Let's Start <br />
                    <span className="font-serif italic font-light ml-12 md:ml-24 text-black/60">a Conversation.</span>
                </h1>
            </div>

            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] border-t border-black/5">
                {/* Left Column: Form & Info */}
                <div className="lg:col-span-7 border-r border-black/5 p-6 md:p-12">
                    <InquiryForm />
                </div>

                {/* Right Column: Support Person & Direct Links */}
                <div className="lg:col-span-5 relative bg-white/40 overflow-hidden flex flex-col justify-between backdrop-blur-sm">
                    <div className="p-8 md:p-12 z-10 relative">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08968] mb-4 block">Customer Support</span>
                        <h3 className="text-2xl font-bold mb-4">Here to help.</h3>
                        <p className="text-black/60 max-w-sm mb-8 text-sm leading-relaxed">
                            Our team is dedicated to providing you with the best glass solutions.
                            Whether you have a specific project in mind or just exploring options, we're here to guide you.
                        </p>

                        <div className="space-y-3">
                            <a href="mailto:info@dodekanisaglass.gr" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Mail size={16} />
                                </div>
                                <span className="font-bold underline decoration-black/10 text-sm md:text-base group-hover:decoration-black transition-all">info@dodekanisaglass.gr</span>
                            </a>
                            <a href="tel:+302241000000" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Phone size={16} />
                                </div>
                                <span className="font-bold underline decoration-black/10 text-sm md:text-base group-hover:decoration-black transition-all">+30 22410 00000</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative w-full h-[40vh] lg:h-auto lg:flex-1 mt-8">
                        {/* Replace with generated artifacts/support_person.png when available */}
                        <Image
                            src="/support_person.png"
                            alt="Support Representative"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-soft-skin/50 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
