<!-- section-about.php -->
<section id="about" class="section-padding bg-dode-navy text-pure-white relative overflow-hidden">
    <!-- Atmospheric Background -->
    <div class="absolute inset-0 z-0">
        <div
            class="absolute top-0 left-0 w-[400px] h-[400px] bg-dode-accent/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2">
        </div>
        <div
            class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-dode-accent/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2">
        </div>
    </div>

    <div class="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10 items-center stagger-entry">

        <!-- Text Content -->
        <div class="stagger-item">
            <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block">Architecture &
                Vision</span>
            <h2 class="text-pure-white mb-12">
                <?php echo wp_kses_post(get_theme_mod('gg_about_title', 'Mastering the Art <br /> of <span class="text-dode-accent">Glass Architecture.</span>')); ?>
            </h2>

            <div
                class="space-y-8 text-pure-white/80 text-lg uppercase tracking-widest font-bold max-w-xl leading-loose">
                <?php
                $about_desc = get_theme_mod('gg_about_desc', 'Η Dodekanisa Glass αποτελεί το σημείο τομής ανάμεσα στην παραδοσιακή τεχνική και την αιχμή της τεχνολογίας στο αρχιτεκτονικό γυαλί.');
                echo '<p>' . esc_html($about_desc) . '</p>';
                ?>
                <p class="text-pure-white/40 text-sm italic font-normal lowercase tracking-normal">
                    Από το 1989, δημιουργούμε διαφανείς εμπειρίες που μεταμορφώνουν τους χώρους σας, συνδυάζοντας την
                    απόλυτη ασφάλεια με την υψηλή αισθητική.
                </p>
            </div>

            <div class="mt-20 pt-20 border-t border-white/10 grid grid-cols-2 lg:grid-cols-3 gap-12">
                <div>
                    <span class="text-dode-accent text-5xl font-black block mb-2">35+</span>
                    <span
                        class="text-pure-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose">Έτη<br />Εξειδίκευσης</span>
                </div>
                <div>
                    <span class="text-dode-accent text-5xl font-black block mb-2">1200+</span>
                    <span
                        class="text-pure-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose">Υλοποιημένα<br />Project</span>
                </div>
                <div class="hidden lg:block">
                    <span class="text-dode-accent text-5xl font-black block mb-2">100%</span>
                    <span
                        class="text-pure-white/40 text-[9px] font-bold uppercase tracking-widest leading-loose">Custom<br />Construction</span>
                </div>
            </div>
        </div>

        <!-- Visual / Image Panel -->
        <div class="stagger-item">
            <div class="relative group">
                <!-- Decorative Frame -->
                <div
                    class="absolute -inset-8 border border-white/5 rounded-3xl group-hover:border-dode-accent/20 transition-all duration-1000">
                </div>

                <div class="relative glass-panel p-6 border-white/10 overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
                        alt="Precision Glass Processing"
                        class="w-full h-[650px] object-cover rounded-xl group-hover:scale-105 transition-all duration-1000 ease-expo">

                    <!-- Floating Indicator -->
                    <div
                        class="absolute top-12 left-12 flex items-center gap-4 bg-black/40 backdrop-blur-xl px-6 py-4 border border-white/10 rounded-full">
                        <div class="w-3 h-3 bg-dode-accent rounded-full animate-pulse"></div>
                        <span class="text-pure-white text-[9px] font-bold uppercase tracking-[0.3em]">Direct from
                            Factory</span>
                    </div>

                    <!-- Floating Badge -->
                    <div
                        class="absolute bottom-12 right-12 glass-dark p-12 border-white/10 group-hover:-translate-y-6 transition-all duration-1000 ease-expo shadow-2xl">
                        <span class="text-pure-white font-black text-7xl italic leading-none block mb-4">EST.</span>
                        <span class="text-dode-accent text-[12px] font-bold uppercase tracking-[0.5em]">1989
                            RHODES</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>