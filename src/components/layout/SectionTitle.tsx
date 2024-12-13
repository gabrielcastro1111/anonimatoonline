import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}