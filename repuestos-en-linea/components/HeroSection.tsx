// repuestos-en-linea/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Encuentra los Mejores Repuestos para tu Vehículo</h2>
        <p className="text-lg mb-8">Especializados en Mazda, Ford y Chevrolet.</p>
        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded">Contáctanos</a>
      </div>
    </section>
  );
};

export default HeroSection;
