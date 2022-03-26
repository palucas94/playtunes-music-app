import React from 'react';
import { Link } from 'react-router-dom';
import { readUser } from '../services/user';

function Header() {
  return (
    <div className="header-container">
      <h2>Welcome, { readUser() }!</h2>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default Header;