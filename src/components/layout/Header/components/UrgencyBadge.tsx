import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface UrgencyBadgeProps {
  isVisible: boolean;
}

export function UrgencyBadge({ isVisible }: UrgencyBadgeProps) {
  return (
    <div 
      className={`
        inline-flex items-center px-6 py-2.5 rounded-full 
        bg-[#FF0000]/10 backdrop-blur-sm
        border-2 border-[#FF0000]
        transform transition-all duration-1000
        hover:scale-105
        animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]
        group cursor-pointer
        shadow-[0_0_30px_rgba(255,0,0,0.3)]
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <AlertTriangle 
        className="
          w-5 h-5 text-[#FF0000] mr-2 
          drop-shadow-[0_0_30px_rgba(255,0,0,1)] 
          animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]
          group-hover:scale-110 transition-transform duration-300
        " 
      />
      <span className="
        text-[#FF0000] font-bold text-base 
        drop-shadow-[0_0_30px_rgba(255,0,0,1)]
        group-hover:text-[#FF1A1A] transition-colors duration-300
        tracking-wide
        animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]
      ">
        Vagas limitadas para não comprometer a qualidade
      </span>
    </div>
  );
}