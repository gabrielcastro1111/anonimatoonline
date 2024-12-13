import React from 'react';
import { Ninja } from 'lucide-react';

export function MainTitle() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        <span className="inline-flex items-center">
          <Ninja 
            className="
              w-10 h-10 sm:w-12 sm:h-12 
              text-[#FF1A1A] 
              animate-pulse 
              drop-shadow-[0_0_8px_rgba(255,26,26,0.5)]
              mr-4
            " 
          />
          Domine o Anonimato Online
        </span>
      </h1>
    </div>
  );
}