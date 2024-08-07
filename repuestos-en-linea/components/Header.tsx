// repuestos-en-linea/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Repuestos en Línea</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#features" className="hover:text-gray-300">Características</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contacto</a></li>
        </ul>
        <div className="flex space-x-4">
          <img src="/images/mazda.png" alt="Mazda" className="h-8 w-auto" />
          <img src="/images/ford.png" alt="Ford" className="h-8 w-auto" />
          <img src="/images/chevrolet.png" alt="Chevrolet" className="h-8 w-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
