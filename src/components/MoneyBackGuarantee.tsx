import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function MoneyBackGuarantee() {
  return (
    <div className="mt-8 max-w-md mx-auto">
      <div className="relative">
        <div className="relative bg-black p-6 rounded-lg border border-[#1A1A1A] hover:border-[#FF1A1A] transition-all duration-500 group">
          {/* Glow effect container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF1A1A]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center space-x-4">
            {/* Icon container with glow effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF1A1A] to-[#FF0000] rounded-full blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <ShieldCheck className="relative w-10 h-10 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Text content */}
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF1A1A] transition-colors duration-300">
                Garantia de 30 Dias
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Devolução total do seu dinheiro se não ficar satisfeito
              </p>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF1A1A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
}