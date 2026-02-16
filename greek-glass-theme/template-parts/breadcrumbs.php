<?php
/**
 * Breadcrumbs template part
 */
?>

<nav class="flex px-6 py-8 max-w-[1800px] mx-auto text-concrete text-[9px] font-bold uppercase tracking-[0.3em] stagger-item"
    aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-4">
        <li class="inline-flex items-center">
            <a href="<?php echo esc_url(home_url('/')); ?>"
                class="hover:text-dode-accent transition-colors">HOME</a>
        </li>

        <?php if (is_archive() || is_single()): ?>
            <li class="flex items-center gap-4">
                <i data-lucide="chevron-right" class="w-3 h-3 text-dode-navy/20"></i>
                <?php if (is_post_type_archive('service') || is_singular('service')): ?>
                    <a href="<?php echo esc_url(get_post_type_archive_link('service')); ?>"
                        class="hover:text-dode-accent transition-colors">ΥΠΗΡΕΣΙΕΣ</a>
                <?php elseif (is_post_type_archive('portfolio') || is_singular('portfolio')): ?>
                    <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>"
                        class="hover:text-dode-accent transition-colors">ΕΡΓΑ</a>
                <?php endif; ?>
            </li>
        <?php endif; ?>

        <?php if (is_singular()): ?>
            <li class="flex items-center gap-4">
                <i data-lucide="chevron-right" class="w-3 h-3 text-dode-navy/20"></i>
                <span class="text-dode-navy">
                    <?php the_title(); ?>
                </span>
            </li>
        <?php endif; ?>

        <?php if (is_page() && !is_front_page()): ?>
            <li class="flex items-center gap-4">
                <i data-lucide="chevron-right" class="w-3 h-3 text-dode-navy/20"></i>
                <span class="text-dode-navy">
                    <?php the_title(); ?>
                </span>
            </li>
        <?php endif; ?>
    </ol>
</nav>