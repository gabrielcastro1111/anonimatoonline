import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../common/Button';
import { navigateToPayment } from '../../../utils/navigation';
import { useScrollTo } from '../../../hooks/useScrollTo';

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
      <Button 
        className="text-lg px-6 py-4 sm:py-3 w-full sm:w-auto bg-black hover:bg-black border-black"
        onClick={navigateToPayment}
      >
        <span className="flex items-center justify-center">
          Garantir Acesso
          <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
      
      <Button 
        variant="secondary" 
        className="text-lg px-6 py-4 sm:py-3 w-full sm:w-auto"
        onClick={() => scrollTo('pricing')}
      >
        Ver Conteúdo do Pacote
      </Button>
    </div>
  );
}