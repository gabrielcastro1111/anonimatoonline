import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className = '' }: TextProps) {
  return (
    <h2 className={`text-4xl font-bold text-white font-montserrat ${className}`}>
      {children}
    </h2>
  );
}

export function Subtitle({ children, className = '' }: TextProps) {
  return (
    <p className={`text-xl text-gray-400 ${className}`}>
      {children}
    </p>
  );
}