import React from 'react';
import ExpertiseItem from './Item';

const GroupOne = () => (
  <>
    <ExpertiseItem iconSlug="layers" title="Υαλοπίνακες" slug="yalo-pinakes" description="Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση." delay={50} />
    <ExpertiseItem iconSlug="maximize" title="Συρόμενες & Φυσούνες" slug="syromenes-fysounes" description="Minimal συστήματα συρόμενων θυρών για μέγιστη διαύγεια και άνοιγμα." delay={100} />
    <ExpertiseItem iconSlug="shield" title="Γυάλιννα Κάγκελα" slug="gyalina-kagkela" description="Ασφάλεια και αισθητική για μπαλκόνια και σκάλες με minimal σχεδιασμό." delay={150} />
    <ExpertiseItem iconSlug="zap" title="Ενεργειακοί Υαλοπίνακες" slug="energeiakoi-yalo-pinakes" description="Εξοικονόμηση ενέργειας και θερμομόνωση υψηλών προδιαγραφών." delay={200} />
    <ExpertiseItem iconSlug="layout" title="Επενδύσεις Γυαλιού" slug="ependyseis-gyaliou" description="Αρχιτεκτονικές επενδύσεις τοίχων με έγχρωμο ή διακοσμοτικό γυαλί." delay={250} />
  </>
);

export default GroupOne;
