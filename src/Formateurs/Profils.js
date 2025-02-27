import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ProfilFormateur = () => {
    // Simuler un formateur, remplacer plus tard par des données dynamiques de la base de données
    const [formateur, setFormateur] = useState({
        nomForm: 'Dupont',
        prenomForm: 'Jean',
        email: 'jean.dupont@example.com',
        telephone: '0123456789',
        specialite: 'Développement Web',
        photo: null, // Ajouter une photo si disponible
    });

    useEffect(() => {
        // Si la photo était déjà présente, il est possible de la charger depuis un fichier ou URL
        // Exemple d'utilisation d'une image statique en attendant de lier à la base de données
        setFormateur((prev) => ({
            ...prev,
            photo: 'https://via.placeholder.com/150' // Image par défaut
        }));
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Profil du Formateur</h1>
            <div className="card border-primary mb-3 rounded-3 shadow">
                <div className="card-header bg-secondary-subtle text-success rounded-3 d-flex justify-content-center align-items-center">
                    <h3 className="mb-0"><i className="fas fa-user-circle me-2"></i>Informations du Formateur</h3>
                </div>
                <div className="card-body shadow">
                    <div className="row">
                        {/* Photo du formateur */}
                        <div className="col-md-4 text-center">
                            <img
                                src={formateur.photo}
                                alt="Formateur"
                                className="img-fluid rounded-circle"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Informations du formateur */}
                        <div className="col-md-8">
                            <h4 className="text-success">{formateur.nomForm} {formateur.prenomForm}</h4>
                            <p className="text-muted">{formateur.specialite}</p>
                            <hr />
                            <div>
                                <h5>Email</h5>
                                <p>{formateur.email}</p>
                            </div>
                            <div>
                                <h5>Téléphone</h5>
                                <p>{formateur.telephone}</p>
                            </div>
                            <div>
                                <h5>Spécialité</h5>
                                <p>{formateur.specialite}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bouton pour modifier les informations */}
            <div className="text-center">
                <button
                    className="btn btn-warning rounded-5 shadow"
                    onClick={() => alert('Modifier fonctionnalité non implémentée')}
                >
                    <i className="fas fa-edit me-2"></i>Modifier Profil
                </button>
            </div>
        </div>
    );
};

export default ProfilFormateur;
