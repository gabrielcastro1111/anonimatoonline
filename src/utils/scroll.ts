export function smoothScrollTo(element: HTMLElement, offset = 0) {
  const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  if (isSmoothScrollSupported) {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback for browsers that don't support smooth scrolling
    window.scrollTo(0, offsetPosition);
  }
}

export function preventOverscroll(event: TouchEvent) {
  const element = event.target as HTMLElement;
  const isAtTop = element.scrollTop <= 0;
  const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight;

  if ((isAtTop && event.touches[0].screenY > event.touches[0].screenY) ||
      (isAtBottom && event.touches[0].screenY < event.touches[0].screenY)) {
    event.preventDefault();
  }
}