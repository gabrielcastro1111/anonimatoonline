import React from 'react';
import { Shield, Mail, MapPin, Award, CheckCircle, Lock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-[#FF1A1A]" />
              <span className="text-xl font-bold text-white font-montserrat">Anonimato</span>
            </div>
            <p className="text-gray-400 text-sm">
              Sua privacidade é nossa prioridade. Proteja sua identidade digital com as melhores ferramentas do mercado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>suporte@anonimatoonline.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Certificações</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-black p-3 rounded-lg border border-[#1A1A1A] group hover:border-[#FF1A1A] transition-all duration-300">
                <Award className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white text-sm font-semibold">ISO 27001</h4>
                  <p className="text-gray-400 text-xs">Segurança da Informação</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black p-3 rounded-lg border border-[#1A1A1A] group hover:border-[#FF1A1A] transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white text-sm font-semibold">PCI DSS</h4>
                  <p className="text-gray-400 text-xs">Segurança de Dados</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black p-3 rounded-lg border border-[#1A1A1A] group hover:border-[#FF1A1A] transition-all duration-300">
                <Lock className="w-8 h-8 text-[#FF1A1A] drop-shadow-[0_0_15px_rgba(255,26,26,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white text-sm font-semibold">SOC 2 Type II</h4>
                  <p className="text-gray-400 text-xs">Controles de Segurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Anonimato Online. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}