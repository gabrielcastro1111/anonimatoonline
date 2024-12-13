import React from 'react';
import { Shield, Lock } from 'lucide-react';

export function DeviceFeatures() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full">
        <Shield className="w-5 h-5 text-[#FF1A1A] animate-pulse" />
        <span className="text-white/90 text-sm">Proteção Total • Todos os Dispositivos</span>
      </div>
      
      <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full">
        <Lock className="w-5 h-5 text-[#FF1A1A] animate-pulse" />
        <span className="text-white/90 text-sm">Sincronização PC + Mobile</span>
      </div>
    </div>
  );
}