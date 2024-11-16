// components/LandingPage/LandingPage.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaChalkboardTeacher, FaUserGraduate, FaCogs, FaRocket, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Nav />

      {/* Section d'image principale */}
      <section className="main-content">
        <div className="image-container">
          <img
            src="https://files.oaiusercontent.com/file-BeR6pwAVfleAeoaXRGVxg58p?se=2024-11-14T22%3A57%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D16ed3402-1f97-4295-9a0e-90ffdfff6f13.webp&sig=L78vLagCiIDG8yYZ2WvIpSv%2BqISTdPncEcLhjex4YFE%3D"
            className="graduate-photo"
          />
        </div>
        <h1 className="main-title">Bienvenue sur la plateforme de gestion académique</h1>
        <p className="main-subtitle">Connectez enseignants, étudiants et administrateurs en un seul endroit.</p>
        <button className="cta-button">Commencer Maintenant</button>
      </section>

      {/* Section des cartes alignées sur une ligne */}
      <section className="card-container">
        <div className="card">
          <div className="icon"><FaChalkboardTeacher /></div>
          <h2>Enseignant</h2>
          <p>Développe des compétences pour former la prochaine génération.</p>
        </div>
        <div className="card">
        <Link to="/student" className="card-link"> 
          <div className="icon"><FaUserGraduate /></div>
          <h2>Étudiant</h2>
          <p>Acquiert les connaissances pour un avenir prometteur.</p>
        </Link>
        </div>
        <div className="card">
          <div className="icon"><FaCogs /></div>
          <h2>Admin</h2>
          <p>Gère les ressources et les activités de la plateforme.</p>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="benefits-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <div className="benefit">
          <FaRocket className="benefit-icon" />
          <p>Accélération de la gestion académique</p>
        </div>
        <div className="benefit">
          <FaHandsHelping className="benefit-icon" />
          <p>Collaboration entre étudiants et enseignants</p>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="features-section">
        <h2>Fonctionnalités principales</h2>
        <div className="feature-list">
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <p>Gestion des cours et des emplois du temps</p>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <p>Suivi des performances académiques</p>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <p>Accès aux ressources et aux informations administratives</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
