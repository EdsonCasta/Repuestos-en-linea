"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const images = [
  { src: '/images/mazdacar.png', alt: 'Mazda' },
  { src: '/images/mazda1.png', alt: 'Mazda1' },
  { src: '/images/mazda2.png', alt: 'Mazda2' },
  { src: '/images/mazda3.png', alt: 'Mazda3' },
  { src: '/images/mazda4.png', alt: 'Mazda4' },
  { src: '/images/fordcar.png', alt: 'Ford' },
  { src: '/images/ford1.png', alt: 'Ford1' },
  { src: '/images/ford2.png', alt: 'Ford2' },
  { src: '/images/ford3.png', alt: 'Ford3' },
  { src: '/images/ford4.png', alt: 'Ford4' },
  { src: '/images/chevroletcar.png', alt: 'Chevrolet' },
  { src: '/images/chevrolet1.png', alt: 'Chevrolet1' },
  { src: '/images/chevrolet2.png', alt: 'Chevrolet2' },
  { src: '/images/chevrolet3.png', alt: 'Chevrolet3' },
  { src: '/images/chevrolet4.png', alt: 'Chevrolet4' },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 2 : prevIndex - 2));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  return (
    <section id="home" className="pt-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="relative w-full max-w-2xl h-64 flex justify-center">
        {[0, 1].map((offset) => (
          <div
            key={offset}
            className={`absolute w-1/2 h-full transition-opacity duration-500 ${offset === 1 ? 'right-0' : 'left-0'}`}
          >
            <Image
              src={images[(currentIndex + offset) % images.length].src}
              alt={images[(currentIndex + offset) % images.length].alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
        >
          {'>'}
        </button>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 pt-10">Encuentra los Mejores Repuestos para tu Vehículo</h2>
      <p className="text-base sm:text-lg lg:text-xl mb-8">Especializados en Mazda, Ford y Chevrolet.</p>
      <a href="#contact" className="bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#e5e5e5] font-bold px-4 py-2 rounded">Contáctanos</a>
      <div className="flex space-x-4 mt-5 justify-center">
        <a href="https://www.facebook.com/profile.php?id=61559420653844" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl hover:text-[#fca311]" />
        </a>
        <a href="https://www.instagram.com/repuestos_en_linea_bogota" target="_blank" rel="noopener noreferrer">
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
