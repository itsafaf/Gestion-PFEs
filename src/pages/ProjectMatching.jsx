import React, { useState } from 'react';
import './css/ProjectMatching.css'
export default function ProjectMatching() {
  const [projects, setProjects] = useState([
    { id: 1, title: "AI Chatbot", requiredSkills: [1, 4], assignedStudents: [] },
    { id: 2, title: "Blockchain Supply Chain", requiredSkills: [2, 5], assignedStudents: [] },
    { id: 3, title: "IoT Home Automation", requiredSkills: [2, 3, 5], assignedStudents: [] },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", skills: [1, 3, 4], assignedProject: null },
    { id: 2, name: "Bob Smith", skills: [2, 3, 5], assignedProject: null },
    { id: 3, name: "Charlie Davis", skills: [1, 2, 5], assignedProject: null },
  ]);

  const [skills] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "Python" },
    { id: 4, name: "Machine Learning" },
    { id: 5, name: "Docker" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAssignStudents = () => {
    if (selectedProject && selectedStudents.length > 0) {
      setProjects(projects.map(project =>
        project.id === selectedProject.id
          ? { ...project, assignedStudents: selectedStudents }
          : project
      ));
      setStudents(students.map(student =>
        selectedStudents.includes(student.id)
          ? { ...student, assignedProject: selectedProject.id }
          : student
      ));
      setSelectedProject(null);
      setSelectedStudents([]);
    }
  };

  const getSkillMatch = (projectSkills, studentSkills) => {
    const matchedSkills = projectSkills.filter(skill => studentSkills.includes(skill));
    return (matchedSkills.length / projectSkills.length) * 100;
  };

  return (
    <div className="container">
      <h1 className="title">Project Matching</h1>

      {/* Projects and Students Table */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Projects and Students</h2>
          <p className="card-description">Match students to projects based on skills</p>
        </div>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Required Skills</th>
                <th>Assigned Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.requiredSkills.map(id => skills.find(s => s.id === id)?.name).join(", ")}</td>
                  <td>{project.assignedStudents.map(id => students.find(s => s.id === id)?.name).join(", ")}</td>
                  <td>
                    <button className="btn" onClick={() => setSelectedProject(project)}>Assign Students</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assign Students Dialog */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Assign Students to {selectedProject.title}</h3>
            <p>Select students to assign to this project.</p>
            <div className="checkbox-group">
              {students
                .filter(student => !student.assignedProject)
                .map((student) => (
                  <div key={student.id} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={`student-${student.id}`}
                      checked={selectedStudents.includes(student.id)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSelectedStudents(
                          isChecked
                            ? [...selectedStudents, student.id]
                            : selectedStudents.filter(id => id !== student.id)
                        );
                      }}
                    />
                    <label htmlFor={`student-${student.id}`}>
                      {student.name} (Skill match: {getSkillMatch(selectedProject.requiredSkills, student.skills).toFixed(0)}%)
                    </label>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={handleAssignStudents}>Assign Selected Students</button>
              <button className="btn outline" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Unassigned Students Table */}
      <div className="card mt-6">
        <div className="card-header">
          <h2 className="card-title">Unassigned Students</h2>
          <p className="card-description">Students not yet assigned to a project</p>
        </div>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter(student => !student.assignedProject)
                .map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.skills.map(id => skills.find(s => s.id === id)?.name).join(", ")}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
