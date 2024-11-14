// components/Nav.jsx
import React from 'react';
import './Nav.css';  // Si tu veux personnaliser le style

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Accueil</a>
        </li>
        <li className="nav-item">
          <a href="#about">À propos</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
