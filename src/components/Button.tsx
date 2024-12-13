import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-all duration-300';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = variant === 'primary' 
    ? 'bg-black hover:bg-black/90 text-white border border-[#1A1A1A]' 
    : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#252525] border border-[#333333]';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}