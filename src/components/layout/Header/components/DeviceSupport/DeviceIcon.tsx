import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DeviceIconProps {
  Icon: LucideIcon;
  label: string;
}

export function DeviceIcon({ Icon, label }: DeviceIconProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
      <Icon className="w-4 h-4 text-[#FF1A1A]" />
      <span className="text-sm text-white/90">{label}</span>
    </div>
  );
}