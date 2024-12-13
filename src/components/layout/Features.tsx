import React from 'react';
import { Shield, Lock, Eye, Key, Globe } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

export function Features() {
  return (
    <section className="py-20 bg-[#080808]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proteção Completa</h2>
          <p className="text-xl text-gray-400">Tecnologias avançadas para sua segurança digital</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Criptografia Militar"
            description="Utilize os mesmos padrões de criptografia das forças armadas para proteger seus dados."
            iconColor="text-[#FF0000]"
          />
          <FeatureCard
            icon={Eye}
            title="Anti Rastreamento"
            description="Navegue sem deixar rastros e evite o monitoramento de suas atividades online."
            iconColor="text-[#FF0000]"
          />
          <FeatureCard
            icon={Lock}
            title="Anonimato Total"
            description="Mantenha sua identidade protegida com técnicas avançadas de anonimização."
            iconColor="text-[#FF0000]"
          />
          <FeatureCard
            icon={Globe}
            title="Deep Web Segura"
            description="Aprenda a navegar com segurança em redes anônimas e na deep web."
            iconColor="text-[#FF0000]"
          />
          <FeatureCard
            icon={Key}
            title="Senhas Blindadas"
            description="Crie e gerencie senhas ultra seguras com proteção contra ataques."
            iconColor="text-[#FF0000]"
          />
          <FeatureCard
            icon={Shield}
            title="Suporte VIP"
            description="Acesso exclusivo ao nosso grupo de suporte para tirar todas suas dúvidas."
            iconColor="text-[#FF0000]"
          />
        </div>
      </div>
    </section>
  );
}