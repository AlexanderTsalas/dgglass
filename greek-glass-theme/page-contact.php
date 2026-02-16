<?php
/**
 * Template Name: Contact Page (Greek)
 * Template Post Type: page
 */

get_header();
?>

<main class="bg-pure-white stagger-entry">
    <!-- Header Section -->
    <section class="section-padding bg-dode-navy text-pure-white relative overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-dode-accent/10 rounded-full blur-[150px]"></div>
        </div>
        <div class="max-w-[1800px] mx-auto px-6 relative z-10 mt-20">
            <span
                class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block stagger-item">Επικοινωνία</span>
            <h1 class="text-pure-white mb-8 stagger-item">Ας Δημιουργήσουμε <br /> Κάτι <span
                    class="text-dode-accent">Μοναδικό.</span></h1>
        </div>
    </section>

    <!-- Main Contact Grid -->
    <section class="section-padding px-6">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">

            <!-- Info Column -->
            <div class="lg:col-span-5 stagger-item">
                <div class="space-y-16">
                    <div>
                        <h3 class="text-dode-navy text-2xl font-bold mb-8 uppercase tracking-widest">Στοιχεία
                            Επικοινωνίας</h3>
                        <div class="space-y-12">
                            <div class="flex items-start gap-8 group">
                                <div
                                    class="w-12 h-12 glass-panel border-dode-navy/5 flex items-center justify-center group-hover:bg-dode-navy group-hover:text-pure-white transition-all duration-500">
                                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <span
                                        class="text-concrete text-[10px] font-bold uppercase tracking-widest block mb-2">Διεύθυνση</span>
                                    <p class="text-dode-navy font-bold uppercase tracking-wider">Λεωφόρος Ρόδου-Λίνδου,
                                        Ρόδος 85100</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-8 group">
                                <div
                                    class="w-12 h-12 glass-panel border-dode-navy/5 flex items-center justify-center group-hover:bg-dode-navy group-hover:text-pure-white transition-all duration-500">
                                    <i data-lucide="phone" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <span
                                        class="text-concrete text-[10px] font-bold uppercase tracking-widest block mb-2">Τηλέφωνο</span>
                                    <p class="text-dode-navy font-bold uppercase tracking-wider">+30 22410 12345</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-8 group">
                                <div
                                    class="w-12 h-12 glass-panel border-dode-navy/5 flex items-center justify-center group-hover:bg-dode-navy group-hover:text-pure-white transition-all duration-500">
                                    <i data-lucide="mail" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <span
                                        class="text-concrete text-[10px] font-bold uppercase tracking-widest block mb-2">Email</span>
                                    <p class="text-dode-navy font-bold uppercase tracking-wider">info@greekglass.gr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-16 border-t border-dode-navy/5">
                        <h4 class="text-dode-navy text-xl font-bold mb-6 uppercase tracking-widest">Ωράριο Λειτουργίας
                        </h4>
                        <ul class="space-y-4 text-xs font-bold uppercase tracking-widest text-concrete">
                            <li class="flex justify-between border-b border-dode-navy/5 pb-4"><span>Δευτέρα -
                                    Παρασκευή</span> <span class="text-dode-navy">08:00 - 16:00</span></li>
                            <li class="flex justify-between border-b border-dode-navy/5 pb-4"><span>Σάββατο</span> <span
                                    class="text-dode-navy">09:00 - 14:00</span></li>
                            <li class="flex justify-between"><span>Κυριακή</span> <span
                                    class="text-dode-navy">Κλειστά</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Form Column -->
            <div class="lg:col-span-7 stagger-item">
                <div class="glass-panel p-12 border-dode-navy/5">
                    <?php if (isset($_GET['submit']) && $_GET['submit'] == 'success'): ?>
                        <div
                            class="mb-10 p-6 glass-panel border-dode-accent/20 bg-dode-accent/10 text-dode-navy font-bold uppercase tracking-widest text-xs animate-pulse">
                            ΕΥΧΑΡΙΣΤΟΥΜΕ! ΤΟ ΜΗΝΥΜΑ ΣΑΣ ΑΠΕΣΤΑΛΗ ΕΠΙΤΥΧΩΣ. ΘΑ ΕΠΙΚΟΙΝΩΝΗΣΟΥΜΕ ΜΑΖΙ ΣΑΣ ΣΥΝΤΟΜΑ.
                        </div>
                    <?php endif; ?>

                    <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post"
                        class="space-y-10">
                        <input type="hidden" name="action" value="gg_contact">
                        <input type="hidden" name="gg_action" value="submit_inquiry">
                        <?php wp_nonce_field('gg_contact_nonce'); ?>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div class="space-y-4">
                                <label
                                    class="text-[10px] font-bold uppercase tracking-widest text-concrete block pl-4">Όνομα</label>
                                <input type="text" name="gg_name" required
                                    class="w-full bg-transparent border-b border-dode-navy/10 py-4 px-4 focus:border-dode-accent outline-none text-dode-navy font-bold uppercase tracking-widest transition-colors">
                            </div>
                            <div class="space-y-4">
                                <label
                                    class="text-[10px] font-bold uppercase tracking-widest text-concrete block pl-4">Email</label>
                                <input type="email" name="gg_email" required
                                    class="w-full bg-transparent border-b border-dode-navy/10 py-4 px-4 focus:border-dode-accent outline-none text-dode-navy font-bold uppercase tracking-widest transition-colors">
                            </div>
                        </div>
                        <div class="space-y-4">
                            <label
                                class="text-[10px] font-bold uppercase tracking-widest text-concrete block pl-4">Υπηρεσία
                                που σας ενδιαφέρει</label>
                            <select name="gg_service"
                                class="w-full bg-transparent border-b border-dode-navy/10 py-4 px-4 focus:border-dode-accent outline-none text-dode-navy font-bold uppercase tracking-widest transition-colors appearance-none">
                                <option value="Υαλοπίνακες">Υαλοπίνακες</option>
                                <option value="Συρόμενα Συστήματα">Συρόμενα Συστήματα</option>
                                <option value="Γυάλινα Κάγκελα">Γυάλινα Κάγκελα</option>
                                <option value="Καμπίνες Ντους">Καμπίνες Ντους</option>
                                <option value="Άλλο">Άλλο</option>
                            </select>
                        </div>
                        <div class="space-y-4">
                            <label
                                class="text-[10px] font-bold uppercase tracking-widest text-concrete block pl-4">Μήνυμα</label>
                            <textarea name="gg_message" rows="4" required
                                class="w-full bg-transparent border border-dode-navy/10 p-6 focus:border-dode-accent outline-none text-dode-navy font-bold uppercase tracking-widest transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit"
                            class="btn-dode btn-primary w-full flex items-center justify-center gap-6">
                            ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ <i data-lucide="send" class="w-4 h-4"></i>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </section>

    <!-- Map Placeholder -->
    <section class="h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 bg-concrete/20 relative">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center p-12 glass-dark border-white/10 max-w-sm">
                <i data-lucide="map-pin" class="w-12 h-12 text-dode-accent mx-auto mb-6"></i>
                <h3 class="text-pure-white text-xl font-bold mb-4 uppercase tracking-widest leading-tight">Βρείτε μας
                    στον χάρτη</h3>
                <p class="text-pure-white/40 text-[9px] font-bold uppercase tracking-widest">Τοποθετήστε εδώ το Google
                    Maps Embed Code</p>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
