import '../styles/Home.css';
import { FaWhatsapp } from 'react-icons/fa';

function Home() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "5521970267180"; // Número do WhatsApp da academia
        const message = "Olá! Gostaria de saber mais sobre a academia.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="home" className="home">
            <div className="hero">
                <div className='hero-content'>                    
                    <h2>Academia Lobo de Éden</h2>
                    <h3>Transforme seu corpo</h3>
                    <p>Transforme sua vida</p>
                    <button className="cta-button" onClick={handleWhatsAppClick}>
                        <FaWhatsapp /> Começar Agora
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
