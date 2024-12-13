import React from 'react';
import { Shield } from 'lucide-react';

export function TitleBadge() {
  return (
    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
      <Shield className="w-4 h-4 text-[#FF1A1A] mr-2" />
      <span className="text-sm text-white/90">PC • Mac • Android • iOS</span>
    </div>
  );
}