// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">🗞️ NewsPortal</Link>
        </h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/country" className="hover:text-blue-400">Country</Link></li>
          <li><Link to="/language" className="hover:text-blue-400">Language</Link></li>
          <li><Link to="/hot" className="hover:text-blue-400">Hot News</Link></li>
          <li><Link to="/texas" className="hover:text-blue-400">Texas News</Link></li>
          {/* Add categories later */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
