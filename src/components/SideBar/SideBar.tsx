import React, { useState } from 'react';
import './SideBar.css';
import { FaListAlt, FaSignOutAlt, FaUserAlt, FaPlus, FaBars } from 'react-icons/fa';

const SideBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="sidebar" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sidebar-logo">
        {isHovered ? <h2>Menu</h2> : <FaBars size={24} />}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-item menu-text">
          <FaListAlt className="sidebar-icon" />
          <span>Liste de PFEs</span>
        </li>
        <li className="sidebar-item">
          <FaPlus className="sidebar-icon" />
          <span>Ajouter un PFE</span>
        </li>
        <li className="sidebar-item">
          <FaUserAlt className="sidebar-icon" />
          <span>Mon Compte</span>
        </li>
        <li className="sidebar-item">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Déconnexion</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
