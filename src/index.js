import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Login.css';
import './styles/Header.css';
import './styles/Search.css';
import './styles/Album.css';
import './styles/Albums.css';
import './styles/Profile.css'
import './styles/Loading.css';
import './styles/ArtistNotFound.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
