<?php
/**
 * Greek Glass Systems functions and definitions
 */

if (!function_exists('greek_glass_setup')):
    function greek_glass_setup()
    {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
        add_theme_support('align-wide');
        add_theme_support('editor-styles');
        add_theme_support('responsive-embeds');

        // Register Navigation Menus
        register_nav_menus(array(
            'menu-1' => esc_html__('Primary', 'greek-glass'),
        ));
    }
endif;
add_action('after_setup_theme', 'greek_glass_setup');

/**
 * Enqueue Block Editor Assets
 */
function greek_glass_editor_assets()
{
    // Inject Tailwind specifically for the editor to ensure "What You See Is What You Get"
    wp_enqueue_script('tailwind-cdn-editor', 'https://cdn.tailwindcss.com', array(), null, false);
}
add_action('enqueue_block_editor_assets', 'greek_glass_editor_assets');

/**
 * Register Custom Post Type: Services
 */
function greek_glass_register_services()
{
    $labels = array(
        'name' => _x('Υπηρεσίες', 'Post Type General Name', 'greek-glass'),
        'singular_name' => _x('Υπηρεσία', 'Post Type Singular Name', 'greek-glass'),
        'menu_name' => __('Υπηρεσίες', 'greek-glass'),
        'all_items' => __('Όλες οι Υπηρεσίες', 'greek-glass'),
        'add_new_item' => __('Προσθήκη Νέας Υπηρεσίας', 'greek-glass'),
        'add_new' => __('Προσθήκη Νέας', 'greek-glass'),
        'new_item' => __('Νέα Υπηρεσία', 'greek-glass'),
        'edit_item' => __('Επεξεργασία Υπηρεσίας', 'greek-glass'),
        'update_item' => __('Ενημέρωση Υπηρεσίας', 'greek-glass'),
        'view_item' => __('Προβολή Υπηρεσίας', 'greek-glass'),
        'search_items' => __('Αναζήτηση Υπηρεσίας', 'greek-glass'),
    );
    $args = array(
        'label' => __('Υπηρεσία', 'greek-glass'),
        'description' => __('Υπηρεσίες και Προϊόντα Γυαλιού', 'greek-glass'),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-admin-tools',
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'page',
        'show_in_rest' => true, // Enable Block Editor
    );
    register_post_type('service', $args);
}
add_action('init', 'greek_glass_register_services', 0);

/**
 * Register Custom Post Type: Portfolio (Cases)
 */
function greek_glass_register_portfolio()
{
    $labels = array(
        'name' => _x('Έργα', 'Post Type General Name', 'greek-glass'),
        'singular_name' => _x('Έργο', 'Post Type Singular Name', 'greek-glass'),
        'menu_name' => __('Έργα (Cases)', 'greek-glass'),
        'all_items' => __('Όλα τα Έργα', 'greek-glass'),
        'add_new_item' => __('Προσθήκη Νέου Έργου', 'greek-glass'),
        'add_new' => __('Προσθήκη Νέου', 'greek-glass'),
        'new_item' => __('Νέο Έργο', 'greek-glass'),
        'edit_item' => __('Επεξεργασία Έργου', 'greek-glass'),
        'update_item' => __('Ενημέρωση Έργου', 'greek-glass'),
        'view_item' => __('Προβολή Έργου', 'greek-glass'),
        'search_items' => __('Αναζήτηση Έργου', 'greek-glass'),
    );
    $args = array(
        'label' => __('Έργο', 'greek-glass'),
        'description' => __('Portfolio projects and case studies', 'greek-glass'),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 6,
        'menu_icon' => 'dashicons-portfolio',
        'show_in_rest' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'portfolio'),
    );
    register_post_type('portfolio', $args);
}
add_action('init', 'greek_glass_register_portfolio', 0);

/**
 * Register Custom Post Type: Inquiries (Dashboard Only)
 */
