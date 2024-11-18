import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/SideBar/SideBar';
import LandingPage from './components/LandingPage/LandingPage';
import SignupPage from './components/SignupPage/SignupPage';
import EntrepriseDashboard from './pages/EntrepriseDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ProjectValidation from './pages/ProjectValidation'; 
import StudentProgress from './pages/StudentProgress'; 
import JuryAssignment from './pages/JuryAssignment'; 
import NotificationCenter from './pages/NotificationCenter';
import EmailSettings from './pages/EmailSettings';
import UserManagement from './pages/UserManagement';
import ProjectScheduler from './pages/PresentationScheduler';
import Dashboards from './pages/Dashboards';
import ProjectMatching from './pages/ProjectMatching';
import ProjectEvaluation from './pages/ProjectEvaluation';
function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation menu */}
        <nav className="navigation">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/sidebar">SideBar</Link></li>
            <li><Link to="/student">Dashboard Étudiant</Link></li>
            <li><Link to="/teacher">Dashboard Enseignant</Link></li>
            <li><Link to="/admin">Dashboard Admin</Link></li>
            <li><Link to="/entreprise">Dashboard Entreprise</Link></li>
            <li><Link to="/project-validation">Project Validation</Link></li> {/* Link to ProjectValidation */}
            <li><Link to="/student-progress">Student Progress</Link></li> {/* Link to StudentProgress */}
            <li><Link to="/jury-assignment">Jury Assignment</Link></li> {/* Link to JuryAssignment */}
          </ul>
        </nav>

        {/* Define routes for each component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/entreprise" element={<EntrepriseDashboard />} />
          <Route path="/project-validation" element={<ProjectValidation />} />
          <Route path="/student-progress" element={<StudentProgress />} /> 
          <Route path="/jury-assignment" element={<JuryAssignment />} />
          <Route path="/notification" element={<NotificationCenter />} /> 
          <Route path="/emailsettings" element={<EmailSettings />} /> 
          <Route path="/usermanagement" element={<UserManagement />} /> 
          <Route path="/scheduler" element={<ProjectScheduler />} /> 
          <Route path="/dashboards" element={<Dashboards />} /> 
          <Route path="/projectmatching" element={<ProjectMatching />} /> 
          <Route path="/projectevaluation" element={<ProjectEvaluation />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
