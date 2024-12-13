import { useState, useEffect, useCallback } from 'react';

interface UseAlternatingTextProps {
  texts: string[];
  interval?: number;
}

export function useAlternatingText({ texts, interval = 4000 }: UseAlternatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const fadeInterval = 400; // Fixed fade duration for smoother transitions

  const switchText = useCallback(() => {
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % texts.length);
      setIsVisible(true);
    }, fadeInterval);
  }, [texts.length, fadeInterval]);

  useEffect(() => {
    const timer = setInterval(switchText, interval);
    return () => clearInterval(timer);
  }, [interval, switchText]);

  return { 
    text: texts[currentIndex], 
    isVisible,
    currentIndex 
  };
}