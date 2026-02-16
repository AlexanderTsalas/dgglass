<?php
/**
 * The template for displaying Portfolio archives (Cases)
 */

get_header();
?>

<main class="bg-dode-navy pt-40 pb-20">
    <div class="max-w-[1800px] mx-auto px-6 stagger-entry">
        <header class="mb-24 stagger-item">
            <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Case
                Studies</span>
            <h1 class="text-pure-white">Επιλεγμένα <br /> <span class="text-dode-accent">Έργα.</span></h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
            <?php
            if (have_posts()):
                while (have_posts()):
                    the_post();
                    ?>
                    <article class="stagger-item group relative h-[700px] overflow-hidden">
                        <!-- Image -->
                        <div class="absolute inset-0 z-0">
                            <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>"
                                class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-expo">
                            <div class="absolute inset-0 bg-gradient-to-t from-dode-navy via-dode-navy/20 to-transparent"></div>
                        </div>

                        <!-- Info Overlay -->
                        <div class="absolute inset-0 z-10 p-16 flex flex-col justify-end">
                            <span
                                class="text-dode-accent text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">Premium
                                Project</span>
                            <h3
                                class="text-pure-white text-3xl font-bold uppercase tracking-tight mb-8 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-75">
                                <?php the_title(); ?>
                            </h3>

                            <div
                                class="flex items-center gap-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                                <a href="<?php the_permalink(); ?>"
                                    class="btn-dode border border-white/20 text-pure-white hover:bg-pure-white hover:text-dode-navy">ΠΡΟΒΟΛΗ
                                    CASE STUDY</a>
                            </div>
                        </div>
                    </article>
                    <?php
                endwhile;
            else:
                ?>
                <div class="col-span-full py-20 bg-white/5 p-12 glass-panel border-white/5">
                    <p class="text-pure-white/40 uppercase tracking-widest font-bold">Δεν έχουν προστεθεί έργα ακόμα.
                        Προσθέστε από το μενού **Έργα (Cases)**.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php
get_footer();
