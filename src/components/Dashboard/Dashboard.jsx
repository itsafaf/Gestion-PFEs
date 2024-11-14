import React, { useState } from 'react';
import './dashboard.css';

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const projects = [
    {
      id: 1,
      title: "Système de gestion de PFE",
      type: "Innovant",
      status: "En cours",
      deadline: "2024-12-15",
      supervisor: "Dr. Martin",
    },
    {
      id: 2,
      title: "Application mobile de suivi",
      type: "Classique",
      status: "En attente",
      deadline: "2024-11-30",
      supervisor: "Dr. Sarah",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-800">PFE Platform</span>
            </div>
            <div className="flex items-center space-x-4">
              <button aria-label="Notifications" className="text-gray-600 hover:text-gray-800">
                🔔
              </button>
              <button aria-label="Messages" className="text-gray-600 hover:text-gray-800">
                💬
              </button>
              <div className="flex items-center space-x-2">
                <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="Profile" />
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm">
          <nav className="mt-5 px-2">
            <div className="space-y-1">
              {[
                { name: 'Tableau de bord', icon: '📄', key: 'dashboard' },
                { name: 'Mes Projets', icon: '👥', key: 'projects' },
                { name: 'Calendrier', icon: '📅', key: 'calendar' },
                { name: 'Profil', icon: '👤', key: 'profile' },
                { name: 'Paramètres', icon: '⚙️', key: 'settings' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`w-full flex items-center px-2 py-2 text-sm font-medium rounded-md ${activeTab === item.key ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              ))}
              <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
                <span className="mr-3">🚪</span>
                Déconnexion
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="main-content-container">
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Actions Row */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Tableau de bord</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Nouveau Projet
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow card-hover">
                  <h3 className="text-lg font-medium text-gray-900">Projets en cours</h3>
                  <p className="text-3xl font-semibold text-blue-600">3</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow card-hover">
                  <h3 className="text-lg font-medium text-gray-900">Deadlines proches</h3>
                  <p className="text-3xl font-semibold text-yellow-600">2</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow card-hover">
                  <h3 className="text-lg font-medium text-gray-900">Messages non lus</h3>
                  <p className="text-3xl font-semibold text-green-600">5</p>
                </div>
              </div>

              {/* Projects Table */}
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Projets récents</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Encadrant</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {projects.map((project) => (
                        <tr key={project.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === 'En cours' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.supervisor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
