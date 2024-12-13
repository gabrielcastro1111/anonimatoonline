import React from 'react';
import { MessageCircle, Users, Zap, BookOpen, Shield, Crown } from 'lucide-react';
import { VipBenefitCard } from '../VipBenefitCard';

export function VipBenefits() {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Suporte Prioritário 24/7",
      description: "Acesso direto aos nossos especialistas para tirar dúvidas e receber orientações personalizadas a qualquer momento."
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Faça parte de um grupo seleto de membros VIP, compartilhe experiências e aprenda com outros usuários avançados."
    },
    {
      icon: Zap,
      title: "Atualizações Antecipadas",
      description: "Seja o primeiro a receber novas técnicas, ferramentas e atualizações de segurança antes de todos."
    },
    {
      icon: BookOpen,
      title: "Conteúdo Exclusivo",
      description: "Acesso a materiais avançados, guias práticos e tutoriais detalhados não disponíveis na versão básica."
    },
    {
      icon: Shield,
      title: "Consultoria de Segurança",
      description: "Análise personalizada do seu perfil digital e recomendações específicas para maximizar sua proteção."
    },
    {
      icon: Crown,
      title: "Benefícios Vitalícios",
      description: "Mantenha acesso permanente a todos os recursos VIP e futuras atualizações sem custos adicionais."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="benefits">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF1A1A]/10 text-[#FF1A1A] border border-[#FF1A1A]/20 mb-4 backdrop-blur-sm">
              <Crown className="w-4 h-4 mr-2" />
              Acesso VIP
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Benefícios Exclusivos
          </h2>
          <p className="text-xl text-white mb-4 max-w-3xl mx-auto font-medium">
            Desfrute de vantagens únicas e suporte personalizado para maximizar sua segurança digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <VipBenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}