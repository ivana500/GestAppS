import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home'; // Page d'accueil
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Accueil';
import Connexion from './Connexion';
import ListeApprenant from './Apprenant';
import ListeFormateur from './Formateurs';
import ListeCours from './Cours';
import ListeAssiduite from './Assiduite';
import ListeTransactions from './Comptabilite';
import Rapport from './Rapport';
import OptionsConfiguration from './Option';
import ParametresApplication from './Appli';
import SauvegardeDonnees from './Sauvegarde';
import GestionUtilisateurs from './GestUtil';
import Layout from './Layout';
import EmploiDuTemps from './EmploiTemps';
import Layout2 from './Layout2';
import EmploiDuTemps1 from './Formateurs/EmploiTemps1';
import Rapport1 from './Formateurs/Rapport1';
import ProfilFormateur from './Formateurs/Profils';
import Layout3 from './Layout3';
import EmploiDuTemp from './Apprenant/EmploiTemp';
import ProfilApprenant from './Apprenant/Profil';
import InscriptionForm from './Apprenant/InscriptionAp';
import InscriptionForm1 from './Formateurs/InscriptionFor';

import './App.css';



function App() {
  

  return (
    <div className="app">
     
      
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/conn" element={<Connexion />} />
        <Route path="/ins" element={<InscriptionForm />} />
        <Route path="/insc" element={<InscriptionForm1 />} />
       
        {/* Routes pour le Layout */}

          
          <Route path="/app" element={<Layout ><ListeApprenant /></Layout>} />
          <Route path="/form" element={<Layout ><ListeFormateur /></Layout>} />
          <Route path="/cour" element={<Layout ><ListeCours /></Layout>} />
          <Route path="/assiduite" element={<Layout ><ListeAssiduite /></Layout>} />
          <Route path="/paye" element={<Layout ><ListeTransactions /></Layout>} />
          <Route path="/rapport" element={<Layout ><Rapport /></Layout>} />
          <Route path="/option" element={<Layout ><OptionsConfiguration /></Layout>} />
          <Route path="/sauve" element={<Layout ><SauvegardeDonnees /></Layout>} />
          <Route path="/util" element={<Layout ><GestionUtilisateurs /></Layout>} />
          <Route path="/appli" element={<Layout ><ParametresApplication /></Layout>} />
          <Route path="/emploi" element={<Layout ><EmploiDuTemps /></Layout>} />
          
            {/* Routes pour le Layout2 */}

            <Route path="/rapport1" element={<Layout2 ><Rapport1 /></Layout2>} />
            <Route path="/emploi1" element={<Layout2 ><EmploiDuTemps1 /></Layout2>} />
            <Route path="/profils" element={<Layout2 ><ProfilFormateur /></Layout2>} />

            {/* Routes pour le Layout2 */}
            <Route path="/emploi2" element={<Layout3 ><EmploiDuTemp /></Layout3>} />
            <Route path="/profil" element={<Layout3 ><ProfilApprenant /></Layout3>} />

      </Routes>
    
    </div>
  );
}

export default App;
