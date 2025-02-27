import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ProfilApprenant = () => {
    // Simuler un apprenant, remplacer plus tard par des données dynamiques de la base de données
    const [apprenant, setApprenant] = useState({
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'jean.dupont@example.com',
        telephone: '0123456789',
        dateins: '2023-09-15',
        photo: null, // Ajouter une photo si disponible
    });

    useEffect(() => {
        // Si la photo était déjà présente, il est possible de la charger depuis un fichier ou URL
        // Exemple d'utilisation d'une image statique en attendant de lier à la base de données
        setApprenant((prev) => ({
            ...prev,
            photo: 'https://via.placeholder.com/150' // Image par défaut
        }));
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Profil de l'Apprenant</h1>
            <div className="card border-primary mb-3 rounded-3 shadow">
                <div className="card-header bg-secondary-subtle text-success rounded-3 d-flex justify-content-center align-items-center">
                    <h3 className="mb-0"><i className="fas fa-user-graduate me-2"></i>Informations de l'Apprenant</h3>
                </div>
                <div className="card-body shadow">
                    <div className="row">
                        {/* Photo de l'apprenant */}
                        <div className="col-md-4 text-center">
                            <img
                                src={apprenant.photo}
                                alt="Apprenant"
                                className="img-fluid rounded-circle"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Informations de l'apprenant */}
                        <div className="col-md-8">
                            <h4 className="text-success">{apprenant.nom} {apprenant.prenom}</h4>
                            <p className="text-muted">Email: {apprenant.email}</p>
                            <hr />
                            <div>
                                <h5>Téléphone</h5>
                                <p>{apprenant.telephone}</p>
                            </div>
                            <div>
                                <h5>Date d'inscription</h5>
                                <p>{new Date(apprenant.dateins).toLocaleDateString()}</p>
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

export default ProfilApprenant;
