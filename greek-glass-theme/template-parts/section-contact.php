<!-- section-contact.php -->
<section id="contact" class="section-padding bg-pure-white">
    <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">

        <!-- Info Column -->
        <div class="space-y-12">
            <div>
                <span class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Get in
                    Touch</span>
                <h2 class="text-dode-navy mb-8">Σχεδιάστε την Επόμενη <br /> <span class="text-dode-accent">Κατασκευή
                        σας.</span></h2>
                <p class="text-concrete text-sm leading-relaxed uppercase tracking-widest font-bold max-w-sm">
                    Είμαστε στη διάθεσή σας για να συζητήσουμε τις ανάγκες σας και να σας προσφέρουμε την καλύτερη λύση
                    προϊόντος και εγκατάστασης.
                </p>
            </div>

            <div class="space-y-8">
                <?php
                $info = [
                    ['icon' => 'map-pin', 'title' => 'Διεύθυνση', 'content' => 'Ρόδος, Δωδεκάνησα, GR 85100'],
                    ['icon' => 'phone', 'title' => 'Τηλέφωνο', 'content' => '+30 22410 00000 / +30 690 000 0000'],
                    ['icon' => 'mail', 'title' => 'Email', 'content' => 'info@dodekanisaglass.gr'],
                    ['icon' => 'clock', 'title' => 'Ωράριο', 'content' => 'Δευ - Παρ: 08:30 - 16:30']
                ];
                foreach ($info as $item): ?>
                    <div class="flex gap-6 group">
                        <div
                            class="w-12 h-12 rounded-xl bg-dode-navy/5 flex items-center justify-center text-dode-navy group-hover:bg-dode-accent group-hover:text-pure-white transition-all duration-300 ease-expo">
                            <i data-lucide="<?php echo $item['icon']; ?>" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h4 class="text-[10px] font-bold uppercase tracking-widest text-concrete mb-1">
                                <?php echo $item['title']; ?>
                            </h4>
                            <p class="text-sm font-bold text-dode-navy">
                                <?php echo $item['content']; ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Form Column -->
        <div class="glass-panel p-12 md:p-16 border-dode-navy/5">
            <?php if (isset($_GET['submit']) && $_GET['submit'] == 'success'): ?>
                <div
                    class="mb-10 p-6 glass-panel border-dode-accent/20 bg-dode-accent/10 text-dode-navy font-bold uppercase tracking-widest text-xs animate-pulse">
                    ΕΥΧΑΡΙΣΤΟΥΜΕ! ΤΟ ΜΗΝΥΜΑ ΣΑΣ ΑΠΕΣΤΑΛΗ ΕΠΙΤΥΧΩΣ. ΘΑ ΕΠΙΚΟΙΝΩΝΗΣΟΥΜΕ ΜΑΖΙ ΣΑΣ ΣΥΝΤΟΜΑ.
                </div>
            <?php endif; ?>

            <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="space-y-10">
                <input type="hidden" name="action" value="gg_contact">
                <input type="hidden" name="gg_action" value="submit_inquiry">
                <?php wp_nonce_field('gg_contact_nonce'); ?>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="space-y-4">
                        <label
                            class="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Όνοματεπώνυμο</label>
                        <input type="text" name="gg_name" required
                            class="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy"
                            placeholder="John Doe">
                    </div>
                    <div class="space-y-4">
                        <label class="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Email</label>
                        <input type="email" name="gg_email" required
                            class="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy"
                            placeholder="john@example.com">
                    </div>
                </div>

                <div class="space-y-4">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Ενδιαφέρον
                        για</label>
                    <select name="gg_service"
                        class="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy">
                        <option value="Προϊόντα & Εγκατάσταση">Προϊόντα & Εγκατάσταση</option>
                        <option value="Μόνο Προϊόντα (Resale)">Μόνο Προϊόντα (Resale)</option>
                        <option value="Επισκευή / Στεγανοποίηση">Επισκευή / Στεγανοποίηση</option>
                        <option value="Άλλο">Άλλο</option>
                    </select>
                </div>

                <div class="space-y-4">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-dode-navy/40">Μήνυμα</label>
                    <textarea name="gg_message" rows="4" required
                        class="w-full bg-transparent border-b border-dode-navy/10 py-3 focus:border-dode-accent outline-none transition-colors duration-300 ease-expo text-sm font-bold text-dode-navy resize-none"
                        placeholder="Περιγράψτε το έργο σας..."></textarea>
                </div>

                <button type="submit" class="w-full btn-dode btn-primary flex items-center justify-center gap-4 group">
                    ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ <i data-lucide="send"
                        class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                </button>
            </form>
        </div>

    </div>
</section>