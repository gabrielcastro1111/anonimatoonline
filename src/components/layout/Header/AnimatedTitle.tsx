import React from 'react';
import { useAlternatingText } from '../../../hooks/useAlternatingText';

interface AnimatedTitleProps {
  isVisible: boolean;
}

export function AnimatedTitle({ isVisible }: AnimatedTitleProps) {
  const { text } = useAlternatingText({
    texts: [
      'Anonimato\nDigital',
      'Segurança\nOnline'
    ],
    interval: 4000
  });

  return (
    <div 
      className={`
        relative px-4 sm:px-0
        transform transition-all duration-1000 delay-400
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <h1 className="relative">
        <span 
          className={`
            block
            text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl
            font-bold font-montserrat
            leading-tight
            bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
          `}
        >
          {text.split('\n').map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}