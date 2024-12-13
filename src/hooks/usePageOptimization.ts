import { useEffect } from 'react';
import { isMobile, getViewportHeight } from '../utils/mobile';

export function usePageOptimization() {
  useEffect(() => {
    // Optimize initial load
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Fix iOS viewport height
    const updateViewportHeight = () => {
      const vh = getViewportHeight() * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Preload critical images
    const preloadImages = () => {
      const images = [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80'
      ];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Performance optimizations
    const optimizePerformance = () => {
      if (isMobile()) {
        // Disable hover effects on mobile
        document.body.classList.add('mobile-device');
        // Enable smooth scrolling only on non-mobile devices
        document.documentElement.style.scrollBehavior = 'auto';
      } else {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    updateViewportHeight();
    preloadImages();
    optimizePerformance();

    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);
}