'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-soft-skin to-white pt-32 pb-12 overflow-hidden border-t border-black/5 relative text-black">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <span className="text-6xl md:text-8xl font-heading font-bold text-black tracking-tighter leading-none">
                                DG.
                            </span>
                        </Link>
                        <p className="text-black/60 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                            Αρχιτεκτονικά συστήματα γυαλιού για τους οραματιστές του αύριο. Σχεδιασμός και εγκατάσταση σε όλα τα Δωδεκάνησα.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <FooterColumn title="Εξερευνηση">
                            <FooterLink href="/portfolio">Επιλεγμένα Έργα</FooterLink>
                            <FooterLink href="/services">Υπηρεσίες</FooterLink>
                            <FooterLink href="/about">Η Φιλοσοφία μας</FooterLink>
                        </FooterColumn>

                        <FooterColumn title="Υπηρεσιες">
                            <FooterLink href="/service/yalo-pinakes">Γυάλινοι Πίνακες</FooterLink>
                            <FooterLink href="/service/syromenes-fysounes">Συρόμενα Συστήματα</FooterLink>
                            <FooterLink href="/service/gyalina-kagkela">Κάγκελα</FooterLink>
                            <FooterLink href="/service/energeiakoi-yalo-pinakes">Ενεργειακά</FooterLink>
                        </FooterColumn>

                        <FooterColumn title="Επικοινωνια">
                            <FooterLink href="/contact">Ζητήστε Προσφορά</FooterLink>
                            <FooterLink href="mailto:info@dodekanisaglass.gr">info@dodekanisaglass.gr</FooterLink>
                            <span className="text-black/40 text-sm mt-4 block font-mono">+30 22410 00000</span>
                            <span className="text-black/40 text-sm block font-sans">Ρόδος, Ελλάδα</span>
                        </FooterColumn>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/5 pt-12 gap-6">
                    <div className="flex gap-8">
                        <span className="text-black/30 text-xs font-bold uppercase tracking-widest">© {currentYear} DG Systems</span>
                        <Link href="/privacy" className="text-black/30 text-xs font-bold uppercase tracking-widest hover:text-black transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-black/30 text-xs font-bold uppercase tracking-widest hover:text-black transition-colors">Terms</Link>
                    </div>

                    <a href="https://distarter.com" target="_blank" rel="noopener noreferrer" className="text-black/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-colors duration-300">
                        Designed & Maintained by Distarter
                    </a>
                </div>

            </div>
        </footer>
    );
};

const FooterColumn = ({ title, children }) => (
    <div className="flex flex-col gap-6">
        <h4 className="text-black text-xs font-bold uppercase tracking-[0.2em]">{title}</h4>
        <nav className="flex flex-col gap-4">
            {children}
        </nav>
    </div>
);

const FooterLink = ({ href, children }) => (
    <Link href={href} className="group flex items-center gap-2 text-black/60 hover:text-black transition-colors duration-300">
        <span className="text-sm font-medium">{children}</span>
        <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black" />
    </Link>
);

export default Footer;
