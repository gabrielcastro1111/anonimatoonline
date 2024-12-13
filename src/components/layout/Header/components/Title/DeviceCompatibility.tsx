import React from 'react';
import { Smartphone, Monitor, Apple, Windows } from 'lucide-react';

export function DeviceCompatibility() {
  return (
    <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            <Windows className="w-5 h-5 text-white/80" />
            <Apple className="w-5 h-5 text-white/80" />
          </div>
          <span className="text-sm text-white/80">Desktop</span>
        </div>
        
        <div className="w-px h-4 bg-white/10" />
        
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-white/80" />
          <span className="text-sm text-white/80">Mobile</span>
        </div>
      </div>
    </div>
  );
}