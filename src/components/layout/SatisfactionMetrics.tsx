import React from 'react';
import { Star, Users } from 'lucide-react';

export function SatisfactionMetrics() {
  return (
    <div className="py-16 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Rating Card */}
          <div className="bg-black p-8 rounded-xl border border-[#1A1A1A] flex items-center justify-center group hover:border-[#FF1A1A] transition-all duration-300">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-12 h-12 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[2.5] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">4.8/5</div>
              <p className="text-gray-400">Avaliação média dos clientes</p>
            </div>
          </div>

          {/* Customers Card */}
          <div className="bg-black p-8 rounded-xl border border-[#1A1A1A] flex items-center justify-center group hover:border-[#FF1A1A] transition-all duration-300">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[2.5] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-montserrat">+10.000</div>
              <p className="text-gray-400">Clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}