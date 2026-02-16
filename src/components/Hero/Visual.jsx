import React from 'react';

const HeroVisual = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-black">
    <div className="absolute inset-0 w-full h-full scale-150 transform">
      <iframe
        className="w-full h-full pointer-events-none opacity-80"
        src="https://www.youtube.com/embed/A8Kx99XYg5M?autoplay=1&mute=1&loop=1&playlist=A8Kx99XYg5M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
        title="Dodekanisa Glass Cinematic Background"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default HeroVisual;
