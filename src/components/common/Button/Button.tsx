import React from 'react';
import { ButtonProps } from './types';
import { getButtonStyles } from './styles';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  fullWidth = false,
  className = '', 
  ...props 
}: ButtonProps) {
  const styles = getButtonStyles({ variant, size, fullWidth });
  
  return (
    <button
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}