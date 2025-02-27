import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation de Bootstrap

const ListeAssiduite = () => {
    const [assiduites, setAssiduite] = useState([]);
    const [newAssiduite, setNewAssiduite] = useState({
        apprenant: '',
        cours: '',
        present: 'Non'
    });

    const [apprenants] = useState(['Apprenant 1', 'Apprenant 2', 'Apprenant 3']); // Liste fictive des apprenants
    const [cours] = useState(['Cours 1', 'Cours 2', 'Cours 3']); // Liste fictive des cours

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAssiduite({ ...newAssiduite, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAssiduite([...assiduites, newAssiduite]);
        setNewAssiduite({
            apprenant: '',
            cours: '',
            present: 'Non'
        });

        // Ferme le modal
        const modal = document.getElementById('addAssiduiteModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    };

    const handleDelete = (index) => {
        const updatedAssiduites = assiduites.filter((_, i) => i !== index);
        setAssiduite(updatedAssiduites);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Suivi de l'Assiduité</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-check-circle me-2"></i>Assiduités</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addAssiduiteModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter une Assiduité
                    </button>
                </div>
                <div className="card-body shadow">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3 align-middle mt-4">
                            <thead className="table-primary">
                                <tr className="text-center fw-bold">
                                    <th scope="col">ID</th>
                                    <th scope="col">Apprenant</th>
                                    <th scope="col">Cours</th>
                                    <th scope="col">Présent</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assiduites.map((assiduite, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">{assiduite.apprenant}</td>
                                        <td className="text-center">{assiduite.cours}</td>
                                        <td className="text-center">{assiduite.present}</td>
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

            {/* Modal pour ajouter/modifier une assiduité */}
            <div className="modal fade" id="addAssiduiteModal" tabIndex="-1" aria-labelledby="addAssiduiteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success" id="addAssiduiteModalLabel"><i className="fas fa-check-circle me-2"></i>Ajouter une Assiduité</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="apprenant" className="form-label">Apprenant</label>
                                    <select className="form-select" id="apprenant" name="apprenant" value={newAssiduite.apprenant} onChange={handleChange} required>
                                        <option value="">Sélectionner un Apprenant</option>
                                        {apprenants.map((apprenant, index) => (
                                            <option key={index} value={apprenant}>{apprenant}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cours" className="form-label">Cours</label>
                                    <select className="form-select" id="cours" name="cours" value={newAssiduite.cours} onChange={handleChange} required>
                                        <option value="">Sélectionner un Cours</option>
                                        {cours.map((cours, index) => (
                                            <option key={index} value={cours}>{cours}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="present" className="form-label">Présent</label>
                                    <select className="form-select" id="present" name="present" value={newAssiduite.present} onChange={handleChange} required>
                                        <option value="Oui">Oui</option>
                                        <option value="Non">Non</option>
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

export default ListeAssiduite;
