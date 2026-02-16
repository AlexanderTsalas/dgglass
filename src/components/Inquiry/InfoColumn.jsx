import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const InfoItem = ({ icon: Icon, title, content }) => (
  <div className="flex gap-6 group">
    <div className="w-12 h-12 rounded-xl bg-dode-navy/5 flex items-center justify-center text-dode-navy group-hover:bg-dode-accent group-hover:text-pure-white transition-all duration-300 ease-expo">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-concrete mb-1">{title}</h4>
      <p className="text-sm font-bold text-dode-navy">{content}</p>
    </div>
  </div>
);

const InfoColumn = () => (
  <div className="space-y-12">
    <div>
      <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Get in Touch</span>
      <h2 className="text-dode-navy mb-8">Σχεδιάστε την Επόμενη <br /> <span className="text-dode-accent">Κατασκευή σας.</span></h2>
      <p className="text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold max-w-sm">
        Είμαστε στη διάθεσή σας για να συζητήσουμε τις ανάγκες σας και να σας προσφέρουμε την καλύτερη λύση προϊόντος και εγκατάστασης.
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
