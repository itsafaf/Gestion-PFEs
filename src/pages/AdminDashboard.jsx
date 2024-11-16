import React from "react";
import "./css/AdminDashboard.css"; // Assuming a dedicated CSS file for the admin dashboard

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Admin</h2>
      <p className="dashboard-date">Thu, 09 June 2022</p>
      <div className="dashboard-header">
        <span className="dashboard-name">Administrator Name</span>
        <button className="dashboard-edit-btn">Edit Profile</button>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-section-title">Admin Tasks</h3>
        <ul className="dashboard-list">
          <li>Manage Users</li>
          <li>Configure Emails</li>
          <li>Validate Projects</li>
        </ul>
        <button className="dashboard-action-btn">Update Settings</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
