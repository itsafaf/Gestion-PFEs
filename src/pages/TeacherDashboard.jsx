import React from "react";
import "./css/TeacherDashboard.css"; // Assuming a dedicated CSS file for the teacher dashboard

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Teacher</h2>
      <p className="dashboard-date">Wed, 08 June 2022</p>
      <div className="dashboard-header">
        <span className="dashboard-name">Teacher Name</span>
        <button className="dashboard-edit-btn">Edit Profile</button>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-section-title">My Responsibilities</h3>
        <ul className="dashboard-list">
          <li>Manage Projects</li>
          <li>Supervise Students</li>
          <li>Jury Assignments</li>
        </ul>
        <button className="dashboard-action-btn">Update Responsibilities</button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
