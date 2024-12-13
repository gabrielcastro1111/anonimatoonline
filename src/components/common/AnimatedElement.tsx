import React from 'react';
import { useAnimatedVisibility } from '../../hooks/useAnimatedVisibility';

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedElement({
  children,
  delay,
  duration,
  className = ''
}: AnimatedElementProps) {
  const { animationClass } = useAnimatedVisibility({ delay, duration });

  return (
    <div className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}