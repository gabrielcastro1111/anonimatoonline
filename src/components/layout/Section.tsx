import React from 'react';
import { ResponsiveContainer } from './ResponsiveContainer';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({ children, id, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <ResponsiveContainer className={containerClassName}>
        {children}
      </ResponsiveContainer>
    </section>
  );
}