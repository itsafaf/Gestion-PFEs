import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (password === data.pass) {
          const userData = data.data;
          Object.entries(userData).forEach(([key, value]) => {
            localStorage.setItem(key, value);
          });

          alert("Connexion réussie!");
          navigate('/cars');
        } else {
          setError('Email ou mot de passe incorrect');
        }
      } else {
        throw new Error(data.message || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <nav className="w-full p-4 bg-white shadow-sm">
        {/* Navbar content */}
      </nav>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="bg-white p-4 rounded-full shadow-md inline-block mb-6">
              <img
                className="h-12 w-12 mx-auto"
                src="/api/placeholder/48/48"
                alt="Logo"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Plateforme PFE
            </h2>
            <p className="text-gray-600">
              Connectez-vous à votre compte
            </p>
          </div>

          <div className="login-card bg-white/80 backdrop-blur-sm shadow-xl p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                  placeholder="votreemail@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="checkbox"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Se souvenir de moi
                  </label>
                </div>
                <button 
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={() => navigate('/forgot-password')}
                >
                  Mot de passe oublié?
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="submit-button w-full"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="spinner -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion en cours...
                    </span>
                  ) : 'Se connecter'}
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte?{' '}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-4 text-center text-sm text-gray-500">
        <p>© 2024 Plateforme PFE. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default LoginPage;