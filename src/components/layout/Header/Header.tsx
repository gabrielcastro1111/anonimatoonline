import React from 'react';
import { Navigation } from '../Navigation';
import { Hero } from '../Hero';
import { useHeaderAnimation } from './useHeaderAnimation';
import { UrgencyBadge } from './components/UrgencyBadge';
import { TimerSection } from './components/TimerSection';
import { MainTitle } from './components/Title/MainTitle';
import { DeviceFeatures } from './components/DeviceSupport/DeviceFeatures';
import { HeaderActions } from './components/HeaderActions';

export function Header() {
  const { isVisible } = useHeaderAnimation();

  return (
    <header className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center" id="top">
      <Navigation />
      <Hero />
      <div className="absolute inset-0 z-30">
        <div className="h-full flex items-center">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
            <div className="text-center space-y-6 sm:space-y-8">
              <UrgencyBadge isVisible={isVisible} />
              <TimerSection isVisible={isVisible} />
              <MainTitle />
              <DeviceFeatures />
              <HeaderActions isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}