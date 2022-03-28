import React, { useState } from 'react';
import Albums from '../components/Albums';
import ArtistNotFound from '../components/ArtistNotFound';
import Form from '../components/Form';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { tunesAPI } from '../services/tunesAPI';

function Search() {
  const [artist, setArtist] = useState('');
  const [currentArtist, setCurrentArtist] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setArtist(value);
  };

  const buttonHandler = async () => {
    setLoading(true);
    const results = await tunesAPI(artist);
    setCurrentArtist(artist);
    setAlbums(results);
    setLoading(false);
    albums.length === 0 && setSearched(true);
  };

  if (loading) {
    return (
      <div>
        <Header />
        <Loading />
      </div>
    );
  }

  return (
    <div className="search-container">
      <Header />
      <Form
        artist={ artist }
        inputHandler={ inputHandler }
        buttonHandler={ buttonHandler }
      />
      { searched && !albums.length && <ArtistNotFound artist={ currentArtist }/> }
      { albums.length > 0 && <Albums collection={ albums } artist={ currentArtist }  />}
    </div>
  );
}

export default Search;