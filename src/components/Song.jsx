import React, { useEffect, useState } from 'react';
import { addSong, readFavorites, removeSong } from '../services/favorites';

function Song({ album }) {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const favoriteSongs = readFavorites();
    setFavorites(favoriteSongs);
  }, []);
  
  const favoriteHandler = (song) => {
    const favoriteSongs = readFavorites();
    const isFavorite = favoriteSongs.some((s) => s.trackId === song.trackId)
    if (isFavorite) {
      const newFavorites = favorites.filter((s) => s.trackId !== song.trackId);
      setFavorites(newFavorites);
      removeSong(song);
    } else {
      setFavorites([...favorites, song]);
      addSong(song);
    }
  }

  const checkFavorite = (id) => {
    const isFavorite = favorites.some((s) => s.trackId === id);
    return isFavorite;
  }

  return (
    <div className="song-container">
      { album.map((song, i) => (
        i !== 0 &&
        <div className='song-wrapper' key={ Math.random() * 10000 }>
          <h5 className='track-name'>{ song.trackCensoredName }</h5>
          <audio className='track-audio' src={ song.previewUrl }  controls />
          <button
            className={`favorite-button ${checkFavorite(song.trackId) ? 'isFavorite' : ''}`}
            onClick={ () => favoriteHandler(song) }
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;