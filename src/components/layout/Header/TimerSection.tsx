import React from 'react';
import { CountdownTimer } from '../../CountdownTimer';

interface TimerSectionProps {
  isVisible: boolean;
}

export function TimerSection({ isVisible }: TimerSectionProps) {
  return (
    <div 
      className={`
        flex flex-col items-center mb-6
        transform transition-all duration-1000 delay-200 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <p className="text-gray-400 mb-2 text-sm font-medium">Promoção encerra em:</p>
      <CountdownTimer />
    </div>
  );
}