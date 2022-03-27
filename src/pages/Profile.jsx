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
        <Link to='/profile/edit'>Edit profile</Link>
        <h3>Name</h3>
        <h4>{ name }</h4>
        <h3>E-mail</h3>
        <h4>{ email }</h4>
      </div>
    </div>
  );
}

export default Profile;