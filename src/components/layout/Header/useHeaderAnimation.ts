import { useState, useEffect } from 'react';

export function useHeaderAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return { isVisible };
}