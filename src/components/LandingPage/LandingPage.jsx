// components/LandingPage/LandingPage.jsx
import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'; // Importer le composant Footer
import { FaChalkboardTeacher, FaUserGraduate, FaCogs } from 'react-icons/fa'; // Import des icônes

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <Nav />

      {/* Section principale avec photo bougie */}
      <section className="main-content">
        <div className="image-container">
          <img
            src="https://i.ytimg.com/vi/plqL7lwoacg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuma0vzCZjnGkEVTyYY_K45wzyzg" // Remplace par une vraie photo de diplômé
            alt="Graduate"
            className="graduate-photo"
          />
        </div>

        {/* Les cartes avec icônes pour Enseignant, Étudiant et Admin */}
        <div className="card-container">
          <div className="card">
            <div className="icon">
              <FaChalkboardTeacher />
            </div>
            <h2>Enseignant</h2>
            <p>Développe des compétences pour former la prochaine génération.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FaUserGraduate />
            </div>
            <h2>Étudiant</h2>
            <p>Acquiert les connaissances pour un avenir prometteur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FaCogs />
            </div>
            <h2>Admin</h2>
            <p>Gère les ressources et les activités de la plateforme.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> {/* Utiliser le composant Footer */}
    </div>
  );
};

export default LandingPage;
