import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ onClick, children, className = '' }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#000000] 
        text-white 
        px-8 py-4 
        rounded-md 
        font-medium 
        border border-[#1A1A1A]
        hover:bg-[#0A0A0A] 
        transition-colors duration-300 
        flex items-center justify-center 
        text-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
}