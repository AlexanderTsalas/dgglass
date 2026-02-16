import React from 'react';
import ContactForm from '../../components/InquiryForm';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export const metadata = {
    title: 'Επικοινωνία | Δωδεκάνησα Glass',
    description: 'Επικοινωνήστε μαζί μας για μια δωρεάν εκτίμηση κόστους.',
};

export default function ContactPage() {
    return (
        <div className="pt-32 bg-gradient-to-br from-soft-white via-[#F7F5F3] to-soft-skin min-h-screen text-black">
            <section className="bg-white py-24 px-6 border-b border-black/5">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-black/40 text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Contact Us</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black">Επικοινωνία <br /><span className="text-black/30 font-serif italic">& Yποστήριξη.</span></h1>
                    <p className="max-w-2xl text-black/60 text-sm leading-relaxed uppercase tracking-widest font-bold">
                        Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση. Επισκεφθείτε την έδρα μας ή στείλτε μας το μήνυμά σας.
                    </p>
                </div>
            </section>

            {/* We need to update InquiryForm as well, but for now incorporating it layout wise */}
            <div className="py-12">
                <ContactForm />
            </div>

            <section className="py-24 bg-white px-6 border-t border-black/5">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Κεντρικό Γραφείο</h4>
                        <p className="text-sm font-bold text-black flex items-center gap-3">
                            <MapPin size={16} /> Ρόδος, Ελλάδα
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Τηλεφωνικό Κέντρο</h4>
                        <p className="text-sm font-bold text-black flex items-center gap-3">
                            <Phone size={16} /> +30 22410 00000
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email</h4>
                        <p className="text-sm font-bold text-black flex items-center gap-3">
                            <Mail size={16} /> info@dodekanisaglass.gr
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40">Social Media</h4>
                        <p className="text-sm font-bold text-black flex items-center gap-3">
                            <Globe size={16} /> @dodekanisaglass
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
