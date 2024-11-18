import React, { useState } from "react";
import { FaChalkboardTeacher, FaCalendarAlt, FaCheckCircle, FaEdit } from "react-icons/fa";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./css/StudentProgress.css";

const StudentProgress = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", project: "AI-powered Chatbot", progress: 60, lastMeeting: "2023-05-15" },
    { id: 2, name: "Bob Smith", project: "Blockchain for Supply Chain", progress: 40, lastMeeting: "2023-05-10" },
    { id: 3, name: "Charlie Brown", project: "Mobile App for Health Tracking", progress: 75, lastMeeting: "2023-05-18" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");

  const handleProgressUpdate = (studentId, newProgress) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, progress: newProgress } : student
      )
    );
  };

  return (
    <div className="landing-page">
  
      <section className="main-content">
        <h1 className="main-title">Suivi des Progrès des Étudiants</h1>
        <p className="main-subtitle">Surveillez les projets et performances des étudiants.</p>
      </section>

      <section className="card-container">
        <table className="progress-table">
          <thead>
            <tr>
              <th>Nom de l'Étudiant</th>
              <th>Projet</th>
              <th>Progrès</th>
              <th>Dernière Rencontre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.project}</td>
                <td>
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                    <span>{student.progress}%</span>
                  </div>
                </td>
                <td>{student.lastMeeting}</td>
                <td>
                  <button
                    className="cta-button"
                    onClick={() => setSelectedStudent(student)}
                  >
                    <FaEdit /> Mettre à jour
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedStudent && (
          <div className="modal">
            <div className="modal-content">
              <h2>Mettre à Jour: {selectedStudent.name}</h2>
              <label>
                Progrès (%):
                <input
                  type="number"
                  value={selectedStudent.progress}
                  onChange={(e) =>
                    handleProgressUpdate(selectedStudent.id, Number(e.target.value))
                  }
                  min="0"
                  max="100"
                />
              </label>
              <label>
                Prochaine Rencontre:
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <label>
                Feedback:
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Ajoutez vos commentaires ici"
                ></textarea>
              </label>
              <button
                className="cta-button"
                onClick={() => {
                  console.log("Feedback:", feedback);
                  console.log("Date:", date);
                  setSelectedStudent(null);
                  setFeedback("");
                  setDate("");
                }}
              >
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default StudentProgress;
