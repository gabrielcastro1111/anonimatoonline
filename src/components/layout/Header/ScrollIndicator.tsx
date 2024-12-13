import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  isVisible: boolean;
}

export function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  return (
    <div 
      className={`
        absolute bottom-8 left-1/2 -translate-x-1/2
        transform transition-all duration-1000 delay-1200
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <div className="animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors duration-300" />
      </div>
    </div>
  );
}