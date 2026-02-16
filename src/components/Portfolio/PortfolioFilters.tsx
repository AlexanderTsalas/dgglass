'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const PortfolioFilters = ({ activeCategory, onCategoryChange, searchTerm, onSearchChange }) => {
    // We need to access translations here. 
    // Since this is a presentational component, ideally we pass props. 
    // But to avoid prop drilling from page, we can use the hook.
    const { language } = useLanguage();
    const t = translations[language].portfolio;
    const tCats = translations[language].categories;

    // We need to map the internal category keys (ALL, HOTELS, etc) to display names.
    // Assuming 'ALL' is handled by t.all
    // And others match keys in tCats (lowercase)

    // The previous categories were hardcoded uppercase.
    // We should adapt them.
    const categoriesList = ['ALL', 'HOTELS', 'RESIDENTIAL', 'COMMERCIAL'];

    const getDisplayName = (cat) => {
        if (cat === 'ALL') return t.all;
        return tCats[cat.toLowerCase()] || cat;
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-black/5 pb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
                {categoriesList.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black/60 border-black/5 hover:border-black/20 hover:text-black'
                            }`}
                    >
                        {getDisplayName(cat)}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative group w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-black/40 group-focus-within:text-black transition-colors" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={t.search_placeholder}
                    className="block w-full md:w-64 pl-10 pr-4 py-2 bg-transparent border-b border-black/10 text-black text-xs font-bold tracking-widest placeholder-black/30 focus:outline-none focus:border-black transition-all duration-300 uppercase"
                />
            </div>
        </div>
    );
};

export default PortfolioFilters;
