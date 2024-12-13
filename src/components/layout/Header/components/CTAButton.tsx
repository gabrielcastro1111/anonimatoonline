import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../../common/Button';

interface CTAButtonProps {
  onClick: () => void;
}

export function CTAButton({ onClick }: CTAButtonProps) {
  return (
    <Button 
      size="large"
      className="group"
      onClick={onClick}
    >
      <span className="flex items-center justify-center">
        Garantir Acesso
        <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </Button>
  );
}