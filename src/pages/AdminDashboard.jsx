import React from "react";
import "./css/AdminDashboard.css"; // Assuming a CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <p className="dashboard-date">Welcome, Admin! Today is {new Date().toDateString()}</p>
      
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3 className="section-title">User Management</h3>
          <ul className="section-actions">
            <li><button className="section-btn">Import Users</button></li>
            <li><button className="section-btn">Manage Users</button></li>
            <li><button className="section-btn">Export User Data</button></li>
          </ul>
        </section>
        
        <section className="dashboard-section">
          <h3 className="section-title">Email Configuration</h3>
          <ul className="section-actions">
            <li><button className="section-btn">Set Email Schedule</button></li>
            <li><button className="section-btn">Configure Deadlines</button></li>
            <li><button className="section-btn">View Email Logs</button></li>
          </ul>
        </section>
        
        <section className="dashboard-section">
          <h3 className="section-title">Project Validation</h3>
          <ul className="section-actions">
            <li><button className="section-btn">Review Pending Projects</button></li>
            <li><button className="section-btn">Approve/Reject Projects</button></li>
            <li><button className="section-btn">Generate Project Reports</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
