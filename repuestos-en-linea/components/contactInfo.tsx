import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-10">Información de Contacto</h3>
            <div className="flex items-center mb-10">
                <FaEnvelope className="text-[#fca311] mr-2" />
                <span>repuestosenlinea24@gmail.com</span>
            </div>
            <div className="flex items-center mb-10">
                <FaPhoneAlt className="text-[#fca311] mr-2" />
                <span>+57 318 3704645</span>
            </div>
            <div className="flex items-center mb-10">
                <FaWhatsapp className="text-[#fca311] mr-2" />
                <span>WhatsApp: +57 318 3704645</span>
            </div>
            <div className="flex space-x-8 mb-10">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl text-[#fca311] hover:text-[#14213d]" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl text-[#fca311] hover:text-[#14213d]" />
                </a>
                <a href="https://wa.me/573183704645" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-xl text-[#fca311] hover:text-[#14213d]" />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
