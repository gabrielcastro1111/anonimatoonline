// Device detection
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
};

// Viewport helpers
export const getViewportHeight = (): number => {
  return window.visualViewport?.height || window.innerHeight;
};

// Touch event handlers
export const preventOverscroll = (element: HTMLElement): void => {
  let startY = 0;

  element.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
  }, { passive: true });

  element.addEventListener('touchmove', (e) => {
    const deltaY = e.touches[0].pageY - startY;
    const isAtTop = element.scrollTop <= 0;
    const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight;

    if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
      e.preventDefault();
    }
  }, { passive: false });
};

// Mobile optimizations
export const enableMobileOptimizations = (): void => {
  // Disable double-tap zoom
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
  document.head.appendChild(meta);

  // Add mobile-specific classes
  document.body.classList.add('mobile-optimized');

  // Prevent pull-to-refresh
  document.body.style.overscrollBehavior = 'none';

  // Optimize touch events
  if (isMobile()) {
    document.documentElement.style.touchAction = 'manipulation';
    document.documentElement.style.webkitTapHighlightColor = 'transparent';
  }
};

// Mobile-specific styles
export const getMobileStyles = () => ({
  touchTarget: 'min-h-[44px] sm:min-h-0',
  safePadding: 'env(safe-area-inset-bottom)',
  noOverscroll: 'overscroll-behavior-none',
  smoothTouch: 'touch-action-manipulation',
});