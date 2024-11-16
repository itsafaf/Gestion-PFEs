import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/SideBar/SideBar';
import LandingPage from './components/LandingPage/LandingPage'; // Import the landing page
import SignupPage from './components/SignupPage/SignupPage';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation menu */}
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Accueil</Link> {/* Link to LandingPage */}
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/sidebar">SideBar</Link>
            </li>
            <li>
              <Link to="/student">Étudiant</Link>
            </li>
            <li>
              <Link to="/teacher">Teacher</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/entreprise">Entreprise</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes for each component */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route for LandingPage */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<SideBar />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
