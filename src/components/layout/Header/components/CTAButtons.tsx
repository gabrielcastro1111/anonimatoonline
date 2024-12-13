import React from 'react';
import { navigateToPayment } from '../../../../utils/navigation';
import { useScrollTo } from '../../../../hooks/useScrollTo';

interface CTAButtonsProps {
  isVisible: boolean;
}

export function CTAButtons({ isVisible }: CTAButtonsProps) {
  const { scrollTo } = useScrollTo();

  return (
    <div 
      className={`
        flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0
        transform transition-all duration-1000 delay-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <button 
        className="bg-black text-white px-8 py-4 rounded-md font-medium border border-[#1A1A1A] hover:bg-black/90 transition-colors duration-300 text-lg"
        onClick={navigateToPayment}
      >
        Garantir Acesso
      </button>
      
      <button 
        className="text-gray-300 hover:text-white transition-colors duration-300"
        onClick={() => scrollTo('pricing')}
      >
        Ver Conteúdo do Pacote
      </button>
    </div>
  );
}