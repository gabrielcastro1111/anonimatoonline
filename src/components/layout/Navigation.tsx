import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowUp } from 'lucide-react';
import { Button } from '../Button';
import { navigateToPayment } from '../../utils/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    scrollTo('top');
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo with Back to Top */}
          <button
            onClick={handleBackToTop}
            className="flex items-center space-x-2 group"
            aria-label="Back to top"
          >
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF0000] transition-transform duration-300 group-hover:scale-110" />
            <span className="text-lg sm:text-xl font-bold text-white font-montserrat">
              Anonimato
            </span>
            {isScrolled && (
              <ArrowUp className="w-4 h-4 text-[#FF0000] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
              Benefícios VIP
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Preços
            </a>
            <Button onClick={navigateToPayment}>
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-gray-800 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#benefits" 
                className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios VIP
              </a>
              <a 
                href="#pricing" 
                className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </a>
              <Button 
                className="w-full justify-center text-lg py-4"
                onClick={navigateToPayment}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}