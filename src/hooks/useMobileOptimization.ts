import { useEffect } from 'react';
import { isMobile } from '../utils/mobile';

export function useMobileOptimization() {
  useEffect(() => {
    if (!isMobile()) return;

    // Fix iOS viewport height
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial setup
    setViewportHeight();
    document.body.classList.add('mobile-optimized');

    // Handle orientation changes and resize
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
      setTimeout(setViewportHeight, 100);
    });

    // Enable momentum scrolling
    document.documentElement.style.webkitOverflowScrolling = 'touch';
    
    // Prevent bounce effect while maintaining scroll
    document.body.style.overscrollBehavior = 'contain';

    // Optimize touch events
    document.documentElement.style.touchAction = 'manipulation';
    document.documentElement.style.webkitTapHighlightColor = 'transparent';

    // Clean up
    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);
}