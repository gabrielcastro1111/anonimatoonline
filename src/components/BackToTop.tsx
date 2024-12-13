import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => scrollTo('top')}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-20 right-4 z-50 
        p-3 rounded-full
        bg-black/80 backdrop-blur border border-gray-800
        text-white shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-black hover:border-gray-700
        md:bottom-8 md:right-8
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}
      `}
    >
      <ArrowUp className="w-5 h-5 text-[#FF0000]" />
    </button>
  );
}