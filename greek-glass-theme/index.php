<?php
/**
 * The main template file
 */

get_header();

echo '<main>';

// 1. Hero
get_template_part('template-parts/section-hero');

// 1.5 About (Profile)
get_template_part('template-parts/section-about');

// 2. Services
get_template_part('template-parts/section-services');

// 3. Portfolio
get_template_part('template-parts/section-portfolio');

// 4. Contact (Inquiry)
get_template_part('template-parts/section-contact');

echo '</main>';

get_footer();
