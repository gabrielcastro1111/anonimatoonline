import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  Icon: LucideIcon;
  text: string;
}

export function TrustBadge({ Icon, text }: TrustBadgeProps) {
  return (
    <div className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-black/30 px-6 py-3 sm:px-4 sm:py-2 rounded-full hover:bg-black/40 transition-all duration-300">
      <Icon className="w-5 h-5 text-[#FF0000] animate-pulse" />
      <span className="text-gray-400 text-sm sm:text-base">{text}</span>
    </div>
  );
}