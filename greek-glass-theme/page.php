<?php
/**
 * The template for displaying all pages
 */

get_header();
?>
<?php get_template_part('template-parts/breadcrumbs'); ?>

<main class="pt-32 pb-20 bg-pure-white">
    <div class="max-w-[1400px] mx-auto px-6 stagger-entry">
        <?php
        while (have_posts()):
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="mb-16 stagger-item">
                    <span
                        class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Information</span>
                    <h1 class="text-dode-navy">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <div class="prose prose-lg max-w-4xl text-concrete stagger-item">
                    <?php the_content(); ?>
                </div>
            </article>
            <?php
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
