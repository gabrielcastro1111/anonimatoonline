import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../Button';
import { navigateToPayment } from '../../utils/navigation';

export function CallToAction() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Garanta sua privacidade agora mesmo
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Inclui ferramentas profissionais de proteção digital e acesso vitalício ao suporte VIP exclusivo.
        </p>
        <Button 
          onClick={navigateToPayment}
          className="bg-black hover:bg-black/90 text-white border-[#1A1A1A] shadow-none text-lg px-8 py-4"
        >
          <span className="flex items-center">
            Começar Agora
            <ChevronRight className="ml-2 w-5 h-5" />
          </span>
        </Button>
      </div>
    </section>
  );
}