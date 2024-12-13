export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePrice = (price: number): boolean => {
  return price > 0 && Number.isFinite(price);
};