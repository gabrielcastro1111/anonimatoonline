import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Lock, AlertTriangle } from 'lucide-react';
import { Button } from '../Button';
import { CountdownTimer } from '../CountdownTimer';
import { Hero } from './Hero';
import { Navigation } from './Navigation';
import { useAlternatingText } from '../../hooks/useAlternatingText';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { text } = useAlternatingText({
    texts: [
      'Anonimato\nDigital',
      'Segurança\nOnline'
    ],
    interval: 4000
  });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'auto' });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative overflow-hidden" id="top">
      <Navigation />
      <Hero />
      <div className="absolute inset-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="text-center">
            {/* Animated Urgency Badge */}
            <div 
              className={`
                inline-flex items-center px-4 py-2 rounded-full 
                bg-gradient-to-r from-red-600/30 to-red-900/30 
                border border-red-500/30 mb-4
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
                hover:scale-105 hover:border-red-500/50
              `}
            >
              <AlertTriangle className="w-4 h-4 text-[#FF0000] mr-2 animate-pulse drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
              <span className="text-[#FF0000] font-semibold text-sm drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                Oferta por tempo limitado
              </span>
            </div>

            {/* Animated Timer Section */}
            <div 
              className={`
                flex flex-col items-center mb-6
                transform transition-all duration-1000 delay-200 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              <p className="text-gray-400 mb-2 text-sm font-medium">Promoção encerra em:</p>
              <CountdownTimer />
            </div>

            {/* Animated Main Title */}
            <h1 
              className={`
                text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-montserrat
                bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
                transform transition-all duration-1000 delay-400 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              {text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Animated Trust Badges */}
            <div 
              className={`
                flex flex-wrap justify-center items-center gap-4 mb-6
                transform transition-all duration-1000 delay-600 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full hover:bg-black/40 transition-colors">
                <Shield className="w-5 h-5 text-[#FF0000] animate-pulse" />
                <span className="text-gray-400 text-sm">Ferramentas + Suporte VIP</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full hover:bg-black/40 transition-colors">
                <Lock className="w-5 h-5 text-[#FF0000] animate-pulse" />
                <span className="text-gray-400 text-sm">Criptografia Militar</span>
              </div>
            </div>

            {/* Animated Subtitle */}
            <p 
              className={`
                text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8
                transform transition-all duration-1000 delay-800 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              Proteja sua privacidade e navegue com segurança
            </p>

            {/* Animated CTA Buttons */}
            <div 
              className={`
                flex flex-col sm:flex-row items-center justify-center gap-4
                transform transition-all duration-1000 delay-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
            >
              <Button 
                className="text-base px-6 py-3 w-full sm:w-auto group relative overflow-hidden"
                onClick={() => window.location.href = 'https://pay.kirvano.com/9e5b8853-2a54-4466-8c87-2a44f7947349'}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Garantir Acesso
                  <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </Button>
              
              <Button 
                variant="secondary" 
                className="text-base px-6 py-3 w-full sm:w-auto group"
                onClick={scrollToPricing}
              >
                Ver Conteúdo do Pacote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}