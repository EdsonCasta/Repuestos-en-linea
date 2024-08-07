import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="relative group">
          <Image 
            src="/images/mazdacar.png" 
            alt="Mazda" 
            width={300} 
            height={200} 
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg">Mazda</span>
          </div>
        </div>
        <div className="relative group">
          <Image 
            src="/images/fordcar.png" 
            alt="Ford" 
            width={300} 
            height={200} 
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg">Ford</span>
          </div>
        </div>
        <div className="relative group">
          <Image 
            src="/images/chevroletcar.png" 
            alt="Chevrolet" 
            width={300} 
            height={200} 
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg">Chevrolet</span>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">Encuentra los Mejores Repuestos para tu Vehículo</h2>
      <p className="text-lg mb-8">Especializados en Mazda, Ford y Chevrolet.</p>
      <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded">Contáctanos</a>
    </section>
  );
};

export default HeroSection;
