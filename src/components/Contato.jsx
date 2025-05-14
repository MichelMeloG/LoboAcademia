import '../styles/Contato.css';

function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="container">
                <h2>Entre em Contato</h2>
                <div className="contato-container">
                    <div className="info">
                        <h3>Informações</h3>
                        <div className="info-item">
                            <strong>Endereço:</strong>
                            <p>Av. Principal, 1000 - Centro</p>
                            <p>São Paulo - SP</p>
                        </div>
                        <div className="info-item">
                            <strong>Telefone:</strong>
                            <p>(11) 99999-9999</p>
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <p>contato@loboacademia.com</p>
                        </div>
                        <div className="info-item">
                            <strong>Horário de Funcionamento:</strong>
                            <p>Segunda a Sexta: 6h às 23h</p>
                            <p>Sábados: 8h às 18h</p>
                            <p>Domingos: 8h às 14h</p>
                        </div>
                    </div>
                    <form className="contato-form">
                        <div className="form-group">
                            <input type="text" placeholder="Nome" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Telefone" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Mensagem" required rows="5"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contato;
