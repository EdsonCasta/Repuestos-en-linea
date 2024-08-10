import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-2 fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Ford"
            width={55}
            height={20}
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
          <h1 className="text-2xl font-bold hover:text-[#fca311]">Repuestos en Línea</h1>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-[#fca311]">Inicio</a></li>
          <li><a href="#features" className="hover:text-[#fca311]">Características</a></li>
          <li><a href="#contact" className="hover:text-[#fca311]">Contacto</a></li>
        </ul>
        <div className="flex space-x-8">
          <img src="/images/mazda.png" alt="Mazda" className="h-12 w-auto" />
          <img src="/images/ford.png" alt="Ford" className="h-12 w-auto" />
          <img src="/images/chevrolet.png" alt="Chevrolet" className="h-12 w-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