function greek_glass_register_inquiries()
{
    $labels = array(
        'name' => _x('Εισερχόμενα', 'Post Type General Name', 'greek-glass'),
        'singular_name' => _x('Εισερχόμενο', 'Post Type Singular Name', 'greek-glass'),
        'menu_name' => __('Εισερχόμενα', 'greek-glass'),
        'all_items' => __('Όλα τα Μηνύματα', 'greek-glass'),
    );
    $args = array(
        'label' => __('Εισερχόμενο', 'greek-glass'),
        'labels' => $labels,
        'supports' => array('title', 'editor'),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 20,
        'menu_icon' => 'dashicons-email-alt',
        'has_archive' => false,
        'capabilities' => array(
            'create_posts' => false, // Only system creates posts
        ),
        'map_meta_cap' => true,
    );
    register_post_type('inquiry', $args);
}
add_action('init', 'greek_glass_register_inquiries', 0);

/**
 * Theme Settings Page
 */
function greek_glass_settings_menu()
{
    add_menu_page(
        'Greek Glass Settings',
        'Theme Settings 🇬🇷',
        'manage_options',
        'greek-glass-settings',
        'greek_glass_settings_page',
        'dashicons-admin-generic',
        60
    );
}
add_action('admin_menu', 'greek_glass_settings_menu');

function greek_glass_settings_page()
{
    if (isset($_POST['gg_save'])) {
        update_option('gg_contact_email', sanitize_email($_POST['gg_contact_email']));
        update_option('gg_phone', sanitize_text_field($_POST['gg_phone']));
        update_option('gg_social_fb', esc_url_raw($_POST['gg_social_fb']));
        update_option('gg_social_ig', esc_url_raw($_POST['gg_social_ig']));
        echo '<div class="updated"><p>Settings saved!</p></div>';
    }
    $email = get_option('gg_contact_email', get_option('admin_email'));
    $phone = get_option('gg_phone', '+30 22410 12345');
    $fb = get_option('gg_social_fb', '#');
    $ig = get_option('gg_social_ig', '#');
    ?>
    <div class="wrap"
        style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-top: 30px; max-width: 800px;">
        <h1 style="color: #0A1A2F; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Dodekanisa Glass
            Configuration</h1>
        <p>Set your contact details below. These will reflect on the <strong>Contact Page</strong> and allow you to receive
            emails.</p>
        <form method="post" style="margin-top: 40px;">
            <table class="form-table">
                <tr>
                    <th scope="row">Recipient Email</th>
                    <td><input type="email" name="gg_contact_email" value="<?php echo esc_attr($email); ?>"
                            class="regular-text" style="padding: 10px;"></td>
                </tr>
                <tr>
                    <th scope="row">Public Phone Number</th>
                    <td><input type="text" name="gg_phone" value="<?php echo esc_attr($phone); ?>" class="regular-text"
                            style="padding: 10px;"></td>
                </tr>
                <tr>
                    <th scope="row">Facebook Link</th>
                    <td><input type="url" name="gg_social_fb" value="<?php echo esc_attr($fb); ?>" class="regular-text"
                            style="padding: 10px;"></td>
                </tr>
                <tr>
                    <th scope="row">Instagram Link</th>
                    <td><input type="url" name="gg_social_ig" value="<?php echo esc_attr($ig); ?>" class="regular-text"
                            style="padding: 10px;"></td>
                </tr>
            </table>
            <p class="submit" style="display: flex; gap: 20px;">
                <input type="submit" name="gg_save" class="button button-primary" value="Save Configuration"
                    style="background: #00E5FF; border: none; color: #0A1A2F; font-weight: 800; padding: 10px 30px; height: auto;">
                <input type="submit" name="gg_run_setup" class="button button-secondary" value="Re-Run Automated Setup"
                    style="padding: 10px 20px; height: auto;">
            </p>
        </form>

        <?php if (isset($_POST['gg_run_setup'])): ?>
            <div class="updated inline">
                <p>Setup engine executed successfully. Essential pages and sample content verified.</p>
            </div>
        <?php endif; ?>
    </div>
    <?php
}

