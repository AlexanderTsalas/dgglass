<!-- section-portfolio.php -->
<section id="portfolio" class="section-padding bg-gray-50">
    <div class="max-w-[1800px] mx-auto stagger-entry">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 stagger-item">
            <div>
                <span
                    class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Portfolio</span>
                <h2 class="text-dode-navy uppercase tracking-tighter">
                    <?php echo wp_kses_post(get_theme_mod('gg_portfolio_title', 'Πρόσφατα <span class="text-dode-accent">Έργα.</span>')); ?>
                </h2>
            </div>
            <a href="<?php echo esc_url(get_post_type_archive_link('portfolio')); ?>"
                class="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-dode-navy pb-2 hover:text-dode-accent hover:border-dode-accent transition-all">ΔΕΙΤΕ
                ΟΛΑ ΤΑ ΕΡΓΑ</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <?php
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $args = array(
                'post_type' => 'portfolio',
                'posts_per_page' => 6,
                'paged' => $paged
            );
            $portfolio_query = new WP_Query($args);

            if ($portfolio_query->have_posts()):
                $i = 1;
                while ($portfolio_query->have_posts()):
                    $portfolio_query->the_post();
                    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'large') ?: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000';
                    $location = get_post_meta(get_the_ID(), '_project_location', true) ?: 'Greece';
                    $type = get_the_excerpt() ?: 'Glass Installation';
                    ?>
                    <div class="stagger-item relative aspect-square overflow-hidden group cursor-pointer bg-dode-navy">
                        <img src="<?php echo esc_url($thumbnail_url); ?>" alt="<?php the_title_attribute(); ?>"
                            class="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-expo">
                        <div
                            class="absolute inset-0 bg-dode-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        </div>
                        <div
                            class="absolute inset-x-8 bottom-8 glass-dark p-8 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
                            <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-3">
                                <?php echo esc_html($type); ?>
                            </span>
                            <h4 class="text-pure-white text-2xl font-bold tracking-tight">
                                <?php the_title(); ?>
                            </h4>
                        </div>
                        <div
                            class="absolute top-8 right-8 w-12 h-12 glass-panel border-white/10 flex items-center justify-center text-pure-white text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-expo">
                            0<?php echo $i++; ?>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="absolute inset-0 z-20"></a>
                    </div>
                <?php endwhile;
                wp_reset_postdata();
            else:
                // Restore High-End Fallback Projects
                $portfolio_fallbacks = [
                    ['title' => 'Lindos Blu Luxury Hotel', 'type' => 'Glass Railings', 'img' => 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Rhodes Private Villa', 'type' => 'Minimal Sliders', 'img' => 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Boutique Resort Kos', 'type' => 'Custom Facades', 'img' => 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Symi Traditional Suites', 'type' => 'Energy Glass', 'img' => 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Commercial Hub Rhodes', 'type' => 'Safe Storefronts', 'img' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Private Estate Kalymnos', 'type' => 'Glass Floors', 'img' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000']
                ];
                $k = 1;
                foreach ($portfolio_fallbacks as $item): ?>
                    <div class="stagger-item relative aspect-square overflow-hidden group cursor-pointer bg-dode-navy">
                        <img src="<?php echo esc_url($item['img']); ?>" alt="<?php echo esc_attr($item['title']); ?>"
                            class="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-expo">
                        <div
                            class="absolute inset-x-8 bottom-8 glass-dark p-8 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
                            <span
                                class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-3"><?php echo $item['type']; ?></span>
                            <h4 class="text-pure-white text-2xl font-bold tracking-tight"><?php echo $item['title']; ?></h4>
                        </div>
                        <div
                            class="absolute top-8 right-8 w-12 h-12 glass-panel border-white/10 flex items-center justify-center text-pure-white text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-expo">
                            0<?php echo $k++; ?>
                        </div>
                    </div>
                <?php endforeach;
            endif; ?>
        </div>
    </div>
</section>