import '../styles/Home.css';
import { FaWhatsapp } from 'react-icons/fa';

function Home() {    const handleWhatsAppClick = () => {
        const phoneNumber = "5521964721090";
        const message = "Olá! Gostaria de saber mais sobre a academia.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="home" className="home">
            <div className="hero">                <div className='hero-content'>                    
                    <h2 className="animate-fadeIn initially-hidden">Academia Lobo de Éden</h2>
                    <h3 className="animate-fadeIn delay-200 initially-hidden">Transforme seu corpo</h3>
                    <p className="animate-fadeIn delay-300 initially-hidden">Transforme sua vida</p>
                    <button className="cta-button animate-scaleIn delay-400 initially-hidden" onClick={handleWhatsAppClick}>
                        <FaWhatsapp /> Começar Agora
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
