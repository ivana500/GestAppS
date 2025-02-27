import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ListeFormateur = () => {
    const [formateurs, setFormateur] = useState([]);
    const [newFormateur, setNewFormateur] = useState({
        nomForm: '',
        prenomForm: '',
        email: '',
        telephone: '',
        specialite: '',
        photo: null // Ajout de la photo
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setNewFormateur({ ...newFormateur, photo: files[0] }); // Gestion de la photo
        } else {
            setNewFormateur({ ...newFormateur, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormateur([...formateurs, newFormateur]);
        setNewFormateur({
            nomForm: '',
            prenomForm: '',
            email: '',
            telephone: '',
            specialite: '',
            photo: null // Réinitialiser la photo
        });

        // Ferme le modal
        const modal = document.getElementById('addFormateurModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal); // Utilisez window.bootstrap
        modalInstance.hide();
    };

    const handleDelete = (index) => {
        const updatedFormateurs = formateurs.filter((_, i) => i !== index);
        setFormateur(updatedFormateurs);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Liste des Formateurs</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-chalkboard-teacher me-2"></i>Formateurs</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addFormateurModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter
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
                                    <th scope="col">Spécialité</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formateurs.map((formateur, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{formateur.nomForm}</td>
                                        <td className="text-center">{formateur.prenomForm}</td>
                                        <td className="text-center">{formateur.email}</td>
                                        <td className="text-center">{formateur.telephone}</td>
                                        <td className="text-center">{formateur.specialite}</td>
                                        <td className="text-center">
                                            {formateur.photo && <img src={URL.createObjectURL(formateur.photo)} alt="Formateur" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />}
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-warning btn-sm" onClick={() => alert('Modifier fonctionnalité non implémentée')}>Modifier</button>
                                            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(index)}>Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal pour ajouter un formateur */}
            <div className="modal fade" id="addFormateurModal" tabIndex="-1" aria-labelledby="addFormateurModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success" id="addFormateurModalLabel"><i className="fas fa-chalkboard-teacher me-2"></i>Ajouter un Formateur</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nomForm" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="nomForm" name="nomForm" value={newFormateur.nomForm} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prenomForm" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="prenomForm" name="prenomForm" value={newFormateur.prenomForm} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={newFormateur.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="form-label">Téléphone</label>
                                    <input type="text" className="form-control" id="telephone" name="telephone" value={newFormateur.telephone} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="specialite" className="form-label">Spécialité</label>
                                    <input type="text" className="form-control" id="specialite" name="specialite" value={newFormateur.specialite} onChange={handleChange} required />
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

export default ListeFormateur;
