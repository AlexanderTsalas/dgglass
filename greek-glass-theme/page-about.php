<?php
/**
 * Template Name: About Page (Greek)
 * Template Post Type: page
 */

get_header();
?>

<main class="bg-dode-navy text-pure-white stagger-entry">
    <!-- Hero Concept -->
    <section class="section-padding relative overflow-hidden flex flex-col justify-end min-h-[70vh]">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
                class="w-full h-full object-cover grayscale opacity-30">
            <div class="absolute inset-0 bg-gradient-to-t from-dode-navy via-dode-navy/60 to-transparent"></div>
        </div>

        <div class="max-w-[1800px] mx-auto px-6 relative z-10 w-full">
            <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block stagger-item">Η
                Ιστορία μας</span>
            <h1 class="text-pure-white mb-12 stagger-item">Πάθος για την <br /> <span
                    class="text-dode-accent">Τελειότητα.</span></h1>
        </div>
    </section>

    <!-- Content Narrative -->
    <section class="section-padding px-6 bg-pure-white text-dode-navy">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div class="stagger-item">
                <h2 class="mb-12">Πάνω από 35 Χρόνια <br /> <span class="text-concrete">Εξειδίκευσης.</span></h2>
                <div class="space-y-8 text-concrete text-lg uppercase tracking-widest font-bold leading-relaxed">
                    <p>Στην Dodekanisa Glass, η υαλουργία δεν είναι απλά μια εργασία, είναι μια τέχνη που περνάει από
                        γενιά σε γενιά. Από το 1990, προσφέρουμε ολοκληρωμένες λύσεις γυαλιού που μεταμορφώνουν τους
                        χώρους σας.</p>
                    <p>Η δέσμευσή μας στην ποιότητα και η συνεχής επένδυση σε τεχνολογίες αιχμής μας έχουν καταστήσει
                        ηγέτες στον κλάδο στα Δωδεκάνησα.</p>
                </div>
            </div>
            <div class="stagger-item relative">
                <div class="glass-panel p-4 border-dode-navy/5">
                    <img src="https://images.unsplash.com/photo-1521229618121-b58d24660399?auto=format&fit=crop&q=80&w=1200"
                        class="w-full h-[500px] object-cover rounded-xl">
                </div>
                <!-- Precision Badge -->
                <div class="absolute -bottom-10 -left-10 glass-dark p-8 border-white/10 hidden md:block">
                    <span class="text-dode-accent text-5xl font-black block mb-2 leading-none">100%</span>
                    <span class="text-pure-white text-[9px] font-bold uppercase tracking-widest">Εγγυημένη
                        Ποιότητα</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats / Values -->
    <section class="section-padding px-6 bg-dode-navy">
        <div class="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
            <div class="stagger-item">
                <span class="text-dode-accent text-6xl font-black block mb-4">500+</span>
                <h4 class="text-pure-white text-xl font-bold mb-4 uppercase tracking-tighter">Μεγάλα Έργα</h4>
                <p class="text-pure-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose">Έχουμε
                    ολοκληρώσει με επιτυχία ορισμένα από τα πιο απαιτητικά αρχιτεκτονικά έργα στην περιοχή.</p>
            </div>
            <div class="stagger-item">
                <span class="text-dode-accent text-6xl font-black block mb-4">24/7</span>
                <h4 class="text-pure-white text-xl font-bold mb-4 uppercase tracking-tighter">Υποστήριξη</h4>
                <p class="text-pure-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose">Είμαστε
                    δίπλα σας ακόμα και μετά την παράδοση του έργου, διασφαλίζοντας την άψογη λειτουργία.</p>
            </div>
            <div class="stagger-item">
                <span class="text-dode-accent text-6xl font-black block mb-4">TUV</span>
                <h4 class="text-pure-white text-xl font-bold mb-4 uppercase tracking-tighter">Πιστοποιήσεις</h4>
                <p class="text-pure-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose">Όλα μας τα
                    υλικά και οι διαδικασίες ακολουθούν τα αυστηρότερα διεθνή πρότυπα ασφαλείας.</p>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
