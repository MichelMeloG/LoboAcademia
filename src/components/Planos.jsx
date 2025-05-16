import '../styles/Planos.css';
import { FaWhatsapp } from 'react-icons/fa';

function Planos() {    const handleWhatsAppClick = () => {
        const phoneNumber = "5521964721090";
        const message = "Olá! Gostaria de me matricular na academia.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const beneficios = [
        "Sem taxa de adesão",
        "Musculação completa",
        "Primeira avaliação física grátis"
    ];

    return (
        <section id="planos" className="planos">
            <div className="container">
                <h2>Plano Único</h2>
                <div className="plano-container">
                    <div className="plano-card">
                        <h3>Mensal</h3>
                        <div className="preco">
                            <span className="valor">R$ 85,00</span>
                            <span className="periodo">/mês</span>
                        </div>
                        <ul>
                            {beneficios.map((beneficio, idx) => (
                                <li key={idx}>{beneficio}</li>
                            ))}
                        </ul>
                        <button className="matricula-btn" onClick={handleWhatsAppClick}>
                            <FaWhatsapp /> Matricule-se Agora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Planos;
