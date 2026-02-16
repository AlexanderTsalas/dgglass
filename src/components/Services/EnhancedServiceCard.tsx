import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const EnhancedServiceCard = ({ service }) => {
    return (
        <div className="group bg-white rounded-[32px] overflow-hidden border border-black/5 hover:border-soft-pink hover:shadow-xl transition-all duration-500 flex flex-col h-full">
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">
                        {service.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed font-sans">
                        {service.description}
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-grow">
                    {service.features && service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-black/40 mt-0.5" />
                            <span className="text-xs text-black/70 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Action */}
                <Link
                    href={`/service/${service.slug}`}
                    className="mt-auto flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-soft-white group-hover:bg-black group-hover:text-white transition-all duration-300"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">Περισσότερα</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </div>
    );
};

export default EnhancedServiceCard;
