import React from 'react';
import { Link } from 'react-router-dom';

function Albums({ collection, artist }) {
  return (
    <div>
      <h3>Albums result for artist { artist }:</h3>
      { collection.map((a) => (
        <div className="album-container">
          <Link to={ `/album/${a.collectionId}` } >
            <img
              src={ a.artworkUrl100 }
              alt={ a.collectionName }
            />
            <h4>{ a.collectionName }</h4>
            <h5>{ a.artistName }</h5>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Albums;