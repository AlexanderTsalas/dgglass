<!-- section-services.php -->
<section id="services" class="section-padding bg-pure-white relative overflow-hidden">
    <!-- Background Accents -->
    <div
        class="absolute top-0 right-0 w-[800px] h-[800px] bg-dode-navy/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2">
    </div>

    <div class="max-w-[1800px] mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
            <!-- Sidebar -->
            <div class="lg:col-span-3">
                <div class="sticky top-40">
                    <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Our
                        Expertise</span>
                    <h2 class="text-dode-navy mb-12">
                        <?php echo wp_kses_post(get_theme_mod('gg_services_title', 'Προϊόντα <br /> & <span class="text-dode-accent">Εφαρμογές.</span>')); ?>
                    </h2>

                    <div class="space-y-10">
                        <div class="glass-panel p-8 border-dode-navy/5">
                            <span class="text-dode-navy text-4xl font-black block mb-2">35+</span>
                            <span class="text-concrete text-[10px] font-bold uppercase tracking-widest">Χρόνια
                                Εμπειρίας</span>
                        </div>
                        <div class="glass-panel p-8 border-dode-navy/5">
                            <span class="text-dode-navy text-4xl font-black block mb-2">100%</span>
                            <span class="text-concrete text-[10px] font-bold uppercase tracking-widest">Πιστοποιημένα
                                Υλικά</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Grid -->
            <div class="lg:col-span-9 stagger-entry">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    <?php
                    $args = array(
                        'post_type' => 'service',
                        'posts_per_page' => 12,
                        'orderby' => 'menu_order',
                        'order' => 'ASC'
                    );
                    $services_query = new WP_Query($args);

                    if ($services_query->have_posts()):
                        while ($services_query->have_posts()):
                            $services_query->the_post();
                            $icon = get_post_meta(get_the_ID(), '_service_icon', true) ?: 'layers';
                            ?>
                            <div
                                class="stagger-item glass-panel glass-shimmer p-10 hover:border-dode-accent/40 transition-all duration-500 group border-white/5">
                                <i data-lucide="<?php echo esc_attr($icon); ?>"
                                    class="w-8 h-8 text-dode-navy group-hover:text-dode-accent mb-10 transition-colors"></i>
                                <h3 class="text-dode-navy text-xl font-bold mb-4 uppercase tracking-tighter">
                                    <?php the_title(); ?>
                                </h3>
                                <p
                                    class="text-concrete text-[10px] font-bold uppercase tracking-widest leading-loose mb-8 line-clamp-2">
                                    <?php echo get_the_excerpt(); ?>
                                </p>
                                <a href="<?php the_permalink(); ?>"
                                    class="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-concrete group-hover:text-dode-accent transition-colors">
                                    INFO <i data-lucide="chevron-right" class="w-3 h-3 translate-y-[1px]"></i>
                                </a>
                            </div>
                        <?php endwhile;
                        wp_reset_postdata();
                    else:
                        // Restore High-End Fallback Content
                        $fallbacks = [
                            ['title' => 'Αρχιτεκτονικό Γυαλί', 'icon' => 'layers', 'desc' => 'Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση με πιστοποίηση ασφαλείας.'],
                            ['title' => 'Συστήματα Minimal', 'icon' => 'maximize', 'desc' => 'Minimal συστήματα συρόμενων θυρών για μέγιστη διαύγεια και άψογη αισθητική.'],
                            ['title' => 'Γυάλινα Κάγκελα', 'icon' => 'shield', 'desc' => 'Ασφάλεια και αισθητική για μπαλκόνια και σκάλες με μίνιμαλ σχεδιασμό και triplex κρύσταλλα.'],
                            ['title' => 'Securit & Triplex', 'icon' => 'shield-alert', 'desc' => 'Εξειδικευμένη επεξεργασία γυαλιού για μέγιστη αντοχή σε κρούση και θερμική καταπόνηση.'],
                            ['title' => 'Ενεργειακή Αναβάθμιση', 'icon' => 'zap', 'desc' => 'Ενεργειακοί υαλοπίνακες νέας γενιάς για εξοικονόμηση ενέργειας και θερμομόνωση.'],
                            ['title' => 'Custom Κατασκευές', 'icon' => 'palette', 'desc' => 'Εξατομικευμένες λύσεις αρχιτεκτονικού γυαλιού για κάθε απαιτητική εφαρμογή.']
                        ];
                        foreach ($fallbacks as $item): ?>
                            <div
                                class="stagger-item glass-panel glass-shimmer p-10 hover:border-dode-accent/40 transition-all duration-500 group border-white/5">
                                <i data-lucide="<?php echo $item['icon']; ?>"
                                    class="w-8 h-8 text-dode-navy group-hover:text-dode-accent mb-10 transition-colors"></i>
                                <h3 class="text-dode-navy text-xl font-bold mb-4 uppercase tracking-tighter">
                                    <?php echo $item['title']; ?></h3>
                                <p
                                    class="text-concrete text-[10px] font-bold uppercase tracking-widest leading-loose mb-8 line-clamp-2">
                                    <?php echo $item['desc']; ?></p>
                                <span
                                    class="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-concrete group-hover:text-dode-accent transition-colors">PREMIUM
                                    SERVICE</span>
                            </div>
                        <?php endforeach;
                    endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>