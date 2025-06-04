import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('funcionarios');

  const toggleView = () => {
    setCurrentView(currentView === 'funcionarios' ? 'rh' : 'funcionarios');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="logo-button">
          <div className="flex justify-center mb-10 ">
                        <img
                            src=" https://ik.imagekit.io/yjyy0thaz/neorh.webp?updatedAt=1749057531445"
                            alt="Logo Neo RH"
                className="w-10 h-10" />
          </div>
        </button>

        <div className="nav-center">
          <button className="nav-button">
            Sobre Nós
          </button>
          <button 
            className="nav-button"
            onClick={toggleView}
          >
            {currentView === 'funcionarios' ? 'Área do RH' : 'Área do Funcionário'}
          </button>
        </div>

        <button className="user-info-button">
          Informações do Usuário
        </button>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 