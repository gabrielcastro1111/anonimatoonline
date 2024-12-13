import React from 'react';

interface SecondaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({ onClick, children, className = '' }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        text-gray-300 
        hover:text-white 
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}