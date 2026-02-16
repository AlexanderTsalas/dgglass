/* global THREE, gsap */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-hero-container');
    if (!container) return;

    if (typeof THREE === 'undefined') {
        console.error('DG Theme: Three.js not loaded.');
        return;
    }

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    } else if (THREE.sRGBEncoding) {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }
    
    container.appendChild(renderer.domElement);

    // 2. Advanced Geometry - Generative Glass Sculpture
    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.OctahedronGeometry(1.2, 12);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x00E5FF,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 1.0, 
        thickness: 2.0,
        ior: 1.5,
        transparent: true,
        opacity: 0.6,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const shards = [];
    const shardGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.02);
    const shardMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1,
        thickness: 0.5,
        roughness: 0,
        metalness: 0,
        transparent: true,
        opacity: 0.3
    });

    for (let i = 0; i < 40; i++) {
        const shard = new THREE.Mesh(shardGeometry, shardMaterial);
        const ratio = i / 40;
        const angle = ratio * Math.PI * 2;
        shard.position.set(
            Math.cos(angle) * (1.5 + Math.random() * 0.5),
            (Math.random() - 0.5) * 3,
            Math.sin(angle) * (1.5 + Math.random() * 0.5)
        );
        shard.rotation.set(Math.random(), Math.random(), Math.random());
        group.add(shard);
        shards.push(shard);
    }

    // 3. Lights
    const ambLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambLight);

    const mainLight = new THREE.DirectionalLight(0x00E5FF, 2);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.5);
    rimLight.position.set(-5, -2, -5);
    scene.add(rimLight);

    camera.position.z = 3.5;
    
    if (window.innerWidth > 1024) {
        group.position.x = 0.8; 
    }

    // 4. Animation
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    const animate = () => {
        requestAnimationFrame(animate);

        core.rotation.y += 0.005;
        core.rotation.x += 0.002;

        group.rotation.y += (targetX - group.rotation.y) * 0.05;
        group.rotation.x += (targetY - group.rotation.x) * 0.05;

        shards.forEach((shard, i) => {
            shard.rotation.x += 0.01;
            shard.rotation.y += 0.005;
            shard.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        });

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        if (container.clientWidth && container.clientHeight) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            
            if (window.innerWidth > 1024) {
                group.position.x = 0.8;
            } else {
                group.position.x = 0;
            }
        }
    });
});
