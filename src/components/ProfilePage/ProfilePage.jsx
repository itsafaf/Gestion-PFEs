import React, { useState } from 'react';
import './profile.css';
import SidBar from '../SideBar/SideBar';

const ProfilePage = () => {
  const [userInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    dob: '1 Janvier 1990',
    address: '123 Rue Exemple, Paris, France',
    phone: '+33 123 456 789',
    language: 'Français',
    notifications: 'Activées',
    darkMode: 'Désactivé',
    loginHistory: [
      '10 Novembre 2024 - Connexion depuis Paris',
      '9 Novembre 2024 - Connexion depuis Lyon',
      '8 Novembre 2024 - Connexion depuis Marseille'
    ]
  });

  const handleLogout = () => {
    alert('Déconnexion effectuée!');
  };

  return (
    <div className="profile-page">
      {/* Intégration de la Sidebar */}
      <SidBar />

      <div className="profile-container">
        <div className="profile-header">
          <div className="avatar">
            <img 
              src="https://img.freepik.com/vecteurs-premium/professeur-homme-affaires-mature-portant-lunettes_635702-208.jpg" 
              alt="Avatar de l'utilisateur" 
            />
          </div>
          <div className="user-info">
            <h1>{userInfo.name}</h1>
            <p>{userInfo.email}</p>
          </div>
        </div>

        <div className="profile-content">
          <section>
            <h2>Informations personnelles</h2>
            <p><strong>Date de naissance :</strong> {userInfo.dob}</p>
            <p><strong>Adresse :</strong> {userInfo.address}</p>
            <p><strong>Téléphone :</strong> {userInfo.phone}</p>
          </section>

          <section>
            <h2>Préférences</h2>
            <p><strong>Langue :</strong> {userInfo.language}</p>
            <p><strong>Notifications :</strong> {userInfo.notifications}</p>
            <p><strong>Mode sombre :</strong> {userInfo.darkMode}</p>
          </section>

          <section>
            <h2>Historique des connexions</h2>
            <ul>
              {userInfo.loginHistory.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="profile-footer">
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
