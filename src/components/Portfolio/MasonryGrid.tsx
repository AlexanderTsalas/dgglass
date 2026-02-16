'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PortfolioItem = ({ item }) => (
    <div className="relative group mb-8 break-inside-avoid">
        <Link href={`/portfolio/${item.slug || '#'}`} className="block relative overflow-hidden rounded-[20px] bg-soft-white cursor-pointer">
            <img
                src={item.url}
                alt={item.location}
                className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-expo group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/80 text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">
                        {item.type}
                    </span>
                    <h3 className="text-white text-xl font-heading font-bold tracking-tight mb-2">
                        {item.location}
                    </h3>
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
                        <p className="text-white/60 text-[10px] uppercase font-mono">{item.year}</p>
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            <ArrowUpRight className="text-white w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

const MasonryGrid = ({ items }) => {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {items.map((item, idx) => (
                <PortfolioItem key={idx} item={item} />
            ))}
        </div>
    );
};

export default MasonryGrid;
