<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <!-- SEO & Social Meta Tags -->
    <?php
    $description = get_bloginfo('description', 'display');
    if (is_single() || is_page()) {
        $post_excerpt = get_the_excerpt();
        if ($post_excerpt)
            $description = $post_excerpt;
    }
    ?>
    <meta name="description" content="<?php echo esc_attr($description); ?>">

    <!-- Open Graph -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right');
    bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo esc_attr($description); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
    <?php if (has_post_thumbnail()): ?>
        <meta property="og:image" content="<?php echo esc_url(get_the_post_thumbnail_url(null, 'large')); ?>">
    <?php endif; ?>

    <?php wp_head(); ?>
    <style>
        :root {
            --dode-accent:
                <?php echo get_theme_mod('gg_accent_color', '#00E5FF'); ?>
            ;
            --dode-accent-secondary:
                <?php echo get_theme_mod('gg_accent_secondary', '#00B8D4'); ?>
            ;
            --dode-menu-accent:
                <?php echo get_theme_mod('gg_menu_color', '#FFFFFF'); ?>
            ;
            --dode-navy:
                <?php echo get_theme_mod('gg_navy_color', '#0A1A2F'); ?>
            ;
            --dode-border:
                <?php echo get_theme_mod('gg_border_color', 'rgba(255,255,255,0.1)'); ?>
            ;
        }
    </style>
</head>

<body <?php body_class('antialiased bg-dode-navy selection:bg-dode-accent selection:text-dode-navy'); ?>>
    <?php wp_body_open(); ?>

    <div id="page" class="site overflow-hidden">
        <!-- Luxury Noise Overlay -->
        <div class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
            style="background-image: url('https://www.transparenttextures.com/patterns/pinstriped-suit.png');"></div>

        <!-- Cinematic Background Animation -->
        <div id="luxury-bg-canvas" class="fixed inset-0 pointer-events-none z-0"></div>

        <!-- Premium Navigation -->
        <nav class="fixed top-0 inset-x-0 z-[1000] px-6 py-6 transition-all duration-500 bg-transparent"
            id="site-navigation">
            <div class="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
                <!-- 1. Logo (Left) -->
                <div class="flex justify-start">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex flex-col group">
                        <?php
                        $logo_img = get_theme_mod('gg_logo_image');
                        if ($logo_img): ?>
                            <img src="<?php echo esc_url($logo_img); ?>" alt="<?php bloginfo('name'); ?>"
                                class="h-10 w-auto object-contain">
                        <?php else: ?>
                            <span class="text-3xl font-black text-pure-white leading-none tracking-tighter">
                                <?php echo esc_html(get_theme_mod('gg_logo_text', 'DG')); ?>
                            </span>
                            <span
                                class="text-[8px] font-bold text-dode-accent tracking-[0.5em] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                <?php echo esc_html(get_theme_mod('gg_logo_subtext', 'PRECISION')); ?>
                            </span>
                        <?php endif; ?>
                    </a>
                </div>

                <!-- 2. Menu (Center) -->
                <div class="hidden lg:flex justify-center items-center">
                    <style>
                        /* Premium Dropdown Support */
                        #primary-menu .menu-item-has-children {
                            @apply relative flex items-center gap-2;
                        }

                        #primary-menu .sub-menu {
                            @apply absolute top-full left-0 mt-4 min-w-[240px] glass-dark p-6 opacity-0 invisible translate-y-4 transition-all duration-300 z-[1001];
                        }

                        #primary-menu .menu-item-has-children:hover>.sub-menu {
                            @apply opacity-100 invisible translate-y-0 visible;
                        }

                        #primary-menu a,
                        #primary-menu .sub-menu a {
                            @apply text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500;
                            color: var(--dode-menu-accent, #FFFFFF);
                            opacity: 0.8;
                        }

                        #primary-menu a:hover {
                            @apply opacity-100;
                            color: var(--dode-accent);
                            text-shadow: 0 0 20px var(--dode-accent);
                        }

                        #primary-menu .sub-menu a {
                            @apply block py-3 border-b border-white/5;
                        }
                    </style>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'menu-1',
                        'menu_id' => 'primary-menu',
                        'container' => false,
                        'items_wrap' => '<ul id="%1$s" class="%2$s flex items-center gap-8">%3$s</ul>',
                        'fallback_cb' => '__return_false',
                    ));

                    if (!has_nav_menu('menu-1')): ?>
                        <div class="flex items-center gap-8">
                            <a href="<?php echo esc_url(home_url('/about')); ?>"
                                class="text-[10px] font-bold text-pure-white/90 uppercase tracking-[0.3em] hover:text-dode-accent transition-colors">ΠΡΟΦΙΛ</a>
                            <a href="<?php echo esc_url(home_url('/services')); ?>"
                                class="text-[10px] font-bold text-pure-white/90 uppercase tracking-[0.3em] hover:text-dode-accent transition-colors">ΥΠΗΡΕΣΙΕΣ</a>
                            <a href="<?php echo esc_url(home_url('/portfolio')); ?>"
                                class="text-[10px] font-bold text-pure-white/90 uppercase tracking-[0.3em] hover:text-dode-accent transition-colors">ΕΡΓΑ</a>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- 3. Actions (Right) -->
                <div class="flex justify-end items-center gap-6">
                    <a href="<?php echo esc_url(home_url('/contact')); ?>"
                        class="hidden lg:inline-block btn-dode border border-pure-white/20 text-pure-white hover:bg-pure-white hover:text-dode-navy px-8 py-3 translate-y-0 hover:-translate-y-1 transition-all">ΕΠΙΚΟΙΙΝΩΝΙΑ</a>

                    <button class="lg:hidden text-pure-white p-2">
                        <i data-lucide="align-right" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </nav>