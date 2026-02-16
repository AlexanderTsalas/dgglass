import { Link } from 'react-router-dom';
import { getServicePaths } from './Paths';
import { Maximize } from 'lucide-react';

const ExpertiseItem = ({ iconSlug, title, description, delay, slug }) => {
  const PATHS = getServicePaths();
  const path = PATHS[iconSlug];
  
  return (
    <div 
      className="group relative p-10 glass-panel border-white/20 hover:border-dode-accent/40 bg-white/40 backdrop-blur-xl transition-all duration-500 ease-expo hover:shadow-[0_48px_96px_-24px_rgba(0,170,204,0.15)] hover:-translate-y-3 overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Dynamic Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dode-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-dode-navy/5 border border-dode-navy/5 flex items-center justify-center text-dode-navy mb-10 group-hover:bg-dode-accent group-hover:text-pure-white group-hover:scale-110 transition-all duration-500 ease-expo relative">
           {/* Inner Ring */}
           <div className="absolute inset-1 border border-white/20 rounded-xl opacity-40 group-hover:opacity-100 transition-opacity" />
           
           <svg 
             width="32" 
             height="32" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="1.25" 
             strokeLinecap="round" 
             strokeLinejoin="round"
             className="relative z-10"
           >
             {path}
           </svg>
        </div>
        
        <h3 className="text-xl font-bold mb-5 tracking-tight text-dode-navy group-hover:text-dode-accent transition-colors duration-300">{title}</h3>
        <p className="text-sm text-concrete leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
          {description}
        </p>
        
        <Link to={`/service/${slug}`} className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-dode-navy/60 hover:text-dode-accent transition-all duration-300 group/btn">
          EXPLORE DETAILS 
          <div className="w-6 h-[1px] bg-dode-navy/10 group-hover/btn:w-10 group-hover/btn:bg-dode-accent transition-all duration-500" />
          <Maximize size={12} className="group-hover/btn:scale-110 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseItem;
