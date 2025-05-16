import '../styles/Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {    const handleWhatsAppClick = () => {
        const phoneNumber = "5521964721090";
        const message = "Olá! Gostaria de saber mais sobre a academia.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Lobo Academia</h4>
                        <p>Transformando vidas através do fitness desde 2025.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/academialobodeeden/" className="social-icon">
                                <FaInstagram />
                            </a>
                            <button onClick={handleWhatsAppClick} className="social-icon whatsapp-button">
                                <FaWhatsapp />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Lobo Academia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
