import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from "react-icons/fa";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./css/ProjectValidation.css"; // Custom CSS for your styling

const ProjectValidation = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "AI-powered Chatbot", students: "Alice, Bob", supervisor: "Dr. Smith", status: "Pending" },
    { id: 2, title: "Blockchain for Supply Chain", students: "Charlie", supervisor: "Prof. Johnson", status: "Pending" },
    { id: 3, title: "Mobile App for Health Tracking", students: "David, Eve", supervisor: "Dr. Williams", status: "Pending" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");

  const handleValidation = (projectId, newStatus) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, status: newStatus } : project
      )
    );
    setSelectedProject(null);
    setFeedback("");
    setDate("");
  };

  return (
    <div className="landing-page">
 
      <section className="main-content">
        <h1 className="main-title">Project Validation</h1>
        <p className="main-subtitle">Review and validate proposed student projects.</p>
      </section>

      <section className="card-container">
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Students</th>
              <th>Supervisor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.students}</td>
                <td>{project.supervisor}</td>
                <td>
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <button
                    className="cta-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>Update Project Status: {selectedProject.title}</h2>
              <label>
                Feedback:
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter feedback here"
                ></textarea>
              </label>
              <label>
                Next Meeting Date:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <div className="modal-actions">
                <button
                  className="cta-button approve"
                  onClick={() => handleValidation(selectedProject.id, "Approved")}
                >
                  <FaCheckCircle /> Approve
                </button>
                <button
                  className="cta-button reject"
                  onClick={() => handleValidation(selectedProject.id, "Rejected")}
                >
                  <FaTimesCircle /> Reject
                </button>
                <button
                  className="cta-button revision"
                  onClick={() => handleValidation(selectedProject.id, "Needs Revision")}
                >
                  <FaExclamationCircle /> Request Revision
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ProjectValidation;
