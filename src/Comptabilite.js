import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ListeTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        apprenantId: '',
        montant: '',
        typeTransaction: 'paiement', // Default to 'paiement'
        date: ''
    });

    const [apprenants, setApprenants] = useState([
        { id: 1, nom: 'Jean', prenom: 'Dupont' },
        { id: 2, nom: 'Marie', prenom: 'Lemoine' },
        // Add more learners here
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTransactions([...transactions, newTransaction]);

        setNewTransaction({
            apprenantId: '',
            montant: '',
            typeTransaction: 'paiement',
            date: ''
        });

        // Close modal
        const modal = document.getElementById('addTransactionModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    };

    const handleDelete = (index) => {
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(updatedTransactions);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-bold">Liste des Transactions</h1>
            <div className="card border-primary mb-3 rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center bg-secondary-subtle text-success rounded-3">
                    <h3 className="mb-0"><i className="fas fa-wallet me-2"></i>Transactions</h3>
                    <button className="btn btn-success rounded-5 shadow" data-bs-toggle="modal" data-bs-target="#addTransactionModal">
                        <i className="fas fa-plus m-lg-1"></i>Ajouter une Transaction
                    </button>
                </div>
                <div className="card-body shadow">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered rounded-3 align-middle mt-4">
                            <thead className="table-primary">
                                <tr className="text-center fw-bold">
                                    <th scope="col">ID</th>
                                    <th scope="col">Apprenant</th>
                                    <th scope="col">Montant</th>
                                    <th scope="col">Type de Transaction</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">
                                            {apprenants.find(a => a.id === transaction.apprenantId)?.nom} 
                                            {apprenants.find(a => a.id === transaction.apprenantId)?.prenom}
                                        </td>
                                        <td className="text-center">{transaction.montant}€</td>
                                        <td className="text-center">{transaction.typeTransaction === 'paiement' ? 'Paiement' : 'Remboursement'}</td>
                                        <td className="text-center">{transaction.date}</td>
                                        <td className="text-center">
                                            <button className="btn btn-warning btn-sm">Modifier</button>
                                            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(index)}>Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for adding a transaction */}
            <div className="modal fade" id="addTransactionModal" tabIndex="-1" aria-labelledby="addTransactionModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header bg-dark-subtle">
                            <h5 className="modal-title text-success" id="addTransactionModalLabel"><i className="fas fa-wallet me-2"></i>Ajouter une Transaction</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="apprenantId" className="form-label">Apprenant</label>
                                    <select 
                                        className="form-select" 
                                        id="apprenantId" 
                                        name="apprenantId" 
                                        value={newTransaction.apprenantId} 
                                        onChange={handleChange} 
                                        required>
                                        <option value="">Sélectionner un Apprenant</option>
                                        {apprenants.map((apprenant) => (
                                            <option key={apprenant.id} value={apprenant.id}>
                                                {apprenant.nom} {apprenant.prenom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="montant" className="form-label">Montant</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="montant" 
                                        name="montant" 
                                        value={newTransaction.montant} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="typeTransaction" className="form-label">Type de Transaction</label>
                                    <select 
                                        className="form-select" 
                                        id="typeTransaction" 
                                        name="typeTransaction" 
                                        value={newTransaction.typeTransaction} 
                                        onChange={handleChange} 
                                        required>
                                        <option value="paiement">Paiement</option>
                                        <option value="remboursement">Remboursement</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="date" 
                                        name="date" 
                                        value={newTransaction.date} 
                                        onChange={handleChange} 
                                        required 
                                    />
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

export default ListeTransactions;
