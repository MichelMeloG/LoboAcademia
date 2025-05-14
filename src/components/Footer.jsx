import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Lobo Academia</h4>
                        <p>Transformando vidas através do fitness desde 2025.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#planos">Planos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">YouTube</a>
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
