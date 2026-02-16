import React from 'react';
import ExpertiseItem from './Item';

const GroupTwo = () => (
  <>
    <ExpertiseItem iconSlug="doorOpen" title="Γυάλινες Πόρτες" slug="gyalines-portes" description="Εσωτερικές και εξωτερικές πόρτες με μηχανισμούς υψηλής αντοχής." delay={300} />
    <ExpertiseItem iconSlug="trendingUp" title="Γυάλινες Σκάλες" slug="gyalines-skales" description="Εντυπωσιακές κατασκευές σκάλας από δομικό triplex γυαλί." delay={350} />
    <ExpertiseItem iconSlug="store" title="Βιτρίνες Καταστημάτων" slug="bitrines-katastimaton" description="Σταθερές και ανοιγόμενες βιτρίνες με αντιγραφή και ασφάλεια." delay={400} />
    <ExpertiseItem iconSlug="lock" title="Securit Glass" slug="securit-glass" description="Θερμικά σκληρυμένο γυαλί για μέγιστη αντοχή σε κρούση και θέρμανση." delay={450} />
    <ExpertiseItem iconSlug="grid" title="Γυάλινα Δάπεδα" slug="gyalina-dapeda" description="Διάφανα δάπεδα υψηλής στατικότητας για μοναδική αρχιτεκτονική εμπειρία." delay={500} />
  </>
);

export default GroupTwo;
