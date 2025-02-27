// home.js
import { Link } from 'react-router-dom';
import logo from './Assets/ac1.png';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1 >GestAppS</h1> <br/>
        </p> 
        <p className="dynamic-text">
        Bienvenue dans notre plateforme de gestion d'apprenants
        </p> 
        <Link to="/Accueil">
          <button className="glowing-button">
            Continuer
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
