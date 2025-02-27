import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Utiliser useNavigate dans React Router v6
import inscriptionImage from './Assets/inscription.avif'; // Image à gauche
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './App.css'; // Votre fichier CSS personnalisé

const Connexion = () => {
    const [formData, setFormData] = useState({
        login: '',   // "login" à la place de "email"
        password: '',
        role: 'apprenant',
    });

    const [error, setError] = useState(''); // Gérer les erreurs d'authentification
    const navigate = useNavigate();  // Utilisation de useNavigate pour la navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // On prépare les données à envoyer au serveur
        const formDataToSend = {
            login: formData.login,
            password: formData.password,
            role: formData.role,  // Le rôle sélectionné
        };
    
        try {
            // On effectue la requête POST avec async/await
            const response = await fetch("http://localhost/backend/traitementAuth.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formDataToSend),
              })

            const result = await response.json(); // Récupérer la réponse en JSON

            if (result.success) {
                // Si la connexion réussie, rediriger l'utilisateur en fonction de son rôle
                switch (result.role) {
                    case 'admin':
                        navigate('/app'); // Exemple avec react-router v6
                        break;
                    case 'formateur':
                        navigate('/profils');
                        break;
                    case 'apprenant':
                        navigate('/profil');
                        break;
                    default:
                        setError('Rôle inconnu');
                        break;
                }
            } else {
                // Si la connexion échoue, afficher un message d'erreur
                setError(result.message || 'Erreur lors de la connexion');
            }
        } catch (err) {
            // Gérer les erreurs réseau
            setError('Erreur de communication avec le serveur');
            console.error(err);
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="row w-100">
                {/* Image à gauche */}
                <div className="col-md-6 p-0">
                    <img 
                        src={inscriptionImage} 
                        alt="Inscription" 
                        className="img-fluid h-100 w-100"  // Augmenter la largeur de l'image
                        style={{ objectFit: 'cover' }} // Empêche la déformation de l'image
                    />
                </div>

                {/* Formulaire de connexion à droite */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="form-container">
                        <h2 className="text-center mb-4 font-weight-bold">Connexion</h2>
                        {error && <div className="alert alert-danger">{error}</div>}  {/* Afficher l'erreur si présente */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="login" className="form-label font-weight-bold">Login</label>
                                <input 
                                    type="text" 
                                    id="login" 
                                    name="login" 
                                    value={formData.login} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                    placeholder="Entrez votre login" 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label font-weight-bold">Mot de passe</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                    placeholder="Entrez votre mot de passe" 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label font-weight-bold">Rôle</label>
                                <select 
                                    id="role" 
                                    name="role" 
                                    value={formData.role} 
                                    onChange={handleChange} 
                                    className="form-select" 
                                    required
                                >
                                    <option value="admin">Admin</option>
                                    <option value="formateur">Formateur</option>
                                    <option value="apprenant">Apprenant</option>
                                </select>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-danger">Connexion</button>
                            </div>
                        </form>

                        <div className="mt-3 text-center">
                            <a href="#" className="d-block font-weight-bold">Mot de passe oublié ?</a>
                            <a href="/ins" className="d-block font-weight-bold">Créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connexion;
