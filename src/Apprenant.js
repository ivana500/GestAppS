import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ListeApprenant = () => {
    const [apprenants, setApprenant] = useState([]);
    const [newApprenant, setNewApprenant] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        dateins: '',
        photo: null // Ajouter la photo ici
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setNewApprenant({ ...newApprenant, photo: files[0] }); // Gestion du fichier photo
        } else {
            setNewApprenant({ ...newApprenant, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Créer un objet FormData pour l'envoi du fichier (si nécessaire)
        const formData = new FormData();
        formData.append('nom', newApprenant.nom);
        formData.append('prenom', newApprenant.prenom);
        formData.append('email', newApprenant.email);
        formData.append('telephone', newApprenant.telephone);
        formData.append('dateins', newApprenant.dateins);
        formData.append('photo', newApprenant.photo); // Ajouter la photo

        // Ajouter un nouvel apprenant
        setApprenant([...apprenants, newApprenant]);
        
        // Réinitialisation du formulaire
        setNewApprenant({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            dateins: '',
            photo: null // Réinitialiser la photo
        });

        // Fermer le modal
        const modal = document.getElementById('addApprenantModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Liste des Apprenants</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-user-graduate me-2"></i>Apprenants</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addApprenantModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter un Apprenant
                    </button>
                </div>
                <div className="card-body shadow">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3 align-middle mt-4">
                            <thead className="table-primary">
                                <tr className="text-center fw-bold">
                                    <th scope="col">ID</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Téléphone</th>
                                    <th scope="col">Date d'Inscription</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apprenants.map((apprenant, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{apprenant.nom}</td>
                                        <td className="text-center">{apprenant.prenom}</td>
                                        <td className="text-center">{apprenant.email}</td>
                                        <td className="text-center">{apprenant.telephone}</td>
                                        <td className="text-center">{apprenant.dateins}</td>
                                        <td className="text-center">
                                            {apprenant.photo && <img src={URL.createObjectURL(apprenant.photo)} alt="Formateur" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />}
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-warning btn-sm">Modifier</button>
                                            <button className="btn btn-danger btn-sm ms-2">Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal pour ajouter un apprenant */}
            <div className="modal fade" id="addApprenantModal" tabIndex="-1" aria-labelledby="addApprenantModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success " id="addApprenantModalLabel"><i className="fas fa-user-graduate me-2"></i>Ajouter un Apprenant</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="nom" name="nom" value={newApprenant.nom} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prenom" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="prenom" name="prenom" value={newApprenant.prenom} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={newApprenant.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="form-label">Téléphone</label>
                                    <input type="text" className="form-control" id="telephone" name="telephone" value={newApprenant.telephone} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateins" className="form-label">Date d'Inscription</label>
                                    <input type="date" className="form-control" id="dateins" name="dateins" value={newApprenant.dateins} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Photo</label>
                                    <input type="file" className="form-control" id="photo" name="photo" onChange={handleChange} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                    <button type="submit" className="btn btn-success">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListeApprenant;
