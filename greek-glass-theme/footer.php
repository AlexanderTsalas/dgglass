<?php
/**
 * THE FOOTER
 */
?>
<footer class="bg-dode-navy pt-32 pb-16 px-6 relative overflow-hidden border-t border-white/5">
    <!-- Background Accents -->
    <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-dode-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2">
    </div>

    <div class="max-w-[1800px] mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
            <!-- 1. Brand Column -->
            <div class="lg:col-span-4 space-y-10">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex flex-col group">
                    <span class="text-4xl font-black text-pure-white leading-none tracking-tighter">
                        <?php echo esc_html(get_theme_mod('gg_logo_text', 'DG')); ?>
                    </span>
                    <span class="text-[9px] font-bold text-dode-accent tracking-[0.6em] mt-2 opacity-60">PRECISION GLASS
                        SYSTEMS</span>
                </a>
                <p class="text-pure-white/40 text-[10px] uppercase tracking-widest leading-loose font-bold max-w-sm">
                    Η κορυφαία επιλογή για αρχιτεκτονικές κατασκευές γυαλιού στα Δωδεκάνησα. Συνδυάζουμε την ασφάλεια
                    (Triplex/Securit) με την υψηλή αισθητική.
                </p>
                <div class="flex gap-6">
                    <a href="<?php echo esc_url(get_theme_mod('gg_social_fb', '#')); ?>"
                        class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-pure-white hover:bg-dode-accent hover:text-dode-navy transition-all duration-500">
                        <i data-lucide="facebook" class="w-4 h-4"></i>
                    </a>
                    <a href="<?php echo esc_url(get_theme_mod('gg_social_ig', '#')); ?>"
                        class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-pure-white hover:bg-dode-accent hover:text-dode-navy transition-all duration-500">
                        <i data-lucide="instagram" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>

            <!-- 2. Services Link Map -->
            <div class="lg:col-span-3">
                <h4 class="text-pure-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10 block">Services</h4>
                <ul class="space-y-4">
                    <li><a href="#services"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Υαλοπίνακες
                            Ασφαλείας</a></li>
                    <li><a href="#services"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Συστήματα
                            Minimal</a></li>
                    <li><a href="#services"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Γυάλινα
                            Κάγκελα</a></li>
                    <li><a href="#services"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Ειδικές
                            Κατασκευές</a></li>
                    <li><a href="#services"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Στεγανοποιήσεις</a>
                    </li>
                </ul>
            </div>

            <!-- 3. Navigation Map -->
            <div class="lg:col-span-2">
                <h4 class="text-pure-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10 block">Explore</h4>
                <ul class="space-y-4">
                    <li><a href="<?php echo esc_url(home_url('/about')); ?>"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Προφίλ</a>
                    </li>
                    <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Έργα</a>
                    </li>
                    <li><a href="<?php echo esc_url(home_url('/contact')); ?>"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Επικοινωνία</a>
                    </li>
                    <li><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>"
                            class="text-pure-white/40 hover:text-dode-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Privacy</a>
                    </li>
                </ul>
            </div>

            <!-- 4. Contact HQ -->
            <div class="lg:col-span-3">
                <h4 class="text-pure-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10 block">Contact HQ</h4>
                <div class="space-y-8">
                    <div class="flex gap-4">
                        <i data-lucide="map-pin" class="text-dode-accent w-4 h-4"></i>
                        <span
                            class="text-pure-white/80 text-[10px] font-bold uppercase tracking-widest leading-loose">P.O.
                            Box 85100, Rhodes<br />Dodecanese, Greece</span>
                    </div>
                    <div class="flex gap-4">
                        <i data-lucide="phone" class="text-dode-accent w-4 h-4"></i>
                        <span
                            class="text-pure-white/80 text-[10px] font-bold uppercase tracking-widest"><?php echo esc_html(get_option('gg_phone', '+30 22410 00000')); ?></span>
                    </div>
                    <div class="flex gap-4">
                        <i data-lucide="mail" class="text-dode-accent w-4 h-4"></i>
                        <span
                            class="text-pure-white/80 text-[10px] font-bold uppercase tracking-widest"><?php echo esc_html(get_option('gg_contact_email', 'info@dodekanisaglass.gr')); ?></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <span class="text-pure-white/20 text-[9px] font-bold uppercase tracking-[0.4em]">© <?php echo date('Y'); ?>
                DODEKANISA GLASS. ALL RIGHTS RESERVED.</span>
            <a href="#"
                class="group flex items-center gap-4 text-pure-white/40 hover:text-dode-accent transition-all duration-500"
                id="scroll-to-top">
                <span class="text-[9px] font-bold uppercase tracking-[0.5em]">Back to top</span>
                <div
                    class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-dode-accent group-hover:text-dode-navy transition-all duration-500">
                    <i data-lucide="arrow-up" class="w-4 h-4"></i>
                </div>
            </a>
        </div>
    </div>
</footer>
</div><!-- #page -->
<?php wp_footer(); ?>
<script>
    // Sticky Header & Scroll Top
    window.addEventListener('scroll', () => {
</html >