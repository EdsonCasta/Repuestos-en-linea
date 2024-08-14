"use client";

import React, { useEffect } from 'react';

const WhatsAppChatWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apps.elfsight.com/p/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="elfsight-app-d41af9a9-2b31-4feb-be13-c401ff330356"
            style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        />
    );
};

export default WhatsAppChatWidget;
