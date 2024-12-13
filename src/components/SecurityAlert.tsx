import React from 'react';
import { AlertTriangle, Shield, Eye, UserX, Lock, Siren } from 'lucide-react';
import { Button } from './Button';

interface AlertProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: string;
}

function Alert({ icon, title, description, stats }: AlertProps) {
  return (
    <div className="bg-[#030303] p-8 rounded-xl border border-[#1A1A1A] hover:border-[#FF1A1A] transition-all duration-500 group">
      <div className="flex flex-col space-y-4">
        <div className="text-[#FF1A1A] drop-shadow-[0_0_20px_rgba(255,26,26,0.6)] group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          {stats && (
            <div className="text-[#FF1A1A] text-xl font-bold mb-3 font-montserrat">
              {stats}
            </div>
          )}
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function SecurityAlerts() {
  const alerts = [
    {
      icon: <Siren className="w-8 h-8 stroke-[2.5]" />,
      title: "Vazamentos em Massa",
      description: "Seus dados pessoais podem estar expostos neste momento em diversos vazamentos que acontecem diariamente na internet.",
      stats: "+5.4 bilhões de dados vazados em 2023"
    },
    {
      icon: <Eye className="w-8 h-8 stroke-[2.5]" />,
      title: "Vigilância Constante",
      description: "Suas atividades online são monitoradas 24/7 por empresas, governos e criminosos que podem usar seus dados contra você.",
      stats: "98% dos usuários são rastreados"
    },
    {
      icon: <UserX className="w-8 h-8 stroke-[2.5]" />,
      title: "Roubo de Identidade",
      description: "Criminosos utilizam dados vazados para roubar identidades e cometer fraudes financeiras em seu nome.",
      stats: "+300% de aumento em 2023"
    },
    {
      icon: <Lock className="w-8 h-8 stroke-[2.5]" />,
      title: "Senhas Comprometidas",
      description: "Milhões de senhas são vazadas diariamente, permitindo que hackers acessem suas contas pessoais e bancárias.",
      stats: "80% das invasões por senha fraca"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 text-[#FF1A1A] drop-shadow-[0_0_20px_rgba(255,26,26,0.6)]" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">
            Alerta de Segurança Digital
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            O mundo digital está mais perigoso do que nunca. A cada segundo, pessoas têm seus dados roubados e suas vidas devastadas por ataques cibernéticos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {alerts.map((alert, index) => (
            <Alert key={index} {...alert} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="text-lg px-8 py-4 bg-black hover:bg-black/90 text-white border-[#1A1A1A]"
            onClick={() => window.location.href = 'https://pay.kirvano.com/9e5b8853-2a54-4466-8c87-2a44f7947349'}
          >
            Proteja-se Agora
          </Button>
        </div>
      </div>
    </section>
  );
}