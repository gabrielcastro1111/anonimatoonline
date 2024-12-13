import { useCallback } from 'react';
import { scrollToSection } from '../utils/navigation';

export function useScrollTo() {
  const scrollTo = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return { scrollTo };
}