/**
 * Contact Form Handler
 */
function greek_glass_handle_form()
{
    if (isset($_POST['gg_action']) && $_POST['gg_action'] === 'submit_inquiry') {
        $name = sanitize_text_field($_POST['gg_name']);
        $email = sanitize_email($_POST['gg_email']);
        $service = sanitize_text_field($_POST['gg_service']);
        $message = sanitize_textarea_field($_POST['gg_message']);

        // 1. Create Dashboard Entry
        $post_id = wp_insert_post(array(
            'post_title' => 'Inquiry from ' . $name,
            'post_content' => "Name: $name\nEmail: $email\nService: $service\n\nMessage:\n$message",
            'post_type' => 'inquiry',
            'post_status' => 'publish'
        ));

        // 2. Send Email
        if ($post_id) {
            $to = get_option('gg_contact_email', get_option('admin_email'));
            $subject = 'New Inquiry: ' . $service;
            $body = "You have a new submission from $name ($email).\n\nService: $service\nMessage:\n$message";
            wp_mail($to, $subject, $body);

            wp_redirect(add_query_arg('submit', 'success', $_POST['_wp_http_referer']));
            exit;
        }
    }

    // Handle Manual Setup Button
    if (isset($_POST['gg_run_setup'])) {
        greek_glass_seed_content(true);
    }
}
add_action('admin_init', 'greek_glass_handle_form');

/**
 * Automate Page and Content Seeding (Zero-Config)
 */
