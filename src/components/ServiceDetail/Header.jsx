import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Layers, Maximize, Shield, Zap, Layout, DoorOpen, 
  TrendingUp, Store, Lock, Grid, ShowerHead, Eye, 
  Sun, Copy, Droplets, Briefcase, Window
} from 'lucide-react';

const ICON_MAP = {
  layers: Layers, maximize: Maximize, shield: Shield, zap: Zap, 
  layout: Layout, doorOpen: DoorOpen, trendingUp: TrendingUp, 
  store: Store, lock: Lock, grid: Grid, shower: ShowerHead, 
  eye: Eye, sun: Sun, copy: Copy, droplets: Droplets, 
  briefcase: Briefcase, window: Window
};

const ServiceDetailHeader = ({ service }) => {
  const Icon = ICON_MAP[service.icon] || Layers;
  return (
    <section className="relative pt-40 pb-20 bg-dode-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00AACC_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Link to="/#services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pure-white/60 hover:text-dode-accent transition-colors mb-12">
          <ArrowLeft size={14} /> ΟΛΕΣ ΟΙ ΥΠΗΡΕΣΙΕΣ
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <div className="w-20 h-20 rounded-2xl bg-dode-accent/10 border border-dode-accent/20 flex items-center justify-center text-dode-accent mb-8">
              <Icon size={40} />
            </div>
            <span className="text-dode-accent text-xs font-bold uppercase tracking-[0.5em] mb-4 block">{service.accent} Solutions</span>
            <h1 className="text-pure-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              {service.title}
            </h1>
            <p className="text-pure-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
              {service.desc}
            </p>
          </div>
          
          <div className="flex flex-col lg:items-end gap-6 text-pure-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
             <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-pure-white/10" />
                PREMIUM ARCHITECTURAL GLASS
             </div>
             <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-pure-white/10" />
                CERTIFIED INSTALLATION
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHeader;
