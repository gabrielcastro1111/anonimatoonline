import React from 'react';
import { useScrollTo } from '../../../../../hooks/useScrollTo';

export function SecondaryButton() {
  const { scrollTo } = useScrollTo();

  return (
    <button 
      onClick={() => scrollTo('pricing')}
      className="bg-black hover:bg-black/90 text-white px-6 py-2.5 rounded-md border border-[#1A1A1A] text-sm transition-colors duration-300"
    >
      Ver Conteúdo do Pacote
    </button>
  );
}