"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactInfo from './contactInfo';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className="flex w-full p-2 pt-20">
      <div className="flex-1">
        <ContactInfo />
      </div>
      <div className="flex-1 bg-white shadow-md rounded-lg border border-gray-200">
      <form onSubmit={sendEmail} className="flex-1 p-10">
        <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">Contáctanos</h2>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Mensaje:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14213d] focus:border-transparent"
            rows={5}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#e5e5e5] font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:ring-offset-2 transition duration-150"
          >
            Enviar
          </button>
        </div>
      </form>
      </div>
    </section>
  );
};

export default ContactForm;
