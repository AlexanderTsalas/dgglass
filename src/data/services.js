export const servicesGroupA = [
  { icon: 'layers', title: 'Υαλοπίνακες', slug: 'yalo-pinakes', desc: 'Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση.', accent: 'Structural' },
  { icon: 'maximize', title: 'Συρόμενες & Φυσούνες', slug: 'syromenes-fysounes', desc: 'Minimal συστήματα συρόμενων θυρών για μέγιστη διαύγεια και άνοιγμα.', accent: 'Minimal' },
  { icon: 'shield', title: 'Γυάλιννα Κάγκελα', slug: 'gyalina-kagkela', desc: 'Ασφάλεια και αισθητική για μπαλκόνια και σκάλες με minimal σχεδιασμό.', accent: 'Safety' },
  { icon: 'zap', title: 'Ενεργειακοί Υαλοπίνακες', slug: 'energeiakoi-yalo-pinakes', desc: 'Εξοικονόμηση ενέργειας και θερμομόνωση υψηλών προδιαγραφών.', accent: 'Eco' },
  { icon: 'layout', title: 'Επενδύσεις Γυαλιού', slug: 'ependyseis-gyaliou', desc: 'Αρχιτεκτονικές επενδύσεις τοίχων με έγχρωμο ή διακοσμητικό γυαλί.', accent: 'Interior' },
];

export const servicesGroupB = [
  { icon: 'doorOpen', title: 'Γυάλινες Πόρτες', slug: 'gyalines-portes', desc: 'Εσωτερικές και εξωτερικές πόρτες με μηχανισμούς υψηλής αντοχής.', accent: 'Premium' },
  { icon: 'trendingUp', title: 'Γυάλινες Σκάλες', slug: 'gyalines-skales', desc: 'Εντυπωσιακές κατασκευές σκάλας από δομικό triplex γυαλί.', accent: 'Luxury' },
  { icon: 'store', title: 'Βιτρίνες Καταστημάτων', slug: 'bitrines-katastimaton', desc: 'Σταθερές και ανοιγόμενες βιτρίνες με αντιγραφή και ασφάλεια.', accent: 'Commercial' },
  { icon: 'lock', title: 'Securit Glass', slug: 'securit-glass', desc: 'Θερμικά σκληρυμένο γυαλί για μέγιστη αντοχή σε κρούση και θέρμανση.', accent: 'Security' },
  { icon: 'grid', title: 'Γυάλινα Δάπεδα', slug: 'gyalina-dapeda', desc: 'Διάφανα δάπεδα υψηλής στατικότητας για μοναδική αρχιτεκτονική εμπειρία.', accent: 'Structural' },
];

export const servicesGroupC = [
  { icon: 'shower', title: 'Καμπίνες Ντους', slug: 'kampines-ntous', desc: 'Custom κατασκευές για το μπάνιο σας με κρύσταλλα ασφαλείας.', accent: 'Home' },
  { icon: 'eye', title: 'Καθρέπτες', slug: 'kathreptes', desc: 'Καθρέπτες υψηλής διαύγειας, αντικέ ή έγχρωμοι για κάθε διακόσμηση.', accent: 'Decor' },
  { icon: 'sun', title: 'Στέγαστρα / Τέντες', slug: 'stegastra-tentes', desc: 'Γυάλινα στέγαστρα με ανοξείδωτα εξαρτήματα και triplex κρύσταλλα.', accent: 'Outdoor' },
  { icon: 'copy', title: 'Triplex Glass', slug: 'triplex-glass', desc: 'Πολυστρωματικοί υαλοπίνακες για ασφάλεια και ηχομόνωση.', accent: 'Safety' },
  { icon: 'droplets', title: 'Στεγανοποιήσεις', slug: 'steganopoiiseis', desc: 'Επαγγελματική στεγανοποίηση υαλοπινάκων με υλικά κορυφαίας αντοχής.', accent: 'Maintenance' },
  { icon: 'briefcase', title: 'Διαχωριστικά Γραφείων', slug: 'diaxoristika-grafeion', desc: 'Λύσεις για σύγχρονους επαγγελματικούς χώρους με γυάλιννα χωρίσματα.', accent: 'Work' },
  { icon: 'window', title: 'Διπλά Τζάμια', slug: 'dipla-tzamia', desc: 'Συστήματα διπλής και τριπλής υάλωσης για μέγιστη μόνωση.', accent: 'Energy' },
];

export const getServicesData = () => servicesGroupA.concat(servicesGroupB, servicesGroupC);
