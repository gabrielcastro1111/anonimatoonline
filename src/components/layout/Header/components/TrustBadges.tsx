import React from 'react';
import { Shield, Lock, Smartphone, Monitor } from 'lucide-react';

interface TrustBadgesProps {
  isVisible: boolean;
}

export function TrustBadges({ isVisible }: TrustBadgesProps) {
  return (
    <div 
      className={`
        flex flex-wrap justify-center items-center gap-4
        transform transition-all duration-1000 delay-600 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full hover:bg-black/40 transition-colors">
        <Shield className="w-5 h-5 text-[#FF1A1A] animate-pulse" />
        <span className="text-white/90 text-sm">Ferramentas + Suporte VIP</span>
      </div>

      <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full hover:bg-black/40 transition-colors">
        <Lock className="w-5 h-5 text-[#FF1A1A] animate-pulse" />
        <span className="text-white/90 text-sm">Criptografia Militar</span>
        <div className="ml-2 flex items-center space-x-1 border-l border-gray-700 pl-2">
          <Monitor className="w-4 h-4 text-white/80" />
          <Smartphone className="w-4 h-4 text-white/80" />
          <span className="text-white/80 text-xs">PC e Celular</span>
        </div>
      </div>
    </div>
  );
}