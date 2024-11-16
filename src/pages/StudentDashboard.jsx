import React from "react";
import "./css/StudentDashboard.css"; // Assuming a CSS file for styling

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Dashboard</h2>
      <p className="dashboard-date">Welcome, Student! Today is {new Date().toDateString()}</p>

      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3 className="section-title">Project Selection</h3>
          <ul className="section-actions">
            <li><button className="section-btn">Propose Own Project</button></li>
            <li><button className="section-btn">View Available Projects</button></li>
            <li><button className="section-btn">Submit Project Preferences</button></li>
          </ul>
        </section>

        <section className="dashboard-section">
          <h3 className="section-title">My Project</h3>
          <ul className="section-actions">
            <li><button className="section-btn">View Assigned Project</button></li>
            <li><button className="section-btn">Contact Supervisor</button></li>
            <li><button className="section-btn">Submit Progress Report</button></li>
          </ul>
        </section>

        <section className="dashboard-section">
          <h3 className="section-title">Defense</h3>
          <ul className="section-actions">
            <li><button className="section-btn">View Defense Schedule</button></li>
            <li><button className="section-btn">Upload Defense Materials</button></li>
            <li><button className="section-btn">Access Defense Guidelines</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
