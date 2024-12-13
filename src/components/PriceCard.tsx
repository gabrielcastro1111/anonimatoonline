import React from 'react';
import { Check, Shield, ArrowRight, Users } from 'lucide-react';
import { Button } from './Button';
import { navigateToPayment } from '../utils/navigation';

interface PriceCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
}

export function PriceCard({ title, price, originalPrice, features, popular }: PriceCardProps) {
  return (
    <div className="bg-[#050505] p-6 rounded-xl border border-[#1A1A1A] transition-all duration-500 relative">
      <div className="flex items-center justify-center mb-6">
        <Shield className="w-12 h-12 text-[#FF1A1A] drop-shadow-[0_0_25px_rgba(255,26,26,0.6)] stroke-[2.5]" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 text-center font-montserrat">{title}</h3>
      
      <div className="mb-6 text-center">
        {originalPrice && (
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-lg line-through text-gray-500">
              R$ {originalPrice}
            </span>
            <span className="bg-[#FF1A1A] text-white px-3 py-0.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,26,26,0.4)] animate-pulse">
              60% OFF
            </span>
          </div>
        )}
        <div className="flex items-baseline justify-center">
          <span className="text-xl text-gray-400">R$</span>
          <span className="text-5xl font-bold text-white ml-2 font-montserrat">{price}</span>
        </div>
      </div>

      <div className="bg-black p-4 mb-6 rounded-lg border border-[#1A1A1A]">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
              <Check className="w-4 h-4 text-[#FF1A1A] flex-shrink-0 mt-0.5" />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        className="w-full justify-center text-base font-semibold py-3 group bg-black hover:bg-black/90 text-white border-[#1A1A1A]"
        onClick={navigateToPayment}
      >
        <span className="flex items-center justify-center space-x-2">
          <span>Garantir Acesso</span>
          <ArrowRight className="w-5 h-5 text-[#FF1A1A] group-hover:translate-x-1 transition-transform duration-300" />
          <div className="flex items-center space-x-1 ml-2 bg-[#FF1A1A]/10 px-2 py-0.5 rounded-full">
            <Users className="w-4 h-4 text-[#FF1A1A]" />
            <span className="text-sm text-[#FF1A1A] font-medium">16 vagas</span>
          </div>
        </span>
      </Button>
    </div>
  );
}