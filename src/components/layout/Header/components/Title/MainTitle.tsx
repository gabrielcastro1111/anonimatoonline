import React from 'react';
import { Ninja } from 'lucide-react';
import { DeviceBadge } from '../DeviceSupport/DeviceBadge';

export function MainTitle() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Domine o Anonimato Online
        </h1>
        <Ninja 
          className="
            w-10 h-10 sm:w-12 sm:h-12 
            text-[#FF1A1A] 
            animate-pulse 
            drop-shadow-[0_0_8px_rgba(255,26,26,0.5)]
          " 
        />
      </div>
      
      <p className="text-lg sm:text-xl text-gray-400">
        Navegue com total liberdade e segurança em qualquer dispositivo
      </p>
      
      <DeviceBadge />
    </div>
  );
}