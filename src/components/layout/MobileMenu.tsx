import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { scrollTo } = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center px-8">
              {[
                { id: 'benefits', label: 'Benefícios VIP' },
                { id: 'pricing', label: 'Preços' },
                { id: 'features', label: 'Recursos' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="py-4 text-2xl text-gray-300 hover:text-white transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}