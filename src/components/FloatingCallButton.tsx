'use client';

import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
    return (
        <a
            href="tel:+306900000000" // Placeholder number
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
            aria-label="Call us"
        >
            <Phone size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        </a>
    );
};

export default FloatingCallButton;
