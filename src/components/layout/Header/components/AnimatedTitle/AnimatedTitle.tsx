import React from 'react';
import { useAlternatingText } from '../../../../../hooks/useAlternatingText';

export function AnimatedTitle() {
  const { text, isVisible } = useAlternatingText({
    texts: [
      'Anonimato Digital • PC e Celular',
      'Segurança Online • PC e Celular'
    ],
    interval: 4000
  });

  return (
    <h2 
      className={`
        relative
        text-[2.7rem] sm:text-[3.7rem]
        font-bold text-white/90
        font-montserrat
        transition-opacity duration-400
        leading-tight
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {text}
    </h2>
  );
}