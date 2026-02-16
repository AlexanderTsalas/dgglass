<!-- section-hero.php -->
<section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- 3D Glass Sculpture Environment -->
    <div id="three-hero-container" class="absolute inset-0 z-0"></div>

    <!-- Deep Minimal Overlay -->
    <div class="absolute inset-0 bg-dode-navy/60 z-[1] pointer-events-none"></div>

    <div class="max-w-[1800px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-8">
            <div class="hero-animate mb-8 flex items-center gap-4">
                <div class="w-12 h-[1px] bg-dode-accent"></div>
                <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.6em]">Premium Glass
                    Systems</span>
            </div>

            <h1 class="hero-animate text-pure-white mb-10 max-w-4xl">
                <?php echo wp_kses_post(get_theme_mod('gg_hero_heading', 'Αρχιτεκτονικό Γυαλί <br /> <span class="text-dode-accent">& Δομικές Κατασκευές.</span>')); ?>
            </h1>

            <p
                class="hero-animate text-pure-white/40 text-lg md:text-xl max-w-2xl mb-12 uppercase tracking-widest font-bold leading-relaxed">
                <?php echo esc_html(get_theme_mod('gg_hero_subheading', 'Εξειδίκευση στην επεξεργασία και τοποθέτηση υαλοπινάκων κορυφαίας ποιότητας για έργα υψηλών προδιαγραφών.')); ?>
            </p>

            <div class="hero-animate flex flex-wrap gap-6">
                <a href="<?php echo esc_url(home_url('/#services')); ?>"
                    class="btn-dode btn-primary group flex items-center gap-4">
                    ΥΠΗΡΕΣΙΕΣ <i data-lucide="arrow-right"
                        class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="<?php echo esc_url(home_url('/#contact')); ?>"
                    class="btn-dode border border-white/20 text-pure-white hover:bg-white/10 flex items-center gap-4">
                    ΕΠΙΚΟΙΝΩΝΙΑ <i data-lucide="phone" class="w-4 h-4"></i>
                </a>
            </div>
        </div>

        <!-- Hero Stats/HUD -->
        <div class="lg:col-span-4 flex flex-col justify-center gap-6">
            <div class="hero-animate glass-card p-10 hover:border-dode-accent/40 animate-float border-white/5">
                <i data-lucide="shield-check" class="text-dode-accent w-10 h-10 mb-8"></i>
                <h3 class="text-pure-white mb-4 uppercase tracking-widest font-bold text-base">Certified Quality</h3>
                <p class="text-pure-white/40 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
                    Εξουσιοδοτημένοι συνεργάτες των μεγαλύτερων οίκων παραγωγής.
                </p>
            </div>

            <div class="hero-animate glass-card p-10 hover:border-dode-accent/40 border-white/5">
                <i data-lucide="award" class="text-dode-accent w-10 h-10 mb-8"></i>
                <h3 class="text-pure-white mb-4 uppercase tracking-widest font-bold text-base">35+ Years</h3>
                <p class="text-pure-white/40 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
                    Τεχνογνωσία και εμπειρία σε απαιτητικά αρχιτεκτονικά έργα.
                </p>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hero-animate opacity-40">
        <span
            class="text-[8px] font-bold text-pure-white uppercase tracking-[0.5em] rotate-90 mb-10 translate-y-4">Scroll</span>
        <div class="w-[1px] h-20 bg-gradient-to-b from-dode-accent to-transparent"></div>
    </div>
</section>