<?php
/**
 * The template for displaying single Portfolio posts (Case Studies)
 */

get_header();
?>

<main class="bg-pure-white stagger-entry">
    <?php
    while (have_posts()):
        the_post();
        ?>
        <!-- Cinematic Header -->
        <section class="h-screen relative flex items-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>"
                    class="w-full h-full object-cover grayscale opacity-50">
                <div class="absolute inset-0 bg-gradient-to-t from-dode-navy via-dode-navy/20 to-transparent"></div>
            </div>

            <div class="max-w-[1800px] mx-auto px-6 relative z-10 w-full">
                <div class="max-w-4xl">
                    <span
                        class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block stagger-item">Case
                        Study</span>
                    <h1 class="text-pure-white mb-12 stagger-item">
                        <?php the_title(); ?>
                    </h1>
                    <div class="w-20 h-[2px] bg-dode-accent stagger-item"></div>
                </div>
            </div>

            <!-- Stats Ribbon -->
            <div class="absolute bottom-0 left-0 right-0 glass-dark py-12 border-t border-white/10 z-20">
                <div class="max-w-[1800px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <span
                            class="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-2 block">Location</span>
                        <span class="text-white text-xs font-bold uppercase tracking-widest">
                            <?php echo get_post_meta(get_the_ID(), '_case_location', true) ?: 'Greece'; ?>
                        </span>
                    </div>
                    <div>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-2 block">Type</span>
                        <span class="text-white text-xs font-bold uppercase tracking-widest">
                            <?php echo get_post_meta(get_the_ID(), '_case_type', true) ?: 'Architectural'; ?>
                        </span>
                    </div>
                    <div>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-2 block">Client</span>
                        <span class="text-white text-xs font-bold uppercase tracking-widest">
                            <?php echo get_post_meta(get_the_ID(), '_case_client', true) ?: 'Private'; ?>
                        </span>
                    </div>
                    <div>
                        <span class="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-2 block">Status</span>
                        <span class="text-white text-xs font-bold uppercase tracking-widest">Completed</span>
                    </div>
                </div>
            </div>
        </section>

        <?php get_template_part('template-parts/breadcrumbs'); ?>

        <!-- Narrative Section -->
        <section class="section-padding px-6">
            <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
                <div
                    class="lg:col-span-7 stagger-item text-concrete text-lg uppercase tracking-widest font-bold leading-relaxed space-y-12">
                    <?php the_content(); ?>
                </div>

                <div class="lg:col-span-5 stagger-item">
                    <div class="glass-panel p-12 border-dode-navy/5">
                        <h3 class="text-dode-navy text-xl font-bold mb-10 uppercase tracking-widest">Τεχνική Προσέγγιση</h3>
                        <p class="text-concrete text-xs font-bold leading-loose uppercase tracking-[0.2em] mb-12">
                            Σε αυτό το έργο, επικεντρωθήκαμε στην απόλυτη ισορροπία μεταξύ στατικής επάρκειας και οπτικής
                            διαφάνειας, χρησιμοποιώντας κρύσταλλα triplex securit 10+10mm.
                        </p>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>"
                            class="btn-dode btn-primary w-full flex items-center justify-center gap-4">
                            ΣΥΖΗΤΗΣΤΕ ΤΟ ΔΙΚΟ ΣΑΣ ΕΡΓΟ <i data-lucide="message-square" class="w-4 h-4"></i>
                        </a>
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
