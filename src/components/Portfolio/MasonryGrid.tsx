'use client';

import React from 'react';

const PortfolioItem = ({ item }) => (
    <div className="relative group mb-8 break-inside-avoid">
        <div className="relative overflow-hidden rounded-[20px] bg-soft-white">
            <img
                src={item.url}
                alt={item.location}
                className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-expo group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <span className="text-white/80 text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">
                    {item.type}
                </span>
                <h3 className="text-white text-xl font-heading font-bold tracking-tight">
                    {item.location}
                </h3>
                <p className="text-white/60 text-[10px] uppercase font-mono mt-2">{item.year}</p>
            </div>
        </div>
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
