import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface InfoItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

const InfoItem = ({ icon: Icon, title, content }: InfoItemProps) => (
  <div className="flex gap-6 group">
    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{title}</h4>
      <p className="text-sm font-bold text-black">{content}</p>
    </div>
  </div>
);

const InfoColumn = () => (
  <div className="space-y-12">
    <div>
      <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Get in Touch</span>
      <h2 className="text-5xl font-bold tracking-tighter text-black mb-8 leading-[0.9]">
        Σχεδιάστε την Επόμενη <br /> <span className="text-black/30 font-serif italic">Κατασκευή σας.</span>
      </h2>
      <p className="text-black/60 text-sm leading-relaxed uppercase tracking-widest font-bold max-w-sm">
        Είμαστε στη διάθεσή σας για να συζητήσουμε τις ανάγκες σας και να σας προσφέρουμε την καλύτερη λύση.
      </p>
    </div>

    <div className="space-y-8">
      <InfoItem icon={MapPin} title="Διεύθυνση" content="Ρόδος, Δωδεκάνησα, GR 85100" />
      <InfoItem icon={Phone} title="Τηλέφωνο" content="+30 22410 00000 / +30 690 000 0000" />
      <InfoItem icon={Mail} title="Email" content="info@dodekanisaglass.gr" />
      <InfoItem icon={Clock} title="Ωράριο" content="Δευ - Παρ: 08:30 - 16:30" />
    </div>
  </div>
);

export default InfoColumn;
