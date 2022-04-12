import React from 'react';
import { Link } from 'react-router-dom';
import { readUser } from '../services/user';

function Header() {
  return (
    <div className="header-container">
      <div className="title-wrapper">
        <h2 className="playtunes-title">PlayTunes</h2>
        <h2 className="welcome-user">Welcome, { readUser().name }!</h2>
      </div>
      <nav className='header-nav'>
        <Link to="/search" className='nav-item'>Search</Link>
        <Link to="/favorites" className='nav-item'>Favorites</Link>
        <Link to="/profile" className='nav-item'>Profile</Link>
      </nav>
    </div>
  );
}

export default Header;