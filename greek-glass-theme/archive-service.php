<?php
/**
 * The template for displaying Service archives
 */

get_header();
?>

<main class="bg-pure-white pt-40 pb-20">
    <div class="max-w-[1800px] mx-auto px-6 stagger-entry">
        <header class="mb-24 stagger-item">
            <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Catalog</span>
            <h1 class="text-dode-navy">Υπηρεσίες <br /> & <span class="text-dode-accent">Προϊόντα.</span></h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <?php
            if (have_posts()):
                while (have_posts()):
                    the_post();
                    $icon = get_post_meta(get_the_ID(), '_service_icon', true) ?: 'layers';
                    ?>
                    <div
                        class="stagger-item glass-panel p-12 hover:border-dode-accent/40 transition-all duration-500 group border-dode-navy/5">
                        <i data-lucide="<?php echo esc_attr($icon); ?>"
                            class="w-10 h-10 text-dode-navy group-hover:text-dode-accent mb-12 transition-colors"></i>
                        <h3 class="text-dode-navy text-2xl font-bold mb-6 uppercase tracking-tighter">
                            <?php the_title(); ?>
                        </h3>
                        <p class="text-concrete text-xs font-bold uppercase tracking-widest leading-loose mb-10 line-clamp-3">
                            <?php echo get_the_excerpt(); ?>
                        </p>
                        <a href="<?php the_permalink(); ?>"
                            class="btn-dode border border-dode-navy/10 group-hover:border-dode-accent flex items-center justify-center gap-4 text-[10px]">
                            ΠΕΡΙΣΣΟΤΕΡΑ <i data-lucide="arrow-right" class="w-4 h-4 translate-y-[1px]"></i>
                        </a>
                    </div>
                    <?php
                endwhile;
            else:
                echo '<p class="text-concrete uppercase tracking-widest font-bold">Δεν βρέθηκαν υπηρεσίες.</p>';
            endif;
            ?>
        </div>
    </div>
</main>

<?php
get_footer();
