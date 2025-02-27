import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConnexionAdmin = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        vote: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Ici, tu peux ajouter la logique pour envoyer les données au serveur
    };

    return (
        <div className='container mt-4'>
            <h1 className='text-center'>ADMINISTRATEUR</h1>

            <div className='row mt-5 justify-content-center'>
                {/* Formulaire pour les Administrateurs et Votants */}
                <div className='col-md-6'>
                    <h2 className='text-center'>Formulaire</h2>
                    <form onSubmit={handleSubmit} className='bg-light p-4 rounded shadow'>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Nom</label>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Mot de passe</label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <button type='submit' className='btn btn-primary w-100'>Soumettre</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConnexionAdmin;
