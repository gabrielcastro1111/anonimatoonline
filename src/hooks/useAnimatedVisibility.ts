import { useState, useEffect } from 'react';

interface UseAnimatedVisibilityProps {
  delay?: number;
  duration?: number;
  initialState?: boolean;
}

export function useAnimatedVisibility({
  delay = 0,
  duration = 1000,
  initialState = false
}: UseAnimatedVisibilityProps = {}) {
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return {
    isVisible,
    animationClass: `
      transform transition-all duration-${duration}
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `
  };
}