import React from 'react';
import ExpertiseItem from './Item';
import { SERVICE_PATHS as PATHS } from './Paths';

const GroupOne = () => (
  <>
    <ExpertiseItem iconSlug="layers" title="Υαλοπίνακες" slug="yalo-pinakes" description="Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση." delay={50} />
    <ExpertiseItem iconSlug="maximize" title="Συρόμενες & Φυσούνες" slug="syromenes-fysounes" description="Minimal συστήματα συρόμενων θυρών για μέγιστη διαύγεια και άνοιγμα." delay={100} />
    <ExpertiseItem iconSlug="shield" title="Γυάλινα Κάγκελα" slug="gyalina-kagkela" description="Ασφάλεια και αισθητική για μπαλκόνια και σκάλες με minimal σχεδιασμό." delay={150} />
    <ExpertiseItem iconSlug="zap" title="Ενεργειακοί Υαλοπίνακες" slug="energeiakoi-yalo-pinakes" description="Εξοικονόμηση ενέργειας και θερμομόνωση υψηλών προδιαγραφών." delay={200} />
    <ExpertiseItem iconSlug="layout" title="Επενδύσεις Γυαλιού" slug="ependyseis-gyaliou" description="Αρχιτεκτονικές επενδύσεις τοίχων με έγχρωμο ή διακοσμητικό γυαλί." delay={250} />
  </>
);

export const GroupTwo = () => (
  <>
    <ExpertiseItem iconSlug="doorOpen" title="Γυάλινες Πόρτες" slug="gyalines-portes" description="Εσωτερικές και εξωτερικές πόρτες με μηχανισμούς υψηλής αντοχής." delay={300} />
    <ExpertiseItem iconSlug="trendingUp" title="Γυάλινες Σκάλες" slug="gyalines-skales" description="Εντυπωσιακές κατασκευές σκάλας από δομικό triplex γυαλί." delay={350} />
    <ExpertiseItem iconSlug="store" title="Βιτρίνες Καταστημάτων" slug="bitrines-katastimaton" description="Σταθερές και ανοιγόμενες βιτρίνες με αντιγραφή και ασφάλεια." delay={400} />
    <ExpertiseItem iconSlug="lock" title="Securit Glass" slug="securit-glass" description="Θερμικά σκληρυμένο γυαλί για μέγιστη αντοχή σε κρούση και θέρμανση." delay={450} />
    <ExpertiseItem iconSlug="grid" title="Γυάλινα Δάπεδα" slug="gyalina-dapeda" description="Διάφανα δάπεδα υψηλής στατικότητας για μοναδική αρχιτεκτονική εμπειρία." delay={500} />
  </>
);

export const GroupThree = () => (
  <>
    <ExpertiseItem iconSlug="shower" title="Καμπίνες Ντους" slug="kampines-ntous" description="Custom κατασκευές για το μπάνιο σας με κρύσταλλα ασφαλείας." delay={550} />
    <ExpertiseItem iconSlug="eye" title="Καθρέπτες" slug="kathreptes" description="Καθρέπτες υψηλής διαύγειας, αντικέ ή έγχρωμοι για κάθε διακόσμηση." delay={600} />
    <ExpertiseItem iconSlug="sun" title="Στέγαστρα / Τέντες" slug="stegastra-tentes" description="Γυάλινα στέγαστρα με ανοξείδωτα εξαρτήματα και triplex κρύσταλλα." delay={650} />
    <ExpertiseItem iconSlug="copy" title="Triplex Glass" slug="triplex-glass" description="Πολυστρωματικοί υαλοπίνακες για ασφάλεια και ηχομόνωση." delay={700} />
    <ExpertiseItem iconSlug="droplets" title="Στεγανοποιήσεις" slug="steganopoiiseis" description="Επαγγελματική στεγανοποίηση υαλοπινάκων με υλικά κορυφαίας αντοχής." delay={750} />
    <ExpertiseItem iconSlug="briefcase" title="Διαχωριστικά Γραφείων" slug="diaxoristika-grafeion" description="Λύσεις για σύγχρονους επαγγελματικούς χώρους με γυάλιννα χωρίσματα." delay={800} />
    <ExpertiseItem iconSlug="window" title="Διπλά Τζάμια" slug="dipla-tzamia" description="Συστήματα διπλής και τριπλής υάλωσης για μέγιστη μόνωση." delay={850} />
  </>
);

export default GroupOne;
