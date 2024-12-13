import React from 'react';
import { PriceCard } from '../PriceCard';
import { MoneyBackGuarantee } from '../MoneyBackGuarantee';
import { KnowledgeSource } from './KnowledgeSource';

export function Pricing() {
  const features = [
    "Suite Completa de Proteção Digital Premium",
    "VPN Militar com Criptografia AES-256",
    "Software Anti-Rastreamento Avançado",
    "Protetor de Identidade Digital",
    "Gerador de Senhas Invioláveis",
    "Scanner de Vazamentos de Dados",
    "Criptografador de Arquivos Militares",
    "Limpador de Rastros Digitais",
    "Firewall Pessoal Avançado",
    "Suporte VIP 24/7 no WhatsApp",
    "Atualizações e Upgrades Vitalícios",
    "Comunidade Exclusiva de Especialistas"
  ];

  return (
    <>
      <section className="py-16 bg-black relative overflow-hidden" id="pricing">
        {/* Radial gradient background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-10">
            {/* Red Box with Limited Spots */}
            <div className="inline-block mb-8">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-[1px] rounded-lg">
                <div className="bg-black px-6 py-3 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-red-500 font-semibold animate-pulse">
                      Vagas limitadas para não comprometer a qualidade
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
              Arsenal Completo de Proteção Digital
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Suite completa de ferramentas profissionais + Suporte VIP
            </p>
          </div>
          
          {/* Pricing Card */}
          <div className="max-w-lg mx-auto relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-2xl blur-xl"></div>
            
            {/* Main pricing card */}
            <div className="relative">
              <PriceCard
                title="Pacote Completo de Proteção"
                originalPrice="497"
                price="197"
                features={features}
                popular
              />
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-8">
            <MoneyBackGuarantee />
          </div>
        </div>
      </section>
      
      {/* Knowledge Source Section */}
      <KnowledgeSource />
    </>
  );
}