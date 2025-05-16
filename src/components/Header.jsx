import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="Logo Lobo Academia" />
                </a>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#modalidades" onClick={closeMenu}>Qualidades</a></li>
                    <li><a href="#instalacoes" onClick={closeMenu}>Instalações</a></li>
                    <li><a href="#planos" onClick={closeMenu}>Planos</a></li>
                    <li><a href="#contato" onClick={closeMenu}>Informações</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
