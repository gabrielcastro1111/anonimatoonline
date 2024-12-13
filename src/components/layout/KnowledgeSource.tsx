import React from 'react';
import { BookOpen, Shield, Beaker, Award, Globe, Users, Search } from 'lucide-react';
import { SatisfactionMetrics } from './SatisfactionMetrics';

interface SourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SourceCard({ icon, title, description }: SourceCardProps) {
  return (
    <div className="bg-black p-6 rounded-xl border border-[#1A1A1A] hover:border-[#FF1A1A] transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function KnowledgeSource() {
  const sources = [
    {
      icon: <Globe className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "Fóruns da Deep Web",
      description: "Acesso a informações exclusivas e atualizadas diretamente dos fóruns mais restritos da deep web."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "Especialistas em Segurança",
      description: "Conteúdo desenvolvido por profissionais de elite em segurança da informação e privacidade digital."
    },
    {
      icon: <Award className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "15 Anos de Experiência",
      description: "Mais de uma década e meia de experiência prática em segurança digital e proteção de dados."
    },
    {
      icon: <Beaker className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "Laboratório de Testes",
      description: "Ambiente controlado para testes e validação de todas as técnicas e ferramentas de segurança."
    },
    {
      icon: <Search className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "Pesquisas Avançadas",
      description: "Investigação contínua das últimas ameaças e desenvolvimento de contramedidas efetivas."
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] stroke-[3]" />,
      title: "Parcerias Acadêmicas",
      description: "Colaboração com instituições de pesquisa e especialistas renomados em segurança digital."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Nossa Fonte de Conhecimento
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Baseamos nosso conteúdo nas fontes mais confiáveis e experientes do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sources.map((source, index) => (
            <SourceCard key={index} {...source} />
          ))}
        </div>
      </div>
    </section>
  );
}