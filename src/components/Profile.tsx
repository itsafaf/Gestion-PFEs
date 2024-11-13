import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');

  const handleUpdate = () => {
    // Logic to update profile
    console.log('Profile updated', { name, email, phone });
  };

  return (
    <div className="profile-container">
      <h2>Profil de l'utilisateur</h2>
      <div>
        <img src="path_to_profile_picture" alt="Photo de profil" />
      </div>
      <div>
        <p>Nom: <input value={name} onChange={(e) => setName(e.target.value)} /></p>
        <p>Email: <input value={email} onChange={(e) => setEmail(e.target.value)} /></p>
        <p>Téléphone: <input value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
      </div>
      <button onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
};

export default Profile;