function greek_glass_seed_content($force = false)
{
    if (!$force && get_option('gg_setup_completed')) {
        return;
    }

    // 1. Define required pages with real content
    $pages = [
        'about' => [
            'title' => 'Προφίλ (About)',
            'template' => 'page-about.php',
            'content' => 'Η Dodekanisa Glass αποτελεί μια πρότυπη μονάδα επεξεργασίας υαλοπινάκων με έδρα τη Ρόδο, εξυπηρετώντας ολόκληρο το σύμπλεγμα των Δωδεκανήσων. Με μια πορεία που ξεπερνά τις τρεις δεκαετίες, έχουμε επενδύσει στην τεχνολογία και την εξειδίκευση, προσφέροντας λύσεις που συνδυάζουν την απόλυτη ασφάλεια με την υψηλή αρχιτεκτονική αισθητική. Η φιλοσοφία μας βασίζεται στην ποιότητα των υλικών (Triplex, Securit, Ενεργειακά κρύσταλλα) και στην ακρίβεια της τοποθέτησης.'
        ],
        'contact' => [
            'title' => 'Επικοινωνία (Contact)',
            'template' => 'page-contact.php',
            'content' => 'Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή τεχνική μελέτη αφορά το δικό σας έργο. Η ομάδα μας αναλαμβάνει από απλές οικιακές εφαρμογές μέχρι σύνθετες αρχιτεκτονικές κατασκευές σε ξενοδοχειακές μονάδες και επαγγελματικούς χώρους. Επικοινωνήστε μαζί μας για μια εξατομικευμένη προσφορά.'
        ],
        'portfolio' => [
            'title' => 'Έργα (Cases)',
            'content' => 'Ανακαλύψτε επιλεγμένα έργα μας σε Ρόδο, Κω, Κάλυμνο και σε όλα τα Δωδεκάνησα.'
        ],
        'services' => [
            'title' => 'Υπηρεσίες',
            'content' => 'Εξειδικευμένες λύσεις αρχιτεκτονικού γυαλιού για κάθε εφαρμογή.'
        ]
    ];

    foreach ($pages as $slug => $data) {
        $existing_page = get_page_by_path($slug);

        if (!$existing_page) {
            $page_id = wp_insert_post([
                'post_title' => $data['title'],
                'post_name' => $slug,
                'post_content' => $data['content'] ?? '',
                'post_status' => 'publish',
                'post_type' => 'page'
            ]);
        } else {
            $page_id = $existing_page->ID;
            // Update content if empty
            if (empty($existing_page->post_content) && isset($data['content'])) {
                wp_update_post([
                    'ID' => $page_id,
                    'post_content' => $data['content']
                ]);
            }
        }

        if ($page_id && isset($data['template'])) {
            update_post_meta($page_id, '_wp_page_template', $data['template']);
        }
    }

    // 2. Seed Sample Services (checks each title)
    // ... (rest of the logic remains the same but always runs)
    $sample_services = [
        'Υαλοπίνακες' => [
            'desc' => 'Κορυφαία ποιότητα υαλοπινάκων για κάθε οικιακή και επαγγελματική χρήση.',
            'icon' => 'layers'
        ],
        'Συρόμενες & Φυσούνες' => [
            'desc' => 'Minimal συστήματα συρόμενων θυρών για μέγιστη διαύγεια και άνοιγμα.',
            'icon' => 'maximize'
        ],
        'Γυάλινα Κάγκελα' => [
            'desc' => 'Ασφάλεια και αισθητική για μπαλκόνια και σκάλες με minimal σχεδιασμό.',
            'icon' => 'shield'
        ],
        'Ενεργειακοί Υαλοπίνακες' => [
            'desc' => 'Εξοικονόμηση ενέργειας και θερμομόνωση υψηλών προδιαγραφών.',
            'icon' => 'zap'
        ],
        'Επενδύσεις Γυαλιού' => [
            'desc' => 'Αρχιτεκτονικές επενδύσεις τοίχων με έγχρωμο ή διακοσμητικό γυαλί.',
            'icon' => 'palette'
        ],
        'Γυάλινες Πόρτες' => [
            'desc' => 'Εσωτερικές και εξωτερικές πόρτες με μηχανισμούς υψηλής αντοχής.',
            'icon' => 'door-open'
        ],
        'Γυάλινες Σκάλες' => [
            'desc' => 'Εντυπωσιακές κατασκευές σκάλας από δομικό triplex γυαλί.',
            'icon' => 'trending-up'
        ],
        'Βιτρίνες Καταστημάτων' => [
            'desc' => 'Σταθερές και ανοιγόμενες βιτρίνες με αντιγραφή και ασφάλεια.',
            'icon' => 'store'
        ],
        'Securit Glass' => [
            'desc' => 'Θερμικά σκληρυμένο γυαλί για μέγιστη αντοχή σε κρούση και θέρμανση.',
            'icon' => 'shield-alert'
        ],
        'Γυάλινα Δάπεδα' => [
            'desc' => 'Διάφανα δάπεδα υψηλής στατικότητας για μοναδική αρχιτεκτονική εμπειρία.',
            'icon' => 'grid'
        ],
        'Καμπίνες Ντους' => [
            'desc' => 'Custom κατασκευές για το μπάνιο σας με κρύσταλλα ασφαλείας.',
            'icon' => 'bath'
        ],
        'Καθρέπτες' => [
            'desc' => 'Καθρέπτες υψηλής διαύγειας, αντικέ ή έγχρωμοι για κάθε διακόσμηση.',
            'icon' => 'eye'
        ],
        'Στέγαστρα / Τέντες' => [
            'desc' => 'Γυάλινα στέγαστρα με ανοξείδωτα εξαρτήματα και triplex κρύσταλλα.',
            'icon' => 'umbrella'
        ],
        'Triplex Glass' => [
            'desc' => 'Πολυστρωματικοί υαλοπίνακες για ασφάλεια και ηχομόνωση.',
            'icon' => 'lock'
        ],
        'Στεγανοποιήσεις' => [
            'desc' => 'Επαγγελματική στεγανοποίηση υαλοπινάκων με υλικά κορυφαίας αντοχής.',
            'icon' => 'droplet'
        ],
        'Διαχωριστικά Γραφείων' => [
            'desc' => 'Λύσεις για σύγχρονους επαγγελματικούς χώρους με γυάλινα χωρίσματα.',
            'icon' => 'layout'
        ],
        'Διπλά Τζάμια' => [
            'desc' => 'Συστήματα διπλής και τριπλής υάλωσης για μέγιστη μόνωση.',
            'icon' => 'intersect'
        ]
    ];

    foreach ($sample_services as $title => $data) {
        $existing = get_page_by_title($title, OBJECT, 'service');
        if (!$existing) {
            $post_id = wp_insert_post([
                'post_title' => $title,
                'post_excerpt' => $data['desc'],
                'post_status' => 'publish',
                'post_type' => 'service'
            ]);
            if ($post_id) {
                update_post_meta($post_id, '_service_icon', $data['icon']);
            }
        }
    }

    // 3. Seed Sample Portfolio (checks each title)
    $sample_projects = [
        'Ξενοδοχείο Lindos Blu' => 'Πλήρης εγκατάσταση γυάλινων στηθαίων και καμπινών ντους στις σουίτες του ξενοδοχείου.',
        'Villa Rhodes Premium' => 'Ειδικές κατασκευές υαλοπινάκων μεγάλων διαστάσεων με ενεργειακή επίστρωση.',
        'Luxury Resort Kos' => 'Μίνιμαλ συστήματα συρόμενων θυρών και γυάλινα κάγκελα για απρόσκοπτη θέα.',
        'Εμπορικό Κέντρο Ρόδου' => 'Βιτρίνες καταστημάτων υψηλής ασφαλείας και γυάλινα στέγαστρα εισόδου.',
        'Ιδιωτική Κατοικία Κάλυμνος' => 'Δομικές γυάλινες σκάλες και δάπεδα υψηλής στατικότητας για εσωτερικούς χώρους.',
        'Boutique Hotel Symi' => 'Αποκατάσταση παραδοσιακών κουφωμάτων με σύγχρονους ενεργειακούς υαλοπίνακες.',
        'Professional Hub Karpathos' => 'Ολοκληρωμένες λύσεις διαχωριστικών γραφείων με ηχομονωτικά κρύσταλλα triplex.'
    ];

    foreach ($sample_projects as $title => $content) {
        $existing = get_page_by_title($title, OBJECT, 'portfolio');
        if (!$existing) {
            wp_insert_post([
                'post_title' => $title,
                'post_content' => $content,
                'post_status' => 'publish',
                'post_type' => 'portfolio'
            ]);
        }
    }
    wp_reset_postdata();

    // 4. Create and Assign Menu
    $menu_name = 'Primary Menu';
    $menu_exists = wp_get_nav_menu_object($menu_name);

    if (!$menu_exists) {
        $menu_id = wp_create_nav_menu($menu_name);

        // Add Pages to Menu
        $menu_items = [
            'Home' => home_url('/'),
            'About' => home_url('/about/'),
            'Services' => home_url('/services/'),
            'Portfolio' => home_url('/portfolio/'),
            'Contact' => home_url('/contact/')
        ];

        foreach ($menu_items as $title => $url) {
            wp_update_nav_menu_item($menu_id, 0, array(
                'menu-item-title' => __($title),
                'menu-item-url' => $url,
                'menu-item-status' => 'publish',
                'menu-item-type' => 'custom',
            ));
        }

        // Assign to Primary location
        $locations = get_theme_mod('nav_menu_locations');
        $locations['menu-1'] = $menu_id;
        set_theme_mod('nav_menu_locations', $locations);
    }

    // Flush rewrite rules for CPTs
    flush_rewrite_rules();

    // Mark as completed
    update_option('gg_setup_completed', true);
}
add_action('after_switch_theme', 'greek_glass_seed_content');
add_action('admin_init', function () {
    greek_glass_seed_content();
}); // Run once if missing even after switch

