import React from 'react';
import { Button } from '../Button';
import { navigateToPayment } from '../../utils/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';

export function MobileBottomNav() {
  const { scrollTo } = useScrollTo();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black/95 backdrop-blur-lg border-t border-gray-800 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <Button 
            variant="secondary"
            className="flex-1 py-4 text-base font-medium"
            onClick={() => scrollTo('pricing')}
          >
            Ver Preços
          </Button>
          <Button 
            className="flex-1 py-4 text-base font-medium"
            onClick={navigateToPayment}
          >
            Começar Agora
          </Button>
        </div>
        {/* Safe area spacing for iOS */}
        <div className="h-[env(safe-area-inset-bottom)]"></div>
      </div>
    </div>
  );
}