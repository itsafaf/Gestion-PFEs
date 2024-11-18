import React, { useState } from "react";
import { FaChalkboardTeacher, FaCalendarAlt, FaCheckCircle, FaEdit } from "react-icons/fa";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./css/JuryAssignment.css";  // You can add your custom CSS here

const JuryAssignment = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "AI-powered Chatbot", students: "Alice, Bob", supervisor: "Dr. Smith", jury: [] },
    { id: 2, title: "Blockchain for Supply Chain", students: "Charlie", supervisor: "Prof. Johnson", jury: [] },
    { id: 3, title: "Mobile App for Health Tracking", students: "David, Eve", supervisor: "Dr. Williams", jury: [] },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Dr. Brown", grade: "Professor", recruitmentDate: "2010-09-01" },
    { id: 2, name: "Dr. Davis", grade: "Associate Professor", recruitmentDate: "2015-09-01" },
    { id: 3, name: "Dr. Wilson", grade: "Assistant Professor", recruitmentDate: "2018-09-01" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");

  const handleJuryAssignment = (projectId, role, teacherId) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, jury: [...project.jury, { role, teacherId }] } : project
      )
    );
  };

  const getTeacherName = (teacherId) => {
    const teacher = teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : "";
  };

  const handleProgressUpdate = (projectId, newProgress) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, progress: newProgress } : project
      )
    );
  };

  return (
    <div className="landing-page">
     
      <section className="main-content">
        <h1 className="main-title">Jury Assignment</h1>
        <p className="main-subtitle">Assign jury members to the student projects.</p>
      </section>

      <section className="card-container">
        <table className="progress-table">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Students</th>
              <th>Supervisor</th>
              <th>President</th>
              <th>Examiner</th>
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
                  <select
                    value={project.jury.find((m) => m.role === "president")?.teacherId || ""}
                    onChange={(e) =>
                      handleJuryAssignment(project.id, "president", Number(e.target.value))
                    }
                  >
                    <option value="">Select President</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name} ({teacher.grade})
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={project.jury.find((m) => m.role === "examiner")?.teacherId || ""}
                    onChange={(e) =>
                      handleJuryAssignment(project.id, "examiner", Number(e.target.value))
                    }
                  >
                    <option value="">Select Examiner</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name} ({teacher.grade})
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button className="cta-button" onClick={() => setSelectedProject(project)}>
                    <FaEdit /> Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>Update Jury Assignment: {selectedProject.title}</h2>
              <label>
                President:
                <select
                  value={selectedProject.jury.find((m) => m.role === "president")?.teacherId || ""}
                  onChange={(e) =>
                    handleJuryAssignment(selectedProject.id, "president", Number(e.target.value))
                  }
                >
                  <option value="">Select President</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} ({teacher.grade})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Examiner:
                <select
                  value={selectedProject.jury.find((m) => m.role === "examiner")?.teacherId || ""}
                  onChange={(e) =>
                    handleJuryAssignment(selectedProject.id, "examiner", Number(e.target.value))
                  }
                >
                  <option value="">Select Examiner</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} ({teacher.grade})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Feedback:
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter feedback here"
                ></textarea>
              </label>
              <label>
                Next Meeting:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <button
                className="cta-button"
                onClick={() => {
                  console.log("Feedback:", feedback);
                  console.log("Next Meeting:", date);
                  setSelectedProject(null);
                  setFeedback("");
                  setDate("");
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default JuryAssignment;
