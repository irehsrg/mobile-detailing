import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
