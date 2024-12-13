import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function FeatureCard({ icon: Icon, title, description, iconColor = 'text-gray-300' }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg bg-[#1A1A1A] border border-[#333333] hover:border-[#4F4F4F] transition-all duration-300 group">
      <Icon 
        className={`w-8 h-8 mb-4 ${iconColor} drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] stroke-[3] group-hover:scale-110 transition-transform duration-300`} 
      />
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}