import React from 'react';
import { Eye, Shield, Lock } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

export function AnonymityDominance() {
  const features = [
    {
      icon: Eye,
      title: "Invisível até para Autoridades",
      description: "Técnicas avançadas de anonimização que garantem sua privacidade mesmo diante de análises forenses.",
    },
    {
      icon: Shield,
      title: "Anonimato Absoluto",
      description: "Protocolos de segurança que tornam impossível rastrear suas atividades online.",
    },
    {
      icon: Lock,
      title: "Proteção contra Rastreamento",
      description: "Ferramentas que eliminam qualquer rastro digital deixado durante sua navegação.",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Domine o Anonimato Online
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navegue com total liberdade e segurança, protegido por tecnologias de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#030303] p-6 rounded-xl border border-[#1A1A1A] hover:border-[#FF1A1A] transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#FF1A1A] to-[#FF0000] rounded-full blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  <feature.icon className="relative w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_25px_rgba(255,26,26,0.9)] stroke-[3] group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}