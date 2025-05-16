import '../styles/Contato.css';
import GoogleMap from './GoogleMap';
import useInView from '../hooks/useInView';

function Contato() {
    const [infoRef, isInView] = useInView();    return (
        <section id="contato" className="contato" ref={infoRef}>
            <div className="container">
                <h2 className={`${isInView ? 'animate-fadeIn' : ''} initially-hidden`}>Informações</h2>
                <div className={`contato-flex-container ${isInView ? 'animate-fadeIn delay-200' : ''} initially-hidden`}>
                    <div className="contato-info-section">
                        <div className="info">
                            <div className="info-item">
                                <strong>Endereço:</strong>
                                <p>R. Domingos Alves de Oliveira, 147 - Éden</p>
                                <p>São João de Meriti - RJ</p>
                            </div>
                            <div className="info-item">
                                <strong>Telefone:</strong>
                                <p>(21) 96472-1090</p>
                            </div>
                            <div className="info-item">
                                <strong>Email:</strong>
                                <p>academialobodeeden@gmail.com</p>
                            </div>
                            <div className="info-item">
                                <strong>Horário de Funcionamento:</strong>
                                <p>Segunda a Sexta: 6h às 22h</p>
                                <p>Sábados: 7h às 15h</p>                            
                            </div>
                        </div>
                    </div>
                    <div className="contato-map-section">
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contato;
