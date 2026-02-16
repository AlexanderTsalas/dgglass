<?php
/**
 * Template Name: Full Width (Builder Ready)
 * Template Post Type: page, service
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()):
        the_post();
        the_content();
    endwhile;
    ?>
</main><!-- #main -->

<?php
get_footer();
