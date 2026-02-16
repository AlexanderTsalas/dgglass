<!-- section-process.php -->
<section id="process" class="section-padding bg-pure-white relative overflow-hidden">
    <div class="max-w-[1800px] mx-auto relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-32 stagger-entry">
            <div class="stagger-item">
                <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Precision
                    Engineering</span>
                <h2 class="text-dode-navy uppercase tracking-tighter">Η Διαδρομή <br /> του <span
                        class="text-dode-accent">Γυαλιού.</span></h2>
            </div>
            <div class="stagger-item max-w-sm">
                <p class="text-concrete text-[10px] font-bold uppercase tracking-widest leading-loose">
                    Από τη μελέτη έως την τελική τοποθέτηση, κάθε στάδιο διέπεται από απόλυτη ακρίβεια και προσοχή στη
                    λεπτομέρεια.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-entry">
            <?php
            $steps = [
                [
                    'num' => '01',
                    'title' => 'Μελέτη & Σχεδιασμός',
                    'desc' => 'Ανάλυση των αρχιτεκτονικών απαιτήσεων και τεχνική μελέτη του χώρου για την ιδανική λύση.',
                    'icon' => 'pencil-line'
                ],
                [
                    'num' => '02',
                    'title' => 'Εξειδικευμένη Κοπή',
                    'desc' => 'Επεξεργασία υαλοπινάκων με μηχανήματα CNC τελευταίας γενιάς για μηδενικές αποκλίσεις.',
                    'icon' => 'scissors'
                ],
                [
                    'num' => '03',
                    'title' => 'Ποιοτικός Έλεγχος',
                    'desc' => 'Εξονυχιστικός έλεγχος αντοχής και φινιρίσματος πριν την έξοδο από τη μονάδα παραγωγής.',
                    'icon' => 'check-circle'
                ],
                [
                    'num' => '04',
                    'title' => 'Επαγγελματική Τοποθέτηση',
                    'desc' => 'Εγκατάσταση από εξειδικευμένα συνεργεία με έμφαση στην ασφάλεια και την αισθητική αρτιότητα.',
                    'icon' => 'home'
                ]
            ];

            foreach ($steps as $step): ?>
                <div
                    class="stagger-item group relative p-12 glass-panel border-dode-navy/5 hover:border-dode-accent/40 transition-all duration-700 ease-expo overflow-hidden">
                    <div
                        class="absolute -top-10 -right-10 text-[120px] font-black text-dode-navy/[0.03] group-hover:text-dode-accent/5 transition-colors duration-700">
                        <?php echo $step['num']; ?>
                    </div>

                    <div
                        class="w-12 h-12 rounded-xl bg-dode-navy/5 flex items-center justify-center text-dode-navy group-hover:bg-dode-accent group-hover:text-pure-white transition-all duration-500 mb-10">
                        <i data-lucide="<?php echo $step['icon']; ?>" class="w-6 h-6"></i>
                    </div>

                    <h3 class="text-dode-navy text-xl font-bold mb-6 uppercase tracking-tighter">
                        <?php echo $step['title']; ?>
                    </h3>
                    <p
                        class="text-concrete text-[10px] font-bold uppercase tracking-widest leading-loose opacity-60 group-hover:opacity-100 transition-opacity">
                        <?php echo $step['desc']; ?>
                    </p>

                    <div class="mt-12 w-full h-[1px] bg-dode-navy/10 relative overflow-hidden">
                        <div
                            class="absolute inset-x-0 top-0 h-full bg-dode-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-expo">
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>