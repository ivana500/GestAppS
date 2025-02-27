import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const EmploiDuTemps = () => {
    const [emploisDuTemps, setEmploisDuTemps] = useState([]);
    const [newEmploi, setNewEmploi] = useState({
        heureDebut: '',
        heureFin: '',
        jour: '',
        cours: '',
    });
    
    // Change handler pour les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmploi({ ...newEmploi, [name]: value });
    };

    // Soumission du formulaire pour ajouter un emploi du temps
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmploisDuTemps([...emploisDuTemps, newEmploi]);
        setNewEmploi({
            heureDebut: '',
            heureFin: '',
            jour: '',
            cours: '',
        });

        // Ferme le modal après l'ajout
        const modal = document.getElementById('addEmploiModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal); // Utilisez window.bootstrap
        modalInstance.hide();
    };

    // Suppression d'un emploi du temps
    const handleDelete = (index) => {
        const updatedEmploi = emploisDuTemps.filter((_, i) => i !== index);
        setEmploisDuTemps(updatedEmploi);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Emploi du Temps</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-calendar-alt me-2"></i>Emploi du Temps</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addEmploiModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter un Emploi du Temps
                    </button>
                </div>
                <div className="card-body shadow">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3 align-middle mt-4">
                            <thead className="table-primary">
                                <tr className="text-center fw-bold">
                                    <th scope="col">ID</th>
                                    <th scope="col">Heure de Début</th>
                                    <th scope="col">Heure de Fin</th>
                                    <th scope="col">Jour</th>
                                    <th scope="col">Cours</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emploisDuTemps.map((emploi, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{emploi.heureDebut}</td>
                                        <td className="text-center">{emploi.heureFin}</td>
                                        <td className="text-center">{emploi.jour}</td>
                                        <td className="text-center">{emploi.cours}</td>
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

            {/* Modal pour ajouter/modifier un emploi du temps */}
            <div className="modal fade" id="addEmploiModal" tabIndex="-1" aria-labelledby="addEmploiModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success" id="addEmploiModalLabel"><i className="fas fa-calendar-alt me-2"></i>Ajouter un Emploi du Temps</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="heureDebut" className="form-label">Heure de Début</label>
                                    <input type="time" className="form-control" id="heureDebut" name="heureDebut" value={newEmploi.heureDebut} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="heureFin" className="form-label">Heure de Fin</label>
                                    <input type="time" className="form-control" id="heureFin" name="heureFin" value={newEmploi.heureFin} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jour" className="form-label">Jour</label>
                                    <select className="form-select" id="jour" name="jour" value={newEmploi.jour} onChange={handleChange} required>
                                        <option value="">Sélectionner un Jour</option>
                                        <option value="Lundi">Lundi</option>
                                        <option value="Mardi">Mardi</option>
                                        <option value="Mercredi">Mercredi</option>
                                        <option value="Jeudi">Jeudi</option>
                                        <option value="Vendredi">Vendredi</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cours" className="form-label">Cours</label>
                                    <select className="form-select" id="cours" name="cours" value={newEmploi.cours} onChange={handleChange} required>
                                        <option value="">Sélectionner un Cours</option>
                                        <option value="Cours 1">Cours 1</option>
                                        <option value="Cours 2">Cours 2</option>
                                    </select>
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

export default EmploiDuTemps;
