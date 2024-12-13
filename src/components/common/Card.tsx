import React from 'react';
import { THEME } from '../../utils/styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        ${THEME.gradients.card}
        p-6 rounded-xl border border-[${THEME.colors.border}]
        ${hover ? 'hover:border-[#FF0000] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}