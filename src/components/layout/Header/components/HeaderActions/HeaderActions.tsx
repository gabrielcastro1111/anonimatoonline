import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

interface HeaderActionsProps {
  isVisible: boolean;
}

export function HeaderActions({ isVisible }: HeaderActionsProps) {
  return (
    <div 
      className={`
        flex flex-col sm:flex-row 
        items-center justify-center 
        gap-4
        transform transition-all duration-1000 delay-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}
    >
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}