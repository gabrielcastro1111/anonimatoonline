import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">O que dizem nossos alunos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Este curso mudou completamente minha perspectiva sobre segurança online. Agora me sinto muito mais seguro navegando na internet."
            author="Carlos Silva"
          />
          <TestimonialCard
            quote="O material é excepcional e a comunidade é super prestativa. Recomendo para todos que se preocupam com privacidade."
            author="Ana Santos"
          />
        </div>
      </div>
    </section>
  );
}