import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ListeCours = () => {
    const [cours, setCours] = useState([]);
    const [newCours, setNewCours] = useState({
        titre: '',
        description: '',
        formateur: '',
        dateDebut: '',
        dateFin: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCours({ ...newCours, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCours([...cours, newCours]);
        setNewCours({
            titre: '',
            description: '',
            formateur: '',
            dateDebut: '',
            dateFin: ''
        });

        // Ferme le modal
        const modal = document.getElementById('addCoursModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal); // Utilisez window.bootstrap
        modalInstance.hide();
    };

    const handleDelete = (index) => {
        const updatedCours = cours.filter((_, i) => i !== index);
        setCours(updatedCours);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Liste des Cours</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-book me-2"></i>Cours</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addCoursModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter un Cours
                    </button>
                </div>
                <div className="card-body shadow">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3 align-middle mt-4">
                            <thead className="table-primary">
                                <tr className="text-center fw-bold">
                                    <th scope="col">ID</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Formateur</th>
                                    <th scope="col">Date de Début</th>
                                    <th scope="col">Date de Fin</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cours.map((course, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{course.titre}</td>
                                        <td className="text-center">{course.formateur}</td>
                                        <td className="text-center">{course.dateDebut}</td>
                                        <td className="text-center">{course.dateFin}</td>
                                        <td className="text-center">
                                            <button className="btn btn-warning btn-sm me-2">Modifier</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal pour ajouter/modifier un cours */}
            <div className="modal fade" id="addCoursModal" tabIndex="-1" aria-labelledby="addCoursModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success" id="addCoursModalLabel"><i className="fas fa-book me-2"></i>Ajouter un Cours</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="titre" className="form-label">Titre</label>
                                    <input type="text" className="form-control" id="titre" name="titre" value={newCours.titre} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" name="description" value={newCours.description} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formateur" className="form-label">Formateur</label>
                                    <select className="form-select" id="formateur" name="formateur" value={newCours.formateur} onChange={handleChange} required>
                                        <option value="">Sélectionner un Formateur</option>
                                        <option value="Formateur 1">Formateur 1</option>
                                        <option value="Formateur 2">Formateur 2</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateDebut" className="form-label">Date de Début</label>
                                    <input type="date" className="form-control" id="dateDebut" name="dateDebut" value={newCours.dateDebut} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateFin" className="form-label">Date de Fin</label>
                                    <input type="date" className="form-control" id="dateFin" name="dateFin" value={newCours.dateFin} onChange={handleChange} required />
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

export default ListeCours;
