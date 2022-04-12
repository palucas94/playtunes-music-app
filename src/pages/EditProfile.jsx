import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { updateUser } from '../services/user';

function EditProfile() {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newImg, setNewImg] = useState('');
  const [redirect, setRedirect] = useState(false);

  const inputHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'img':
        setNewImg(value);
        break;
      case 'email':
        setNewEmail(value);
        break;
      case 'userName':
        setNewName(value);
        break;
      default:
        break; 
    };
  }
  
  const submitHandler = () => {
    updateUser({ name: newName, email: newEmail, img: newImg });
    setRedirect(true);
  };

  if (redirect) return <Navigate to='/profile' />;

  return (
    <div className="edit-profile-container">
      <Header />
      <form onSubmit={ submitHandler }>
        <img src='' alt='User' />
        <input
          name='img'
          value={ newImg }
          onChange={ inputHandler }
          placeholder='Insert a link'
          type="text"
          className="img-input"
        />
        <h3>Name</h3>
        <input
          name='userName'
          value={ newName }
          onChange={ inputHandler }
          placeholder='Your name here'
          type="text"
          className="name-input"
        />
        <h3>Email</h3>
        <input
          name='email'
          value={ newEmail }
          onChange={ inputHandler }
          placeholder='user@user.com'
          type="text"
          className="name-input"
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default EditProfile;