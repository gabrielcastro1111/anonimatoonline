import React from 'react';

export function Hero() {
  return (
    <div className="relative w-full h-[600px] mb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
        alt="Cybersecurity Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
      />
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}