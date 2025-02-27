import React, { useState } from 'react';

function InscriptionForm() {
  // États pour chaque champ
  const [code, setCode] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [sexe, setSexe] = useState('masculin');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setdate] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu pourras ajouter la logique pour traiter les données du formulaire
    console.log({
      code,
      nom,
      prenom,
      sexe,
      email,
      phoneNumber,
      date,
     
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="content col-md-12 col-sm-12">
            <div className="blog-box clearfix">
              <div className="contact_form comment-form">
                <form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="mx-auto mt-20"
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Code */}
                  <div className="form-group" style={{ marginTop: '20px' }}>
                    <label style={{ fontWeight: 'bold' }}>
                      Code
                    </label>
                    <input
                      type="text"
                      id="code"
                      name="utilisateur[code]"
                      className="form-control"
                      placeholder="Entrez votre code"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  {/* Nom */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Nom(s)
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="utilisateur[nom]"
                      className="form-control"
                      placeholder="Entrez votre nom"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>

                  {/* Prénom */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Prénom(s)
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="utilisateur[prenom]"
                      className="form-control"
                      placeholder="Entrez votre prénom"
                      required
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </div>

                  {/* Sexe */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Sexe
                      <span className="required">*</span>
                    </label>
                    <select
                      name="utilisateur[sexe]"
                      className="form-control"
                      required
                      value={sexe}
                      onChange={(e) => setSexe(e.target.value)}
                    >
                      <option value="masculin">Homme</option>
                      <option value="feminin">Femme</option>
                      <option value="non binaire">Non Binaire</option>
                    </select>
                  </div>

                  {/* email */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Email
                      <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="utilisateur[email]"
                      className="form-control"
                      placeholder="Entrer un email"
                      required
                      minLength="8"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Téléphone
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="utilisateur[phoneNumber]"
                      className="form-control"
                      placeholder="660000000"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  {/* Date d'inscription */}
                  <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>
                      Date d'inscription
                      <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="utilisateur[date]"
                      className="form-control"
                      required
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                    />
                  </div>

                  
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InscriptionForm;
