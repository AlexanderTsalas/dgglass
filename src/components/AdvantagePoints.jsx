import React from 'react';
import { getAdvantageData } from '../data/advantages';
import { Shield, Users, Pencil, Settings } from 'lucide-react';

const ICON_MAP = {
  shield: Shield,
  users: Users,
  pencil: Pencil,
  settings: Settings
};

const AdvantageCard = ({ title, description, icon }) => {
  const Icon = ICON_MAP[icon] || Shield;
  return (
    <div className="glass-panel p-10 hover:border-dode-accent/40 transition-all duration-300 ease-expo group border-dode-navy/5">
      <div className="w-16 h-16 rounded-2xl bg-dode-navy/5 flex items-center justify-center text-dode-navy group-hover:bg-dode-accent group-hover:text-pure-white transition-all duration-500 ease-expo">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-dode-navy mb-4">{title}</h3>
      <p className="text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold">
        {description}
      </p>
    </div>
  );
};

const AdvantagePoints = () => {
  const data = getAdvantageData();
  return (
    <section className="section-padding bg-pure-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, idx) => (
            <AdvantageCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagePoints;
