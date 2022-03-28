import React from 'react';
import { Link } from 'react-router-dom';

function Albums({ collection, artist }) {
  return (
    <div className='albums-container'>
      <h3>Albums result for artist { artist }:</h3>
      <div className="albums-wrapper">
        { collection.map((a) => (
          <div className="album">
            <Link to={ `/album/${a.collectionId}` } >
              <img
                className='album-img'
                src={ a.artworkUrl100 }
                alt={ a.collectionName }
              />
              <div className="album-name-container">
                <h4 className='album-name'>{ a.collectionName }</h4>
                <h5 className='artist-name'>{ a.artistName }</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;