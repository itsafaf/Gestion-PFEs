import React, { useState } from 'react';

export default function ProjectEvaluation() {
  const [projects, setProjects] = useState([
    { id: 1, title: "AI-powered Chatbot", students: "Alice Johnson, Bob Smith", supervisor: "Dr. Brown", status: "Pending Evaluation" },
    { id: 2, title: "Blockchain for Supply Chain", students: "Charlie Davis", supervisor: "Prof. Wilson", status: "Evaluated" },
    { id: 3, title: "IoT Home Automation", students: "Eve Taylor, Frank Moore", supervisor: "Dr. Garcia", status: "Pending Evaluation" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [evaluation, setEvaluation] = useState({
    technicalMerit: 0,
    innovation: 0,
    presentation: 0,
    documentation: 0,
    overallImpression: 0,
    comments: "",
  });

  const handleEvaluationChange = (field, value) => {
    setEvaluation(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitEvaluation = () => {
    // Here you would typically send this data to your backend
    console.log("Submitting evaluation for project:", selectedProject.id);
    console.log("Evaluation:", evaluation);

    // Update the project status
    setProjects(projects.map(project => 
      project.id === selectedProject.id ? { ...project, status: "Evaluated" } : project
    ));

    // Reset the evaluation form
    setSelectedProject(null);
    setEvaluation({
      technicalMerit: 0,
      innovation: 0,
      presentation: 0,
      documentation: 0,
      overallImpression: 0,
      comments: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title">Project Evaluation</h1>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Projects to Evaluate</h2>
          <p className="card-description">Review and grade student projects</p>
        </div>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Students</th>
                <th>Supervisor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.students}</td>
                  <td>{project.supervisor}</td>
                  <td>{project.status}</td>
                  <td>
                    <button 
                      className="btn"
                      onClick={() => setSelectedProject(project)}
                      disabled={project.status === "Evaluated"}
                    >
                      {project.status === "Evaluated" ? "View Evaluation" : "Evaluate"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evaluation Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Evaluate Project: {selectedProject.title}</h3>
            <p className="modal-description">Provide scores and feedback for the project.</p>
            <div className="evaluation-form">
              {Object.entries(evaluation).map(([key, value]) => (
                key !== "comments" && (
                  <div key={key} className="form-group">
                    <label htmlFor={key} className="label">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}</label>
                    <div className="slider-group">
                      <input
                        type="range"
                        id={key}
                        min="0"
                        max="10"
                        step="0.5"
                        value={value}
                        onChange={(e) => handleEvaluationChange(key, parseFloat(e.target.value))}
                        className="slider"
                      />
                      <span>{value}/10</span>
                    </div>
                  </div>
                )
              ))}
              <div className="form-group">
                <label htmlFor="comments" className="label">Comments</label>
                <textarea
                  id="comments"
                  value={evaluation.comments}
                  onChange={(e) => handleEvaluationChange("comments", e.target.value)}
                  className="textarea"
                  rows="4"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={handleSubmitEvaluation}>Submit Evaluation</button>
              <button className="btn outline" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
