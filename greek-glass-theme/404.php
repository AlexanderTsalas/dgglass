<?php
/**
 * The template for displaying 404 pages (Not Found)
 */

get_header();
?>

<main class="min-h-screen bg-dode-navy flex items-center justify-center px-6">
    <div class="text-center stagger-entry">
        <h1 class="text-dode-accent text-[15vw] leading-none mb-8 opacity-20 stagger-item">404</h1>
        <div class="max-w-md mx-auto stagger-item">
            <h2 class="text-pure-white text-3xl mb-8 uppercase tracking-widest">Σελίδα μη Διαθέσιμη.</h2>
            <p class="text-pure-white/40 text-sm uppercase tracking-[0.3em] font-bold leading-loose mb-12">
                Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
            </p>
            <a href="<?php echo esc_url(home_url('/')); ?>"
                class="btn-dode btn-primary inline-flex items-center gap-4">
                ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ <i data-lucide="home" class="w-4 h-4"></i>
            </a>
        </div>
    </div>
</main>

<?php
get_footer();
