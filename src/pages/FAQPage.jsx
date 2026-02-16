import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => (
  <div className="border-b border-dode-navy/10 py-8 group cursor-pointer">
    <div className="flex justify-between items-center gap-6">
      <h3 className="text-lg font-bold text-dode-navy group-hover:text-dode-accent transition-colors">{question}</h3>
      <ChevronDown size={20} className="text-concrete group-hover:text-dode-accent transition-transform group-hover:rotate-180" />
    </div>
    <p className="mt-4 text-concrete text-sm leading-relaxed max-w-3xl opacity-0 group-hover:opacity-100 transition-opacity">
      {answer}
    </p>
  </div>
);

const FAQPage = () => {
  return (
    <div className="pt-32 pb-32">
      <section className="section-padding bg-gray-50">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-20">
            <span className="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Help Center</span>
            <h1 className="text-dode-navy mb-8">Συχνές <span className="text-dode-accent">Ερωτήσεις.</span></h1>
            <p className="text-concrete uppercase text-[10px] font-bold tracking-widest leading-relaxed max-w-md">
              Βρείτε απαντήσεις σχετικά με τη διαθεσιμότητα των προϊόντων, τους χρόνους εγκατάστασης και τις εγγυήσεις μας.
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem question="Ποια είναι η διαθεσιμότητα των προϊόντων;" answer="Διαθέτουμε μεγάλη παρακαταθήκη σε βασικούς υαλοπίνακες. Για εξειδικευμένες παραγγελίες ο χρόνος παράδοσης κυμαίνεται από 5 έως 15 εργάσιμες ημέρες." />
            <FAQItem question="Πόσο χρόνο διαρκεί η εγκατάσταση;" answer="Η διάρκεια εξαρτάται από την πολυπλοκότητα του έργου. Μια τυπική εγκατάσταση καμπίνας ντους διαρκεί 2-3 ώρες, ενώ μια πλήρης αντικατάσταση διπλών τζαμιών σε κατοικία μπορεί να διαρκέσει 1-2 ημέρες." />
            <FAQItem question="Πώς καθορίζεται η τιμολόγηση;" answer="Η τιμολόγηση περιλαμβάνει το κόστος του υλικού (Resale) και το κόστος της τεχνικής εργασίας (Installation). Παρέχουμε αναλυτική προσφορά για κάθε στάδιο." />
            <FAQItem question="Παρέχετε εγγύηση για τις εργασίες σας;" answer="Ναι, παρέχουμε γραπτή εγγύηση 2 ετών για την ποιότητα της εγκατάστασης και την εργασία των πιστοποιημένων συνεργείων μας, πέρα από την εργοστασιακή εγγύηση των υλικών." />
            <FAQItem question="Σε ποιες περιοχές εξυπηρετείτε;" answer="Καλύπτουμε όλα τα Δωδεκάνησα, με έδρα τη Ρόδο και τακτικά δρομολόγια σε Κω, Κάλυμνο, Σάμο και την ευρύτερη περιοχή." />
            <FAQItem question="Μπορώ να παραγγείλω μόνο το προϊόν χωρίς εγκατάσταση;" answer="Φυσικά. Ως εξουσιοδοτημένοι μεταπωλητές, μπορούμε να σας προμηθεύσουμε οποιοδήποτε προϊόν γυαλιού επιθυμείτε για τη δική σας χρήση." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
