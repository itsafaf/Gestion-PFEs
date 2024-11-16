import React, { useState } from "react";
import "./css/PresentationScheduler.css"; // Assuming a CSS file for styling

const ProjectScheduler = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "AI Chatbot", team: "Team A", startDate: "2023-07-15", endDate: "2023-07-20", room: "Room 101" },
    { id: 2, name: "Blockchain Supply Chain", team: "Team B", startDate: "2023-07-21", endDate: "2023-07-25", room: "Room 102" },
    { id: 3, name: "IoT Home Automation", team: "Team C", startDate: "2023-07-22", endDate: "2023-07-28", room: "Room 103" },
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    team: "",
    startDate: "",
    endDate: "",
    room: "",
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.team && newProject.startDate && newProject.endDate && newProject.room) {
      setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
      setNewProject({ name: "", team: "", startDate: "", endDate: "", room: "" });
    }
  };

  const handleUpdateProject = (id, field, value) => {
    setProjects(
      projects.map((project) => (project.id === id ? { ...project, [field]: value } : project))
    );
  };

  return (
    <div className="project-schedule-container">
      <h2 className="project-schedule-title">Project Schedule</h2>
      <p className="project-schedule-description">Manage and schedule projects for your team.</p>

      <div className="project-schedule-table">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Team</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.team}</td>
                <td>
                  <input
                    type="date"
                    value={project.startDate}
                    onChange={(e) => handleUpdateProject(project.id, "startDate", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={project.endDate}
                    onChange={(e) => handleUpdateProject(project.id, "endDate", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={project.room}
                    onChange={(e) => handleUpdateProject(project.id, "room", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-project">
        <h3>Add New Project</h3>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            placeholder="Enter project name"
          />
        </div>
        <div className="form-group">
          <label>Team</label>
          <input
            type="text"
            value={newProject.team}
            onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
            placeholder="Enter team name"
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={newProject.startDate}
            onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={newProject.endDate}
            onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Room</label>
          <input
            type="text"
            value={newProject.room}
            onChange={(e) => setNewProject({ ...newProject, room: e.target.value })}
            placeholder="Enter room"
          />
        </div>
        <button
          className="add-project-btn"
          onClick={handleAddProject}
          disabled={
            !newProject.name || !newProject.team || !newProject.startDate || !newProject.endDate || !newProject.room
          }
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectScheduler;
