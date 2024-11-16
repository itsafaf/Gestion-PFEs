// App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/SideBar/SideBar';
import LandingPage from './components/LandingPage/LandingPage'; // Importer la page de destination
import SignupPage from './components/SignupPage/SignupPage';
function App() {
  return (
    <Router>
      <div className="app">
        {/* Menu de navigation pour accéder à chaque composant */}
        <nav>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignupPage</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/sidebar">SideBar</Link>
          <Link to="/">Accueil</Link> {/* Lien vers la LandingPage */}
        </nav>

        {/* Définition des routes pour chaque composant */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route vers la LandingPage */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<SideBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
