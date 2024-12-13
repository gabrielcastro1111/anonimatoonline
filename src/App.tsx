import React from 'react';
import { Header } from './components/layout/Header';
import { VipBenefits } from './components/layout/VipBenefits';
import { AnonymityDominance } from './components/layout/AnonymityDominance';
import { Pricing } from './components/layout/Pricing';
import { SecurityAlerts } from './components/SecurityAlert';
import { CallToAction } from './components/layout/CallToAction';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { BackToTop } from './components/BackToTop';
import { useMobileOptimization } from './hooks/useMobileOptimization';

export default function App() {
  useMobileOptimization();

  return (
    <div className="min-h-screen bg-black text-gray-300" id="main-content">
      <Header />
      <main className="pt-16 sm:pt-20">
        <VipBenefits />
        <AnonymityDominance />
        <SecurityAlerts />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
      <MobileBottomNav />
    </div>
  );
}