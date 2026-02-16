/* global lucide, gsap, ScrollTrigger, Lenis */
document.addEventListener('DOMContentLoaded', () => {
    console.log('DG Theme: Initializing Premium Experience...');

    // 0. Initialize Lenis (Smooth Scroll)
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Integrate Lenis with ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        
        // Remove duplicate ticker setup to avoid conflicts
        /*
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        */
    }

    // 1. Premium Split-Text & Section Reveals
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const revealElements = document.querySelectorAll('.stagger-item, .hero-animate, .glass-card');
        revealElements.forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'expo.out',
                delay: (i % 3) * 0.1
            });
        });

        // Special Header Reveal
        const headings = document.querySelectorAll('h1, h2');
        headings.forEach(heading => {
            const text = heading.innerText;
            if (!heading.querySelector('.inline-block')) {
                heading.innerHTML = text.split(' ').map(word => 
                    `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full transition-transform duration-[1200ms] ease-expo">${word}</span></span>`
                ).join(' ');
            }

            ScrollTrigger.create({
                trigger: heading,
                start: 'top 90%',
                onEnter: () => {
                    heading.querySelectorAll('span span').forEach((span, i) => {
                        setTimeout(() => {
                            span.classList.remove('translate-y-full');
                        }, i * 100);
                    });
                }
            });
        });
    }

    // 2. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 3. Magnetic Navigation Logic
    if (typeof gsap !== 'undefined') {
        const magneticElements = document.querySelectorAll('.group, .btn-dode');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(el, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
            });
        });
    }

    // 5. Spatial 3D Tilt for Cards
    if (typeof gsap !== 'undefined') {
        const cards = document.querySelectorAll('.glass-panel, .glass-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
    }

    // 7. Cinematic Background Animation (Floating Glass Shards)
    const bgContainer = document.getElementById('luxury-bg-canvas');
    if (bgContainer && typeof gsap !== 'undefined') {
        // Create subtle floating glass-like elements
        for (let i = 0; i < 8; i++) {
            const shard = document.createElement('div');
            shard.className = 'absolute border border-white/10 bg-white/5 backdrop-blur-xl pointer-events-none z-0';
            shard.style.width = gsap.utils.random(50, 150) + 'px';
            shard.style.height = gsap.utils.random(50, 150) + 'px';
            shard.style.transform = `rotate(${gsap.utils.random(0, 360)}deg)`;
            bgContainer.appendChild(shard);

            gsap.set(shard, {
                x: gsap.utils.random(0, window.innerWidth),
                y: gsap.utils.random(0, window.innerHeight),
                opacity: 0
            });

            gsap.to(shard, {
                x: `+=${gsap.utils.random(-100, 100)}`,
                y: `+=${gsap.utils.random(-100, 100)}`,
                rotation: `+=${gsap.utils.random(45, 180)}`,
                opacity: gsap.utils.random(0.05, 0.15),
                duration: gsap.utils.random(15, 25),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }

        // Aurora Beams
        for (let i = 0; i < 3; i++) {
            const beam = document.createElement('div');
            beam.className = 'absolute bg-dode-accent/10 rounded-full blur-[150px] pointer-events-none';
            beam.style.width = '80vw';
            beam.style.height = '80vw';
            bgContainer.appendChild(beam);

            gsap.set(beam, {
                x: gsap.utils.random(-200, window.innerWidth),
                y: gsap.utils.random(-200, window.innerHeight),
                scale: gsap.utils.random(0.8, 1.5),
                opacity: 0
            });

            gsap.to(beam, {
                opacity: 0.2,
                duration: gsap.utils.random(10, 15),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            gsap.to(beam, {
                x: `+=${gsap.utils.random(-300, 300)}`,
                y: `+=${gsap.utils.random(-300, 300)}`,
                duration: gsap.utils.random(20, 30),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }

    // 6. Mouse Parallax for Noise Overlay
    const noise = document.querySelector('.opacity-\\[0\\.03\\]');
    if (noise && typeof gsap !== 'undefined') {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gsap.to(noise, {
                x: x,
                y: y,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }
});
