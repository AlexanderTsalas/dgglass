<?php
/**
 * The Front Page template file
 */

get_header();

echo '<main>';

// 1. Hero
if (get_theme_mod('gg_show_hero', true)) {
    get_template_part('template-parts/section-hero');
}

// 1.5 About (Profile)
if (get_theme_mod('gg_show_about', true)) {
    get_template_part('template-parts/section-about');
}

// 1.6 Process (New)
if (get_theme_mod('gg_show_process', true)) {
    get_template_part('template-parts/section-process');
}

// 2. Services
if (get_theme_mod('gg_show_services', true)) {
    get_template_part('template-parts/section-services');
}

// 2.5 Clients (New)
if (get_theme_mod('gg_show_clients', true)) {
    get_template_part('template-parts/section-clients');
}

// 3. Portfolio
if (get_theme_mod('gg_show_portfolio', true)) {
    get_template_part('template-parts/section-portfolio');
}

// 4. Contact (Inquiry)
if (get_theme_mod('gg_show_contact', true)) {
    get_template_part('template-parts/section-contact');
}

echo '</main>';

get_footer();
