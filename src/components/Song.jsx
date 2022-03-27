import React from 'react';

function Song({ album }) {
  return (
    <div className="song-container">
      { album.map(({ trackCensoredName, previewUrl }, i) => (
        i !== 0 &&
        <div>
          <h5>{ trackCensoredName }</h5>
          <audio src={ previewUrl }  controls />
        </div>
      ))}
    </div>
  );
}

export default Song;