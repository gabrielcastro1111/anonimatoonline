import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialProps) {
  return (
    <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <p className="text-gray-300 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-gray-400 font-medium">- {author}</p>
    </div>
  );
}