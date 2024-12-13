import { PAYMENT } from '../config/constants';

interface ConversionEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackConversion = (event: ConversionEvent) => {
  // Track conversion events (implement your analytics here)
  console.log('Conversion event:', event);
};

export const handleCtaClick = (location: string) => {
  trackConversion({
    action: 'click',
    category: 'CTA',
    label: location
  });
  
  window.location.href = PAYMENT.URL;
};

export const optimizeButtonVisibility = (element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('highlight-animation');
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
};