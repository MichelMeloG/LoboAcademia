import '../styles/Planos.css';
import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../hooks/useInView';

function Planos() {
    const [planoRef, isInView] = useInView();
    
    const handleWhatsAppClick = () => {
        const phoneNumber = "5521964721090";
        const message = "Olá! Gostaria de me matricular na academia.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const beneficios = [
        "Sem taxa de adesão",
        "Musculação completa",
        "Primeira avaliação física grátis"
    ];    return (
        <section id="planos" className="planos" ref={planoRef}>
            <div className="container">
                <h2 className={`${isInView ? 'animate-fadeIn' : ''} initially-hidden`}>Plano Único</h2>
                <div className={`plano-container ${isInView ? 'animate-fadeIn delay-200' : ''} initially-hidden`}><div className="plano-card animate-scaleIn initially-hidden">
                        <h3 className="animate-fadeIn delay-200 initially-hidden">Mensal</h3>
                        <div className="preco animate-fadeIn delay-300 initially-hidden">
                            <span className="valor">R$ 85,00</span>
                            <span className="periodo">/mês</span>
                        </div>
                        <ul className="animate-fadeIn delay-400 initially-hidden">
                            {beneficios.map((beneficio, idx) => (
                                <li key={idx}>{beneficio}</li>
                            ))}
                        </ul>
                        <button className="matricula-btn animate-pulse" onClick={handleWhatsAppClick}>
                            <FaWhatsapp /> Matricule-se Agora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Planos;
