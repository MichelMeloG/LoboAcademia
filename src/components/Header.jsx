import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="Logo Lobo Academia" />
                </a>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