/**
 * Enqueue scripts and styles.
 */
function greek_glass_scripts()
{
    // 1. Theme Style (Standard metadata)
    wp_enqueue_style('greek-glass-style', get_stylesheet_uri(), array(), '1.1.0');

    // 2. CDNs - Tailwind & Google Fonts
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap', array(), null);

    // 3. Lucide Icons (CDN)
    wp_enqueue_script('lucide-cdn', 'https://unpkg.com/lucide@latest', array(), null, false);

    // 4. GSAP (CDN)
    wp_enqueue_script('gsap-core', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', array(), null, true);
    wp_enqueue_script('gsap-scroll-trigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js', array('gsap-core'), null, true);

    // 5. Three.js & Smooth Scroll (Lenis)
    wp_enqueue_script('three-js', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.173.0/three.min.js', array(), null, true);
    wp_enqueue_script('lenis', 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/dist/lenis.min.js', array(), null, true);

    // 6. Custom Theme JS
    wp_enqueue_script('greek-glass-three-hero', get_template_directory_uri() . '/js/three-hero.js', array('three-js', 'gsap-core'), '1.1.0', true);
    wp_enqueue_script('greek-glass-main-js', get_template_directory_uri() . '/js/main.js', array('gsap-core', 'gsap-scroll-trigger', 'lenis'), '1.1.0', true);
}
add_action('wp_enqueue_scripts', 'greek_glass_scripts');

/**
 * Auto-Seed Trigger: Ensures the site is never empty
 */
function greek_glass_auto_seed()
{
    // Check if services or portfolio are empty, and seed if so
    $services = get_posts(['post_type' => 'service', 'numberposts' => 1]);
    $portfolio = get_posts(['post_type' => 'portfolio', 'numberposts' => 1]);

    if (empty($services) || empty($portfolio)) {
        greek_glass_seed_content(true);
    }
}
// Run on both admin and front-end for zero-friction setup
add_action('admin_init', 'greek_glass_auto_seed');
add_action('template_redirect', function () {
    if (is_front_page()) {
        greek_glass_auto_seed();
    }
});

/**
 * 3D Typography & Luxury Spacing
 */
function greek_glass_luxury_typography()
{
    echo '<style>
        h1, h2 { letter-spacing: -0.05em; line-height: 0.9 !important; }
        .text-concrete { color: rgba(255,255,255,0.4); }
        .tracking-widest { letter-spacing: 0.4em !important; }
    </style>';
}
add_action('wp_head', 'greek_glass_luxury_typography');

/**
 * Configure Tailwind (Injecting custom design system)
 */
function greek_glass_tailwind_config()
{
    ?>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'dode-navy': 'var(--dode-navy, #0A1A2F)',
                        'dode-accent': 'var(--dode-accent, #00E5FF)',
                        'pure-white': '#FFFFFF',
                        'concrete': '#94A3B8',
                    },
                    fontFamily: {
                        sans: ['IBM Plex Sans', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
                                                                        body { @apply bg-white font-sans text-dode-navy; }
                                                                        h1 { @apply text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]; }
                                                                        h2 { @apply text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none; }
                                                                        .section-padding { @apply py-24 md:py-40 px-6; }
                                                                      }
                                                                      @layer components {
                                                                        .btn-dode { @apply px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-700 ease-expo; }
                                                        .btn-primary { @apply bg-dode-accent text-dode-navy hover:bg-pure-white transition-colors duration-700; }
                            
                                                        .glass-panel { 
                                                            @apply backdrop-blur-3xl border border-white/[0.05] transition-all duration-700 ease-expo;
                                                            background: linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.05) 100%);
                                                            box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -30px rgba(0,0,0,0.5);
                                                        }
                            
                                                        .glass-card { 
                                                            @apply backdrop-blur-2xl border border-white/[0.03] transition-all duration-500 ease-expo bg-white/[0.01];
                                                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                                                        }
                            
                                                        .glass-card:hover {
                                                            @apply bg-white/[0.03] border-white/[0.08];
                                                            transform: translateY(-8px);
                                                            box-shadow: 0 30px 60px -15px rgba(0,0,0,0.6);
                                                        }

                                                        .glass-dark { 
                                                            @apply bg-black/40 backdrop-blur-3xl border border-white/[0.03] shadow-2xl; 
                                                        }
                            
                                                        /* Razor-thin Border Utility */
                                                        .border-thin { border-width: 0.5px; }

                                                        /* Shimmer Effect */
                                                        .glass-shimmer {
                                                            position: relative;
                                                            overflow: hidden;
                                                        }
                                                        .glass-shimmer::before {
                                                            content: "";
                                                            position: absolute;
                                                            top: -50%;
                                                            left: -50%;
                                                            width: 200%;
                                                            height: 200%;
                                                            background: linear-gradient(
                                                                45deg,
                                                                transparent,
                                                                rgba(255,255,255,0.03),
                                                                transparent
                                                            );
                                                            transform: rotate(45deg);
                                                            transition: 0.7s;
                                                        }
                                                        .glass-shimmer:hover::before {
                                                            left: 100%;
                                                        }

                                                        .ease-expo { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
                                                                      }
                                                                      @keyframes float {
                                                                        0%, 100% { transform: translateY(0); }
                                                                        50% { transform: translateY(-20px); }
                                                                      }
                                                                      .animate-float { animation: float 6s ease-in-out infinite; }
                                                                    </style>
    <?php
}
add_action('wp_head', 'greek_glass_tailwind_config');

/**
 * Theme Customizer Integration
 */
function greek_glass_customize_register($wp_customize)
{
    // 1. Branding Section
    $wp_customize->add_section('gg_branding', [
        'title' => 'Site Branding 🇬🇷',
        'priority' => 30,
    ]);

    $wp_customize->add_setting('gg_logo_image', ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'gg_logo_image', [
        'label' => 'Upload Logo Image (Replaces Text)',
        'section' => 'gg_branding',
    ]));

    $wp_customize->add_setting('gg_logo_text', ['default' => 'DG', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gg_logo_text', [
        'label' => 'Logo Text fallback',
        'section' => 'gg_branding',
        'type' => 'text',
    ]);

    $wp_customize->add_setting('gg_logo_subtext', ['default' => 'PRECISION', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gg_logo_subtext', [
        'label' => 'Logo Subtext (Tagline)',
        'section' => 'gg_branding',
        'type' => 'text',
    ]);

    // 2. Section Manager (Visibility)
    $wp_customize->add_section('gg_sections', [
        'title' => 'Section Manager (Show/Hide)',
        'priority' => 31,
    ]);

    $sections = [
        'hero' => 'Hero', 
        'about' => 'About (Profile)', 
        'process' => 'Process (Workflow)',
        'services' => 'Services (Grid)', 
        'clients' => 'Clients (Logos)',
        'portfolio' => 'Portfolio (Cases)', 
        'contact' => 'Contact'
    ];
    foreach ($sections as $id => $label) {
        $wp_customize->add_setting("gg_show_$id", ['default' => true, 'sanitize_callback' => 'rest_sanitize_boolean']);
        $wp_customize->add_control("gg_show_$id", [
            'label' => "Show $label Section",
            'section' => 'gg_sections',
            'type' => 'checkbox',
        ]);
    }

    // 3. Color Palette Section
    $wp_customize->add_section('gg_colors', [
        'title' => 'Premium Color Palette',
        'priority' => 32,
    ]);

    $colors = [
        'gg_accent_color' => ['label' => 'Primary Accent', 'default' => '#00E5FF'],
        'gg_accent_secondary' => ['label' => 'Secondary Accent (Gradients)', 'default' => '#00B8D4'],
        'gg_menu_color' => ['label' => 'Navigation Menu Color', 'default' => '#FFFFFF'],
        'gg_navy_color' => ['label' => 'Background Navy', 'default' => '#0A1A2F'],
        'gg_border_color' => ['label' => 'Borders & Lines', 'default' => 'rgba(255,255,255,0.1)'],
    ];

    foreach ($colors as $id => $data) {
        $wp_customize->add_setting($id, ['default' => $data['default'], 'sanitize_callback' => 'sanitize_text_field']);
        $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, $id, [
            'label' => $data['label'],
            'section' => 'gg_colors',
        ]));
    }

    // 4. Content Integration (Expanded Hero)
    $wp_customize->add_section('gg_hero', [
        'title' => 'Hero Content',
        'priority' => 33,
    ]);

    $wp_customize->add_setting('gg_hero_heading', ['default' => 'Αρχιτεκτονικό Γυαλί <br /> <span class="text-dode-accent">& Δομικές Κατασκευές.</span>', 'sanitize_callback' => 'wp_kses_post']);
    $wp_customize->add_control('gg_hero_heading', [
        'label' => 'Hero Heading (HTML allowed)',
        'section' => 'gg_hero',
        'type' => 'textarea',
    ]);

    $wp_customize->add_setting('gg_hero_subheading', ['default' => 'Εξειδίκευση στην επεξεργασία και τοποθέτηση υαλοπινάκων κορυφαίας ποιότητας για έργα υψηλών προδιαγραφών.', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gg_hero_subheading', [
        'label' => 'Hero Subheading',
        'section' => 'gg_hero',
        'type' => 'textarea',
    ]);

    // 5. About Section Content
    $wp_customize->add_section('gg_about_content', [
        'title' => 'About Section Content',
        'priority' => 34,
    ]);

    $wp_customize->add_setting('gg_about_title', ['default' => 'Η Φιλοσοφία & η <span class="text-dode-accent">Ιστορία μας.</span>', 'sanitize_callback' => 'wp_kses_post']);
    $wp_customize->add_control('gg_about_title', [
        'label' => 'Section Title',
        'section' => 'gg_about_content',
        'type' => 'textarea',
    ]);

    $wp_customize->add_setting('gg_about_desc', ['default' => 'Με πάνω από 35 χρόνια εμπειρίας, η Dodekanisa Glass αποτελεί συνώνυμο της αξιοπιστίας και της καινοτομίας στον τομέα των υαλοπινάκων.', 'sanitize_callback' => 'sanitize_text_field']);
    $wp_customize->add_control('gg_about_desc', [
        'label' => 'Description',
        'section' => 'gg_about_content',
        'type' => 'textarea',
    ]);
    // 6. Services Section Content
    $wp_customize->add_section('gg_services_content', [
        'title' => 'Services Section Content',
        'priority' => 35,
    ]);

    $wp_customize->add_setting('gg_services_title', ['default' => 'Προϊόντα <br /> & <span class="text-dode-accent">Εφαρμογές.</span>', 'sanitize_callback' => 'wp_kses_post']);
    $wp_customize->add_control('gg_services_title', [
        'label' => 'Section Title (HTML allowed)',
        'section' => 'gg_services_content',
        'type' => 'textarea',
    ]);

    // 7. Portfolio Section Content
    $wp_customize->add_section('gg_portfolio_content', [
        'title' => 'Portfolio Section Content',
        'priority' => 36,
    ]);

    $wp_customize->add_setting('gg_portfolio_title', ['default' => 'Πρόσφατα <span class="text-dode-accent">Έργα.</span>', 'sanitize_callback' => 'wp_kses_post']);
    $wp_customize->add_control('gg_portfolio_title', [
        'label' => 'Section Title (HTML allowed)',
        'section' => 'gg_portfolio_content',
        'type' => 'textarea',
    ]);
}
add_action('customize_register', 'greek_glass_customize_register');
