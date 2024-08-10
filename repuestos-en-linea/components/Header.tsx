import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-1 md:p-2 fixed top-0 w-full z-50">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2">
          <Image
            src="/images/logo.png"
            alt="Ford"
            width={45}  
            height={15} 
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
          <h1 className="text-lg md:text-2xl font-bold hover:text-[#fca311] text-center md:text-left">
            Repuestos en Línea
          </h1>
        </div>
        <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 text-center">
          <li><a href="#home" className="hover:text-[#fca311]">Inicio</a></li>
          <li><a href="#features" className="hover:text-[#fca311]">Características</a></li>
          <li><a href="#contact" className="hover:text-[#fca311]">Contacto</a></li>
        </ul>
        <div className="flex flex-row space-x-4 md:space-x-8">
          <img src="/images/mazda.png" alt="Mazda" className="h-6 md:h-12 w-auto" />
          <img src="/images/ford.png" alt="Ford" className="h-6 md:h-12 w-auto" />
          <img src="/images/chevrolet.png" alt="Chevrolet" className="h-6 md:h-12 w-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
