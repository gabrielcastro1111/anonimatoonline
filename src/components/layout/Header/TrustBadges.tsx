import React from 'react';
import { Shield, Lock, Devices } from 'lucide-react';

interface TrustBadgesProps {
  isVisible: boolean;
}

export function TrustBadges({ isVisible }: TrustBadgesProps) {
  return (
    <div 
      className={`
        flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4
        transform transition-all duration-1000 delay-600 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      {[
        { Icon: Shield, text: "Ferramentas + Suporte VIP" },
        { Icon: Lock, text: "Criptografia Militar" },
        { Icon: Devices, text: "Suporte PC e Celular" }
      ].map(({ Icon, text }, index) => (
        <div 
          key={index}
          className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-black/30 px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:bg-black/40 transition-all duration-300"
        >
          <Icon className="w-5 h-5 text-[#FF0000] animate-pulse" />
          <span className="text-gray-400 text-sm sm:text-base">{text}</span>
        </div>
      ))}
    </div>
  );
}