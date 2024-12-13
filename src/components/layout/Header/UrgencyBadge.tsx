import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface UrgencyBadgeProps {
  isVisible: boolean;
}

export function UrgencyBadge({ isVisible }: UrgencyBadgeProps) {
  return (
    <div 
      className={`
        inline-flex items-center px-4 py-2 rounded-full 
        bg-gradient-to-r from-red-600/30 to-red-900/30 
        border border-red-500/30
        transform transition-all duration-1000
        hover:scale-105 hover:border-red-500/50
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <AlertTriangle className="w-4 h-4 text-[#FF0000] mr-2 animate-pulse drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
      <span className="text-[#FF0000] font-semibold text-sm drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
        Oferta por tempo limitado
      </span>
    </div>
  );
}