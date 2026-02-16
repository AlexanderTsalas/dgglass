<!-- section-clients.php -->
<section id="clients" class="section-padding bg-gray-50 border-y border-black/5 overflow-hidden">
    <div class="max-w-[1800px] mx-auto px-6">
        <div class="flex flex-col items-center text-center mb-24 stagger-entry">
            <span
                class="text-dode-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block stagger-item">Trusted
                Excellence</span>
            <h2 class="text-dode-navy uppercase tracking-tighter stagger-item">Οι <span
                    class="text-dode-accent">Συνεργάτες</span> μας.</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center stagger-entry">
            <?php
            // Using placeholder logos for high-end Greek hotels and brands
            $partners = [
                ['name' => 'Lindos Blu', 'slug' => 'lindos-blu'],
                ['name' => 'Mitsis Hotels', 'slug' => 'mitsis'],
                ['name' => 'Sheraton Rhodes', 'slug' => 'sheraton'],
                ['name' => 'Atrium Palace', 'slug' => 'atrium'],
                ['name' => 'Rodos Palace', 'slug' => 'rodos-palace'],
                ['name' => 'Princess Andriana', 'slug' => 'princess']
            ];

            foreach ($partners as $partner): ?>
                <div
                    class="stagger-item flex justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
                    <div class="text-dode-navy font-black text-xl italic tracking-tighter uppercase whitespace-nowrap">
                        <?php echo $partner['name']; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div
            class="mt-32 p-16 glass-panel border-dode-navy/5 flex flex-col lg:flex-row items-center justify-between gap-12 stagger-entry">
            <div class="stagger-item">
                <h3 class="text-dode-navy text-2xl font-bold uppercase tracking-tighter mb-4">Είστε Αρχιτέκτονας ή
                    Τεχνική Εταιρεία;</h3>
                <p class="text-concrete text-[10px] font-bold uppercase tracking-widest leading-loose">Προσφέρουμε
                    εξειδικευμένες λύσεις και προνομιακές τιμές για επαγγελματίες του κλάδου.</p>
            </div>
            <a href="#contact"
                class="stagger-item btn-dode border-2 border-dode-navy text-dode-navy hover:bg-dode-navy hover:text-pure-white transition-all">ΓΙΝΕΤΕ
                ΣΥΝΕΡΓΑΤΗΣ</a>
        </div>
    </div>
</section>