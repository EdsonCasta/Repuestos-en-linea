import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Calidad Garantizada",
      description: "Solo trabajamos con repuestos de la más alta calidad.",
    },
    {
      title: "Envío Rápido",
      description: "Entrega rápida y segura en toda la ciudad de Bogotá.",
    },
    {
      title: "Pago Contra Entrega",
      description: "Paga tus repuestos en el momento de recibirlos, sin complicaciones.",
    },
  ];

  return (
    <section id="features" className="py-12 pt-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center pt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-base sm:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
