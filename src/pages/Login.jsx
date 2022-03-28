import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { saveUser } from '../services/user';
import Loading from '../components/Loading';

function Login() {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    const NAME_MIN_LENGTH = 3;
    if (name.length >= NAME_MIN_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name])

  const inputHandler = ({ target: { value } }) => {
    setName(value);
  };

  const submitHandler = () => {
    setLoading(true);
    saveUser({ name, email: '', img: ''});
    setRedirect(true);
    setLoading(false);
  };

  if (loading) return <Loading />;

  if (redirect) return <Navigate to="/search" />

  return (
    <div className='login-container'>
      <h1 className='login-title'>PlayTunes</h1>
      <form className='login-form'>
        <input
          type='text'
          value={ name }
          placeholder='Enter your name'
          className='login-input'
          onChange={ inputHandler }
        />
        <p className='login-constraint'>Name must have at least 3 characters</p>
        <button
          type='button'
          className='login-button'
          disabled={ disabled }
          onClick={ submitHandler }
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

export default Login;