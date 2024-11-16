import React from "react";
import "./css/EntrepriseDashboard.css"; // Assuming a CSS file for styling

const EntrepriseDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Entreprise Dashboard</h2>
      <p className="dashboard-date">Welcome, Company! Today is {new Date().toDateString()}</p>

      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3 className="section-title">Project Proposals</h3>
          <ul className="section-actions">
            <li><button className="section-btn">Propose New Project</button></li>
            <li><button className="section-btn">View Proposed Projects</button></li>
            <li><button className="section-btn">Edit Existing Proposals</button></li>
          </ul>
        </section>

        <section className="dashboard-section">
          <h3 className="section-title">Student Applications</h3>
          <ul className="section-actions">
            <li><button className="section-btn">View Applicants</button></li>
            <li><button className="section-btn">Schedule Interviews</button></li>
            <li><button className="section-btn">Submit Feedback</button></li>
          </ul>
        </section>

        <section className="dashboard-section">
          <h3 className="section-title">Ongoing Projects</h3>
          <ul className="section-actions">
            <li><button className="section-btn">View Active Projects</button></li>
            <li><button className="section-btn">Contact Supervisors</button></li>
            <li><button className="section-btn">Submit Progress Reports</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EntrepriseDashboard;
