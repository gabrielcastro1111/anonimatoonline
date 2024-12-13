import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '../Button';
import { navigateToPayment } from '../../utils/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';

export function MobileNav() {
  const { scrollTo } = useScrollTo();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black/95 backdrop-blur-lg border-t border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Button 
            variant="secondary"
            className="flex-1 py-3 text-sm"
            onClick={() => scrollTo('pricing')}
          >
            Ver Preços
          </Button>
          <Button 
            className="flex-1 py-3 text-sm"
            onClick={navigateToPayment}
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </nav>
  );
}