import React from 'react';
import { Lock } from 'lucide-react';

interface SubtitleProps {
  isVisible: boolean;
}

export function Subtitle({ isVisible }: SubtitleProps) {
  return (
    <div 
      className={`
        transform transition-all duration-1000 delay-800 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#FF1A1A]" />
          <p className="text-lg sm:text-xl font-medium text-white">
            Uma Única Solução para Todos os Dispositivos
          </p>
        </div>
        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto">
          Proteja todos os seus aparelhos com nossa suite completa de segurança
        </p>
      </div>
    </div>
  );
}