import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { readFavorites, removeSong } from '../services/favorites';

function FavoriteSongs() {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const favoriteSongs = readFavorites();
    setFavorites(favoriteSongs);
  }, []);

  const removeFavorite = (song) => {
    const newFavorites = favorites.filter((s) => s.trackId !== song.trackId);
    setFavorites(newFavorites);
    return removeSong(song);
  }

  return (
    <div className="favorites-container">
      <Header />
      <div className="favorite-songs-container">
        { favorites.map((song) => (
          <div className='song-wrapper' key={ Math.random() * 10000 }>
          <h5 className='track-name'>{ song.trackCensoredName }</h5>
          <audio className='track-audio' src={ song.previewUrl }  controls />
          <button
            className='favorite-button isFavorite'
            onClick={ () => removeFavorite(song) }
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
        ))}
      </div>  
    </div>
  );
}

export default FavoriteSongs;