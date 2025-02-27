import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaCog, FaCalendarAlt } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { useState } from 'react';

const Layout3 = ({ children }) => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <div className="d-flex bg-white layout">
            <div className="sidebar flex-shrink-0 p-3 bg-light">
                <h4 className="text-center mb-4" style={{ color: '#439af7' }}>
                   Tableau de bord<br/> Apprenant
                </h4>

                {/* Liens */}
                <ul className="nav flex-column mb-3">
                    <li className="nav-item">
                        <a 
                            className={`nav-link ${activeLink === 'profils' ? 'text-primary' : 'text-dark'}`} 
                            href="/profil"
                            onClick={() => handleLinkClick('profils')}
                        >
                            <FaCog className="me-2" /> Profils
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={`nav-link ${activeLink === 'emplois' ? 'text-primary' : 'text-dark'}`} 
                            href="/emploi2"
                            onClick={() => handleLinkClick('emplois')}
                        >
                            <FaCalendarAlt className="me-2" /> Emploi du Temps
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={`nav-link ${activeLink === 'formation' ? 'text-primary' : 'text-dark'}`} 
                            href="/formation"
                            onClick={() => handleLinkClick('formation')}
                        >
                            <MdComputer className="me-2" /> Formation à Distance
                        </a>
                    </li>
                </ul>
            </div>

            <div className="content flex-grow-1 p-4">
                <header className="bg-primary text-white text-center p-3">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <a href="/accueil"><h1 className="h4">GestAppS</h1></a>   
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control me-2" placeholder="Recherche..." aria-label="Recherche" />
                            <div className="position-relative me-3">
                                <button className="btn btn-primary position-relative">
                                    <i className="fa-solid fa-bell"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
                                </button>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src="images/laperle.png" alt="User" className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className="text-center p-2">
                    <p>&copy; Objectif Canada</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout3;
