import React from "react";
import "./css/Etudiant.css"; // Lien vers le fichier CSS

const StudentProfile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Welcome, Étudiant</h2>
      <p className="profile-date">Tue, 07 June 2022</p>
      <div className="profile-header">
        <span className="profile-name">Étudiant</span>
        <button className="profile-edit-btn">Edit</button>
      </div>
      <div className="profile-email-section">
        <h3 className="profile-email-title">My Email Address</h3>
        <p className="profile-email">etudiant@univ-tlemcen.dz</p>
        <button className="profile-add-btn">+ Add Email Address</button>
      </div>
    </div>
  );
};

export default StudentProfile;
