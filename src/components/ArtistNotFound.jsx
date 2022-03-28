import React from 'react';

function ArtistNotFound({ artist }) {
  return (
    <div className="artist-not-found-container">
      <h5>No album found for { artist }.</h5>
    </div>
  );
}

export default ArtistNotFound;