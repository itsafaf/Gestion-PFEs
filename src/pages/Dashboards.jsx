import React, { useState } from 'react';
import './css/Dashboards.css'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1 className="title">Gestion des PFE</h1>
        <div className="actions">
          <button className="btn outline-btn">
            <i className="icon-calendar"></i> 2023-2024
          </button>
          <button className="btn default-btn">
            <i className="icon-mail"></i> Notifications
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} 
          onClick={() => setActiveTab('overview')}
        >
          Aperçu
        </button>
        <button 
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`} 
          onClick={() => setActiveTab('users')}
        >
          Utilisateurs
        </button>
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`} 
          onClick={() => setActiveTab('projects')}
        >
          Projets
        </button>
      </div>

      {/* Dynamic Content Rendering Based on Active Tab */}
      {activeTab === 'overview' && (
        <div className="overview-stats">
          <StatCard title="Étudiants Inscrits" value="120" icon="icon-user-plus" />
          <StatCard title="Projets Proposés" value="85" icon="icon-check-circle" />
          <StatCard title="Projets Affectés" value="45" icon="icon-check-circle" />
        </div>
      )}

      {activeTab === 'users' && <UserManagementCard />}
      {activeTab === 'projects' && <ProjectSubmissionCard />}
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="stat-card">
    <div className="stat-card-content">
      <div>
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
      <i className={`stat-icon ${icon}`}></i>
    </div>
  </div>
);

const UserManagementCard = () => (
  <div className="card user-management-card">
    <div className="card-header">
      <h3 className="card-title">Gestion des Utilisateurs</h3>
      <p className="card-description">Importer ou gérer les utilisateurs du système</p>
    </div>
    <div className="card-content">
      <div className="upload-section">
        <input type="file" accept=".csv" className="file-input" />
        <button className="btn import-btn">
          <i className="icon-upload"></i> Importer CSV
        </button>
      </div>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Nombre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Étudiants</td>
              <td>120</td>
              <td>
                <button className="btn outline-btn small-btn">Gérer</button>
              </td>
            </tr>
            <tr>
              <td>Enseignants</td>
              <td>45</td>
              <td>
                <button className="btn outline-btn small-btn">Gérer</button>
              </td>
            </tr>
            <tr>
              <td>Entreprises</td>
              <td>25</td>
              <td>
                <button className="btn outline-btn small-btn">Gérer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ProjectSubmissionCard = () => (
  <div className="card project-submission-card">
    <div className="card-header">
      <h3 className="card-title">Soumission de Projets</h3>
      <p className="card-description">Gérer les propositions de projets PFE</p>
    </div>
    <div className="card-content">
      <div className="select-section">
        <select className="select-box">
          <option value="all">Tous les types</option>
          <option value="classic">Classique</option>
          <option value="innovative">Innovant</option>
          <option value="internship">Stage</option>
        </select>
        <button className="btn new-project-btn">Nouveau Projet</button>
      </div>
      <div className="table-container">
        <table className="project-table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Système de gestion PFE</td>
              <td>Classique</td>
              <td>En attente</td>
              <td>
                <div className="action-buttons">
                  <button className="btn outline-btn small-btn">Modifier</button>
                  <button className="btn outline-btn small-btn">Supprimer</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Dashboard;
