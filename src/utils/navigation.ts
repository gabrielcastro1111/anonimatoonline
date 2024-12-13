import { PAYMENT, ROUTES } from '../config/constants';
import { LAYOUT } from '../config/layout';
import { smoothScrollTo } from './scroll';

export const navigateToPayment = () => {
  window.location.href = PAYMENT.URL;
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    smoothScrollTo(element, {
      offset: LAYOUT.totalOffset,
      duration: 800
    });
  }
};