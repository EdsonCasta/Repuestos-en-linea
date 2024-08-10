import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="relative group">
          <Image
            src="/images/mazdacar.png"
            alt="Mazda"
            width={300}
            height={200}
            className="transition-transform duration-300 transform group-hover:scale-105 w-full"
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
            className="transition-transform duration-300 transform group-hover:scale-105 w-full"
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
            className="transition-transform duration-300 transform group-hover:scale-105 w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg">Chevrolet</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Encuentra los Mejores Repuestos para tu Vehículo</h2>
      <p className="text-base sm:text-lg lg:text-xl mb-8">Especializados en Mazda, Ford y Chevrolet.</p>
      <a href="#contact" className="bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#e5e5e5] font-bold px-4 py-2 rounded">Contáctanos</a>
      <div className="flex space-x-4 mt-10 justify-center">
        <a href="https://www.facebook.com/profile.php?id=61559420653844" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl hover:text-[#fca311]" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-[#fca311]" />
        </a>
        <a href="https://wa.me/573183704645?text=Hola,%20estoy%20interesado%20en%20sus%20productos" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-xl hover:text-[#fca311]" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
