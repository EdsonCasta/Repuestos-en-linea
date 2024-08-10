"use client";

import React, { useState } from 'react';
import ContactInfo from './contactInfo';
import { validateFormData } from '../utils/validations';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch('https://usebasin.com/f/52570c6eae51', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Mensaje enviado con éxito.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="flex flex-col md:flex-row w-full md:p-4 gap-10">
      <div className="md:flex-1">
        <ContactInfo />
      </div>
      <div className="md:flex-1 bg-white shadow-lg rounded-xl border border-gray-200 md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto">
          <h2 className="text-2xl text-center font-bold mb-5">Contáctanos</h2>

          <div className="mb-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre y apellido"
              required
              className={`w-full px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
              className={`w-full px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Celular:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10 dígitos - sin espacios ni guiones"
              required
              className={`w-full px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              required
              className={`w-full px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent ${errors.message ? 'border-red-500' : ''}`}
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="text-left px-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-40 bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#e5e5e5] font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:ring-offset-2 transition duration-150 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            {formStatus && (
              <p className={`mt-4 ${formStatus.toLowerCase().includes('éxito') ? 'text-[#14213d]' : 'text-red-500'}`}>
                {formStatus}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
