import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../../Button';
import { navigateToPayment } from '../../../../utils/navigation';
import { useScrollTo } from '../../../../hooks/useScrollTo';

interface HeaderActionsProps {
  isVisible: boolean;
}

export function HeaderActions({ isVisible }: HeaderActionsProps) {
  const { scrollTo } = useScrollTo();

  return (
    <div 
      className={`
        flex flex-col sm:flex-row 
        items-center justify-center 
        gap-4
        transform transition-all duration-1000 delay-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <Button 
        onClick={navigateToPayment}
        className="bg-black hover:bg-black/90 text-white border-[#1A1A1A] shadow-none text-lg px-8 py-4"
      >
        <span className="flex items-center">
          Garantir Acesso
          <ChevronRight className="ml-2 w-5 h-5" />
        </span>
      </Button>
      
      <button 
        onClick={() => scrollTo('pricing')}
        className="bg-black hover:bg-black/90 text-white px-6 py-2.5 rounded-md border border-[#1A1A1A] text-sm transition-colors duration-300"
      >
        Ver Conteúdo do Pacote
      </button>
    </div>
  );
}