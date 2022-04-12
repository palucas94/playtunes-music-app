import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { readUser } from '../services/user';

function Profile() {
  const { name, email, img } = readUser();

  return (
    <div className="profile-container">
      <Header />
      <div className="user-container">
        <img src={ img } alt="User" className="user-img" />
        <div className="name-wrapper">
          <h3 className="user-title">Name:</h3>
          <h4 className="user-info">{ name }</h4>
        </div>
        <div className="email-wrapper">
          <h3 className="user-title">E-mail:</h3>
          <h4 className="user-info">{ email }</h4>
        </div>
        <Link to='/profile/edit'>Edit profile</Link>
      </div>
    </div>
  );
}

export default Profile;