import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VipBenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function VipBenefitCard({ icon: Icon, title, description }: VipBenefitCardProps) {
  return (
    <div className="bg-[#050505] p-6 rounded-xl border border-[#1A1A1A] hover:border-[#FF1A1A] transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="relative group">
          {/* Enhanced glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FF1A1A] to-[#FF0000] rounded-full blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <Icon 
            className="relative w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_25px_rgba(255,26,26,0.9)] stroke-[3] group-hover:scale-110 transition-all duration-300" 
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}