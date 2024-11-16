
import React, { useState } from 'react';  // Gardez seulement cette importation
import "./css/Etudiant.css"; //Lien vers le fichier CSS



const Etudiant = () => {
  const [user, setUser] = useState({
    nom: 'Étudiant',
    prenom: 'Prénom Étudiant',
    email: 'etudiant@univ-tlemcen.dz',
    motDePasse: '********',
    type: 'Étudiant',
    optionMaster: 'Option Master'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-settings">
      <header className="header">
        <h1>Bienvenue, {user.nom}</h1>
        <p className="date">Mardi, 7 juin 2022</p>
        <input type="text" placeholder="Recherche" className="search-bar" />
      </header>
      <section className="user-info">
        <h2>Informations de l'utilisateur</h2>
        <div className="info-item">
          <label>Nom:</label>
          <input type="text" name="nom" value={user.nom} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>Prénom:</label>
          <input type="text" name="prenom" value={user.prenom} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>Mot de passe:</label>
          <input type="password" name="motDePasse" value={user.motDePasse} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>Type:</label>
          <input type="text" name="type" value={user.type} onChange={handleChange} />
        </div>
        <div className="info-item">
          <label>Option de Master:</label>
          <input type="text" name="optionMaster" value={user.optionMaster} onChange={handleChange} />
        </div>
        <button className="add-email-btn">+ Ajouter une adresse e-mail</button>
      </section>
      <section className="email-section">
        <h3>Mon adresse e-mail</h3>
        <p>{user.email}</p>
      </section>
    </div>
  );
};

export default Etudiant;