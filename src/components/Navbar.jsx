// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/">🌐 News Highlights</Link>
        </h1>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/country/us">Country</Link></li>
          <li><Link to="/language/en">Language</Link></li>
          <li><Link to="/hot">Hot News</Link></li>
          <li><Link to="/texas">Texas News</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
