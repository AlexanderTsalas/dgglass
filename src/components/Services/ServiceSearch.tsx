'use client';

import React from 'react';
import { Search } from 'lucide-react';

const ServiceSearch = ({ categories, activCategory, onCategoryChange, searchTerm, onSearchChange }) => {
    return (
        <div className="w-full max-w-4xl mx-auto mb-16 space-y-8">
            {/* Search Bar */}
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-black/40 group-focus-within:text-black transition-colors" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Αναζήτηση υπηρεσιών..."
                    className="block w-full pl-16 pr-6 py-4 bg-white border border-black/5 rounded-full text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 shadow-sm transition-all duration-300 hover:shadow-md"
                />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
                <button
                    onClick={() => onCategoryChange('ALL')}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activCategory === 'ALL'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black/60 border-black/5 hover:border-black/20 hover:text-black'
                        }`}
                >
                    ΟΛΑ
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activCategory === cat
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-black/60 border-black/5 hover:border-black/20 hover:text-black'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServiceSearch;
