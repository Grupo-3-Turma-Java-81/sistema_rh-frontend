import { Link, useNavigate } from "react-router-dom";
import { type ReactNode, useContext, useState } from 'react';

import './Navbar.css';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('funcionarios');

    const toggleView = () => {
        setCurrentView(currentView === 'funcionarios' ? 'rh' : 'funcionarios');
    };

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('O usuário foi desconectado com sucesso!')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home-rh" className="logo-button">
                        <img
                            src="./src/assets/logo/neorh-logo-nav-bar.png"
                            alt="Logo Neo RH"
                            className="logo-imagem" />
                    </Link>

                    <div className="nav-center">
                        <Link to="/sobre-nos" className="nav-button">
                            Sobre Nós
                        </Link>
                        <button
                            className="nav-button"
                            onClick={toggleView}
                        >
                            {currentView === 'funcionarios' ? 'Área do RH' : 'Área do Funcionário'}
                        </button>
                    </div>

                    <Link className="user-info-button" onClick={logout} to="/">
                        Logout
                    </Link>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>
            </nav>
        )
    }

    return (
        <>
            {component}
        </>
    );
};

export default Navbar;