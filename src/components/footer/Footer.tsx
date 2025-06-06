import './Footer.css';

import { InstagramLogoIcon } from '@phosphor-icons/react';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">NEO RH - Code³ | Copyright: 2025</p>
                
                <div className="social-section">
                    <p>Acesse nossas redes sociais</p>
                
                    <div className="social-links">
                        <a
                            href="https://github.com/Grupo-3-Turma-Java-81/sistema_rh-frontend" target="_blank">
                            <GithubLogoIcon size={48} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/p/DHJ98FCvJdo/" target="_blank">
                            <InstagramLogoIcon size={48} />
                        </a>
                    </div>
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;