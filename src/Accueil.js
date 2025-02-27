import React, { useState } from 'react';
import monImage from './Assets/accueil.jpg';
import monImage1 from './Assets/accueil2.jpg';
import monImage2 from './Assets/accueil3.avif';
import monImage3 from './Assets/accueil4.avif';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap pour le carrousel
import './App.css'; // Assurez-vous que vous avez ce fichier CSS pour les styles

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <header>
                <h1>Gestion des Apprenants</h1>
            </header>

            <main>
                {/* Carousel (Diaporama) */}
                <section id="hero" className="carousel slide" data-bs-ride="carousel" interval="5000">
                    <div className="carousel-inner " >
                        <div className="carousel-item active">
                            <img src={monImage} className="d-block w-100 " alt="accueil" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={monImage1} className="d-block w-100 " alt="accueil2" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={monImage2} className="d-block w-100 " alt="accueil2" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={monImage3} className="d-block w-100 " alt="accueil2" style={{ height: '400px', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* Contrôles du carrousel */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Précédent</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Suivant</span>
                    </button>

                    <div className="carousel-caption d-none d-md-block">
                       
                        <p>Facilitez le suivi et la gestion de vos apprenants avec notre solution intuitive.</p>
                        <a href="/conn" className="btn-animated">
                            Commencez Maintenant
                        </a>
                    </div>
                </section>

                {/* Autres sections... */}
            </main>

            <footer>
                <p>&copy; 2025 Application de Gestion d'Apprenants. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default App;
