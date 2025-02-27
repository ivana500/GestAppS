import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const Rapport1 = () => {
    const [formateur, setFormateur] = useState(''); // Nom du formateur
    const [apprenant, setApprenant] = useState(''); // Apprenant sélectionné
    const [commentaire, setCommentaire] = useState(''); // Commentaire du formateur
    const [rapportType, setRapportType] = useState(''); // Rapport sélectionné

    // Liste des apprenants (à remplacer par une vraie liste si besoin)
    const apprenantsList = [
        { id: 1, name: 'Jean Dupont' },
        { id: 2, name: 'Marie Lemoine' },
        { id: 3, name: 'Pierre Martin' },
    ];

    // Fonction de gestion de l'envoi du rapport
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formateur && apprenant && commentaire) {
            // Affichage des données dans la console (à remplacer par une soumission réelle)
            console.log('Formateur:', formateur);
            console.log('Apprenant:', apprenant);
            console.log('Commentaire:', commentaire);
            alert('Rapport envoyé avec succès!');
            // Réinitialisation des champs après l'envoi
            setFormateur('');
            setApprenant('');
            setCommentaire('');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Formulaire de Rapport</h1>

            {/* Formulaire de saisie */}
            <form onSubmit={handleSubmit}>
                {/* Nom du formateur */}
                <div className="mb-4">
                    <label htmlFor="formateur" className="form-label">Nom du Formateur</label>
                    <input
                        type="text"
                        id="formateur"
                        className="form-control"
                        value={formateur}
                        onChange={(e) => setFormateur(e.target.value)}
                        placeholder="Entrez le nom du formateur"
                    />
                </div>

                {/* Sélecteur d'apprenant */}
                <div className="mb-4">
                    <label htmlFor="apprenant" className="form-label">Choisir un Apprenant</label>
                    <select
                        className="form-select"
                        id="apprenant"
                        value={apprenant}
                        onChange={(e) => setApprenant(e.target.value)}
                    >
                        <option value="">Sélectionner un apprenant</option>
                        {apprenantsList.map((apprenant) => (
                            <option key={apprenant.id} value={apprenant.name}>
                                {apprenant.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Commentaire */}
                <div className="mb-4">
                    <label htmlFor="commentaire" className="form-label">Commentaire du Formateur</label>
                    <textarea
                        id="commentaire"
                        className="form-control"
                        rows="4"
                        value={commentaire}
                        onChange={(e) => setCommentaire(e.target.value)}
                        placeholder="Entrez votre commentaire"
                    />
                </div>

                {/* Bouton envoyer */}
                <button type="submit" className="btn btn-primary">
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default Rapport1;
