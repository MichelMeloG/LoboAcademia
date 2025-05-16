import React from 'react';
import '../styles/GoogleMap.css';

function GoogleMap() {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9811810357387!2d-43.37238902378866!3d-22.80427633816401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9963e90d65c15f%3A0x7f475d657807c3c9!2sR.%20Domingos%20Alves%20de%20Oliveira%2C%20147%20-%20%C3%89den%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ%2C%2025545-030!5e0!3m2!1spt-BR!2sbr!4v1684121234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default GoogleMap;
