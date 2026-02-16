import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Layers, Maximize, Shield, Zap, Layout, DoorOpen,
  TrendingUp, Store, Lock, Grid, ShowerHead, Eye,
  Sun, Copy, Droplets, Briefcase, AppWindow
} from 'lucide-react';

const ICON_MAP = {
  layers: Layers, maximize: Maximize, shield: Shield, zap: Zap,
  layout: Layout, doorOpen: DoorOpen, trendingUp: TrendingUp,
  store: Store, lock: Lock, grid: Grid, shower: ShowerHead,
  eye: Eye, sun: Sun, copy: Copy, droplets: Droplets,
  briefcase: Briefcase, window: AppWindow
};

const ServiceDetailHeader = ({ service }) => {
  const Icon = ICON_MAP[service.icon] || Layers;
  return (
    <section className="relative pt-40 pb-20 bg-soft-white overflow-hidden text-black">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gray-100 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Link href="/#services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-12">
          <ArrowLeft size={14} /> Ολες οι Υπηρεσιες
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <div className="w-20 h-20 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-black mb-8 shadow-sm">
              <Icon size={40} strokeWidth={1} />
            </div>
            <span className="text-black/40 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Premium Solutions</span>
            <h1 className="text-black text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              {service.title}
            </h1>
            <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              {service.description}
            </p>
          </div>

          <div className="flex flex-col lg:items-end gap-6 text-black/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-black/10" />
              Αρχιτεκτονικο Γυαλι
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-black/10" />
              Πιστοποιημενη Εγκατασταση
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHeader;
