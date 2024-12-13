import React from 'react';
import { ChevronRight } from 'lucide-react';
import { navigateToPayment } from '../../../../../utils/navigation';

export function PrimaryButton() {
  return (
    <button 
      onClick={navigateToPayment}
      className="bg-black hover:bg-black/90 text-white border border-[#1A1A1A] shadow-none text-lg px-8 py-4 rounded-md transition-colors duration-300"
    >
      <span className="flex items-center">
        Garantir Acesso
        <ChevronRight className="ml-2 w-5 h-5" />
      </span>
    </button>
  );
}