import React from 'react';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <img src="logo_path" alt="Logo" />
        <div className="profile">
          <img src="path_to_profile_picture" alt="Photo de profil" />
          <span>Nom de l'utilisateur</span>
        </div>
      </header>
      <div className="sidebar">
        <button>Soumettre projet</button>
        <button>Choisir projet</button>
        <button>Mes projets</button>
        <button>Soutenance</button>
      </div>
      <div className="main-content">
        <h2>Actions urgentes</h2>
        <div className="project-list">
          <h3>Projets soumis</h3>
          <ul>
            <li>Projet 1 - Statut : En attente</li>
            <li>Projet 2 - Statut : En révision</li>
          </ul>
        </div>
        <button>Soumettre un nouveau projet</button>
      </div>
    </div>
  );
};

export default Dashboard;
