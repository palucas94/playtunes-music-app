import React, { useState } from 'react';
import Albums from '../components/Albums';
import Header from '../components/Header';
import { tunesAPI } from '../services/tunesAPI';

function Search() {
  const [artist, setArtist] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setArtist(value);
  };

  const buttonHandler = async () => {
    setLoading(true);
    const results = await tunesAPI(artist);
    setAlbums(results);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <Header />
      <div className="form-container">
        <form>
          <input
            type="text"
            className="seach-input"
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
      </div>
      <div className="albums-container">
        <div className="albums-wrapper">
          { albums.length > 0 && <Albums collection={ albums } artist={ artist }  />}
        </div>
      </div>
    </div>
  );
}

export default Search;