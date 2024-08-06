// repuestos-en-linea/components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Calidad Garantizada</h3>
            <p>Solo trabajamos con repuestos de la más alta calidad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Envío Rápido</h3>
            <p>Entrega rápida y segura en toda la región.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Soporte Profesional</h3>
            <p>Asistencia experta para ayudarte con tus necesidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
