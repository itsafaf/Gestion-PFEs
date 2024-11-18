import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { FaChalkboardTeacher, FaUserGraduate, FaCogs, FaRocket, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import './LandingPage.css';

const Card = ({ icon, title, description, link }) => (
  <Link to={link} className="card-link">
    <div className="card" >
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Link>
);

const FeatureItem = ({ icon, text }) => (
  <div className="feature-item">
    <div className="feature-icon">{icon}</div>
    <p>{text}</p>
  </div>
);

const LandingPage = () => {
  const graduatePhotoURL = "https://files.oaiusercontent.com/file-BeR6pwAVfleAeoaXRGVxg58p?...";

  return (
    <div className="landing-page">
      <Nav />

      {/* Main Section */}
      <section className="main-content">
        <div className="image-container">
          <img src={graduatePhotoURL} alt="Graduate" className="graduate-photo" />
        </div>
        <h1 className="main-title">Bienvenue sur la plateforme de gestion académique</h1>
        <p className="main-subtitle">Connectez enseignants, étudiants et administrateurs en un seul endroit.</p>
        <button className="cta-button">Commencer Maintenant</button>
      </section>

      {/* Cards Section */}
      <section className="card-container">
        <Card 
          icon={<FaChalkboardTeacher />} 
          title="Enseignant" 
          description="Développe des compétences pour former la prochaine génération." 
          link="/teacher" 
        />
        <Card 
          icon={<FaUserGraduate />} 
          title="Étudiant" 
          description="Acquiert les connaissances pour un avenir prometteur." 
          link="/student" 
        />
        <Card 
          icon={<FaCogs />} 
          title="Admin" 
          description="Gère les ressources et les activités de la plateforme." 
          link="/admin" 
        />
      </section>

      {/* Benefits Section */}
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

      {/* Features Section */}
      <section className="features-section">
        <h2>Fonctionnalités principales</h2>
        <div className="feature-list">
          <FeatureItem icon={<FaCheckCircle />} text="Gestion des cours et des emplois du temps" />
          <FeatureItem icon={<FaCheckCircle />} text="Suivi des performances académiques" />
          <FeatureItem icon={<FaCheckCircle />} text="Accès aux ressources et aux informations administratives" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
