import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaMoneyBillWave,FaUserCheck, FaFileAlt, FaCog,FaTools, FaUsers, FaDatabase } from 'react-icons/fa';
import { MdAddCircleOutline, MdListAlt } from 'react-icons/md';
import { useState } from 'react';
const Layout = ({ children }) => {
    const [openAccordion, setOpenAccordion] = useState('');
    const [activeLink, setActiveLink] = useState('');

    const toggleAccordion = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? '' : accordionId);
    };

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <div className="d-flex bg-white layout">
            <div className="sidebar flex-shrink-0 p-3 bg-light">
                <h4 className="text-center mb-4" style={{ color: '#439af7' }}>
                    Tableau de Bord
                </h4>
                <div className="accordion" id="accordionExample">

                    {/* Gestion des apprenants */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                onClick={() => toggleAccordion('apprenants')}
                                aria-expanded={openAccordion === 'apprenants'}
                            >
                                <FaUserGraduate className="me-2" /> Gestion des apprenants
                            </button>
                        </h2>
                        <div 
                            id="apprenants" 
                            className={`accordion-collapse collapse ${openAccordion === 'apprenants' ? 'show' : ''}`} 
                            aria-labelledby="headingOne" 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'ajoutapprenant' ? 'text-primary' : 'text-dark'}`} 
                                            href="#"
                                            onClick={() => handleLinkClick('ajoutapprenant')}
                                        >
                                            <MdAddCircleOutline className="me-2" /> Ajout apprenant
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'listesapprenants' ? 'text-primary' : 'text-dark'}`} 
                                            href="/app"
                                            onClick={() => handleLinkClick('listesapprenants')}
                                        >
                                            <MdListAlt className="me-2" /> Listes apprenants
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Gestion des Formateurs */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                onClick={() => toggleAccordion('enseignants')}
                                aria-expanded={openAccordion === 'enseignants'}
                            >
                                <FaChalkboardTeacher className="me-2" /> Gestion des Formateurs
                            </button>
                        </h2>
                        <div 
                            id="enseignants" 
                            className={`accordion-collapse collapse ${openAccordion === 'enseignants' ? 'show' : ''}`} 
                            aria-labelledby="headingTwo" 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'ajoutformateur' ? 'text-primary' : 'text-dark'}`} 
                                            href="#"
                                            onClick={() => handleLinkClick('ajoutformateur')}
                                        >
                                            <MdAddCircleOutline className="me-2" /> Ajout Formateur
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'listesformateurs' ? 'text-primary' : 'text-dark'}`} 
                                            href="/form"
                                            onClick={() => handleLinkClick('listesformateurs')}
                                        >
                                            <MdListAlt className="me-2" /> Listes Formateurs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
        <button 
            className="accordion-button" 
            type="button" 
            onClick={() => toggleAccordion('assiduite')}
            aria-expanded={openAccordion === 'assiduite'}
        >
            <FaUserCheck className="me-2" /> Gestion de l'Assiduité
        </button>
    </h2>
    <div 
        id="assiduite" 
        className={`accordion-collapse collapse ${openAccordion === 'assiduite' ? 'show' : ''}`} 
        aria-labelledby="headingTwo" 
        data-bs-parent="#accordionExample"
    >
        <div className="accordion-body">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'ajoutassiduite' ? 'text-primary' : 'text-dark'}`} 
                        href="#"
                        onClick={() => handleLinkClick('ajoutassiduite')}
                    >
                        <MdAddCircleOutline className="me-2" /> Ajout Assiduité
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'listesassiduite' ? 'text-primary' : 'text-dark'}`} 
                        href="/assiduite"
                        onClick={() => handleLinkClick('listesassiduite')}
                    >
                        <MdListAlt className="me-2" /> Listes Assiduité
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>


                    {/* Gestion des Cours */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                onClick={() => toggleAccordion('cours')}
                                aria-expanded={openAccordion === 'cours'}
                            >
                                <FaBook className="me-2" /> Gestion des Cours
                            </button>
                        </h2>
                        <div 
                            id="cours" 
                            className={`accordion-collapse collapse ${openAccordion === 'cours' ? 'show' : ''}`} 
                            aria-labelledby="headingThree" 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'ajoutcours' ? 'text-primary' : 'text-dark'}`} 
                                            href="#"
                                            onClick={() => handleLinkClick('ajoutcours')}
                                        >
                                            <MdAddCircleOutline className="me-2" /> Ajout Cours
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'listescours' ? 'text-primary' : 'text-dark'}`} 
                                            href="/cour"
                                            onClick={() => handleLinkClick('listescours')}
                                        >
                                            <MdListAlt className="me-2" /> Listes Cours
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'emploiTemps' ? 'text-primary' : 'text-dark'}`} 
                                            href="/emploi"
                                            onClick={() => handleLinkClick('emploiTemps')}
                                        >
                                            <FaFileAlt className="me-2" /> Emploi du Temps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Gestion de la Comptabilité */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                onClick={() => toggleAccordion('comptabilite')}
                                aria-expanded={openAccordion === 'comptabilite'}
                            >
                                <FaMoneyBillWave className="me-2" /> Gestion de la Comptabilité
                            </button>
                        </h2>
                        <div 
                            id="comptabilite" 
                            className={`accordion-collapse collapse ${openAccordion === 'comptabilite' ? 'show' : ''}`} 
                            aria-labelledby="headingFour" 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'ajoutpaiement' ? 'text-primary' : 'text-dark'}`} 
                                            href="#"
                                            onClick={() => handleLinkClick('ajoutpaiement')}
                                        >
                                            <MdAddCircleOutline className="me-2" /> Ajout Paiement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'listespaiements' ? 'text-primary' : 'text-dark'}`} 
                                            href="/paye"
                                            onClick={() => handleLinkClick('listespaiements')}
                                        >
                                            <MdListAlt className="me-2" /> Listes Paiements
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Rapport */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button 
                                className="accordion-button" 
                                type="button" 
                                onClick={() => toggleAccordion('rapport')}
                                aria-expanded={openAccordion === 'rapport'}
                            >
                                <FaFileAlt className="me-2" /> Rapport
                            </button>
                        </h2>
                        <div 
                            id="rapport" 
                            className={`accordion-collapse collapse ${openAccordion === 'rapport' ? 'show' : ''}`} 
                            aria-labelledby="headingFive" 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'optionsrapports' ? 'text-primary' : 'text-dark'}`} 
                                            href="/rapport"
                                            onClick={() => handleLinkClick('optionsrapports')}
                                        >
                                            <FaCog className="me-2" /> Options de Rapports
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            className={`nav-link ${activeLink === 'affichageRapports' ? 'text-primary' : 'text-dark'}`} 
                                            href="/rapport"
                                            onClick={() => handleLinkClick('affichageRapports')}
                                        >
                                            <FaFileAlt className="me-2" /> Affichage des Rapports
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Paramètres */}
                    <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
        <button 
            className="accordion-button" 
            type="button" 
            onClick={() => toggleAccordion('parametres')}
            aria-expanded={openAccordion === 'parametres'}
        >
            <FaCog className="me-2" /> Paramètres
        </button>
    </h2>
    <div 
        id="parametres" 
        className={`accordion-collapse collapse ${openAccordion === 'parametres' ? 'show' : ''}`} 
        aria-labelledby="headingSix" 
        data-bs-parent="#accordionExample"
    >
        <div className="accordion-body">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'optionsconfiguration' ? 'text-primary' : 'text-dark'}`} 
                        href="/option"
                        onClick={() => handleLinkClick('optionsconfiguration')}
                    >
                        <FaCog className="me-2" /> Options de Configuration
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'gestionutilisateurs' ? 'text-primary' : 'text-dark'}`} 
                        href="/util"
                        onClick={() => handleLinkClick('gestionutilisateurs')}
                    >
                        <FaUsers className="me-2" /> Gestion des Utilisateurs
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'sauvegardedonnees' ? 'text-primary' : 'text-dark'}`} 
                        href="/sauve"
                        onClick={() => handleLinkClick('sauvegardedonnees')}
                    >
                        <FaDatabase className="me-2" /> Sauvegarde des Données
                    </a>
                </li>
             
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === 'parametreapplication' ? 'text-primary' : 'text-dark'}`} 
                        href="/appli"
                        onClick={() => handleLinkClick('parametreapplication')}
                    >
                        <FaTools className="me-2" /> Paramètre de l'Application
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>



                </div>
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
                                <img src="#" alt="User" className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className="text-center p-2">
                    <p>&copy;  Objectif Canada</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
