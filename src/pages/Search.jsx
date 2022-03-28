import React, { useState } from 'react';
import Albums from '../components/Albums';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { tunesAPI } from '../services/tunesAPI';

function Search() {
  const [artist, setArtist] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setArtist(value);
  };

  const buttonHandler = async () => {
    setLoading(true);
    const results = await tunesAPI(artist);
    setCurrentArtist(artist);
    setAlbums(results);
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <Header />
        <form className="search-form">
        <input
          placeholder='Search for artist...'
          type="text"
          className="search-input"
          value={ artist }
          onChange={ inputHandler }
        />
        <button
          type='button'
          className="search-button"
          onClick={ buttonHandler }
        >
          Search
        </button>
      </form>
        <Loading />
      </div>
    );
  }

  return (
    <div className="search-container">
      <Header />
      <form className="search-form">
        <input
          placeholder='Search for artist...'
          type="text"
          className="search-input"
          value={ artist }
          onChange={ inputHandler }
        />
        <button
          type='button'
          className="search-button"
          onClick={ buttonHandler }
        >
          Search
        </button>
      </form>
      { albums.length > 0 && <Albums collection={ albums } artist={ currentArtist }  />}
    </div>
  );
}

export default Search;