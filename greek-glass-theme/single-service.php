<?php
/**
 * The template for displaying all single posts of 'service' CPT
 */

get_header();
?>

<main class="bg-pure-white stagger-entry">
    <?php
    while (have_posts()):
        the_post();
        ?>
        <section class="section-padding bg-dode-navy text-pure-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-20 bg-cover bg-center"
                style="background-image: url('<?php the_post_thumbnail_url('full'); ?>');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-dode-navy via-dode-navy/80 to-transparent"></div>

            <div class="max-w-[1800px] mx-auto px-6 stagger-entry">
                <?php get_template_part('template-parts/breadcrumbs'); ?>
                <header class="mb-24 stagger-item">
                    <span
                        class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block stagger-item">Υπηρεσίες
                        & Προϊόντα</span>
                    <h1 class="text-pure-white mb-8 stagger-item">
                        <?php the_title(); ?>
                    </h1>
                </header>
            </div>
        </section>

        <section class="section-padding px-6">
            <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                <div class="lg:col-span-8 stagger-item">
                    <div
                        class="prose prose-xl max-w-none text-concrete space-y-8 uppercase tracking-widest font-bold text-lg leading-relaxed">
                        <?php the_content(); ?>
                    </div>
                </div>

                <div class="lg:col-span-4 stagger-item">
                    <div class="sticky top-40 space-y-8">
                        <div class="glass-panel p-10 border-dode-navy/5">
                            <h3 class="text-dode-navy text-xl font-bold mb-6">ΕΝΔΙΑΦΕΡΟΜΑΙ</h3>
                            <p class="text-concrete text-sm mb-8 font-bold uppercase tracking-widest">Επικοινωνήστε μαζί μας
                                για μια δωρεάν μελέτη του χώρου σας.</p>
                            <a href="<?php echo esc_url(home_url('/#contact')); ?>"
                                class="btn-dode btn-primary w-full flex items-center justify-center gap-4">
                                ΕΠΙΚΟΙΝΩΝΙΑ <i data-lucide="send" class="w-4 h-4"></i>
                            </a>
                        </div>

                        <div class="glass-panel p-10 border-dode-navy/5 bg-dode-navy text-pure-white">
                            <h3 class="text-pure-white text-xl font-bold mb-6">ΤΕΧΝΙΚΑ</h3>
                            <ul class="space-y-4 text-xs font-bold uppercase tracking-widest text-pure-white/60">
                                <li class="flex items-center gap-3"><i data-lucide="check"
                                        class="text-dode-accent w-4 h-4"></i> Πιστοποιημένα Υλικά</li>
                                <li class="flex items-center gap-3"><i data-lucide="check"
                                        class="text-dode-accent w-4 h-4"></i> 10 Έτη Εγγύηση</li>
                                <li class="flex items-center gap-3"><i data-lucide="check"
                                        class="text-dode-accent w-4 h-4"></i> After-sales Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
