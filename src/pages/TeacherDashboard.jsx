import React from "react";
import "./css/TeacherDashboard.css"; // Assuming a CSS file for styling

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Teacher Dashboard</h2>
      <p className="dashboard-date">Welcome, Teacher! Today is {new Date().toDateString()}</p>
      
      <div className="dashboard-tabs">
        <div className="tab" id="project-management">
          <h3 className="tab-title">Project Management</h3>
          <ul className="tab-actions">
            <li><button className="tab-btn">Propose New Project</button></li>
            <li><button className="tab-btn">View My Projects</button></li>
            <li><button className="tab-btn">Edit Existing Projects</button></li>
          </ul>
        </div>

        <div className="tab" id="supervision">
          <h3 className="tab-title">Supervision</h3>
          <ul className="tab-actions">
            <li><button className="tab-btn">Select Projects to Supervise</button></li>
            <li><button className="tab-btn">View Supervised Projects</button></li>
            <li><button className="tab-btn">Submit Progress Reports</button></li>
          </ul>
        </div>

        <div className="tab" id="jury-assignments">
          <h3 className="tab-title">Jury Assignments</h3>
          <ul className="tab-actions">
            <li><button className="tab-btn">View Jury Assignments</button></li>
            <li><button className="tab-btn">Submit Availability</button></li>
            <li><button className="tab-btn">Access Evaluation Forms</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
