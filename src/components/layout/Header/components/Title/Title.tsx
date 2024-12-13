import React from 'react';
import { MainTitle } from '../MainTitle/MainTitle';
import { AnimatedTitle } from '../AnimatedTitle/AnimatedTitle';
import { TitleBadge } from '../TitleBadge/TitleBadge';
import { DeviceCompatibility } from '../DeviceCompatibility/DeviceCompatibility';

interface TitleProps {
  isVisible: boolean;
}

export function Title({ isVisible }: TitleProps) {
  return (
    <div 
      className={`
        transform transition-all duration-1000 delay-400 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <TitleBadge />
      
      <div className="flex flex-col items-center space-y-6">
        <MainTitle />

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
          Navegue com total liberdade e segurança, protegido por tecnologias de ponta
        </p>

        <div className="relative mt-4">
          <AnimatedTitle />
        </div>
      </div>

      <DeviceCompatibility />
    </div>
  );
}