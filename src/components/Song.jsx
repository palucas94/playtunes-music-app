import React from 'react';

function Song({ album }) {
  return (
    <div className="song-container">
      { album.map(({ trackCensoredName, previewUrl }, i) => (
        i !== 0 &&
        <div className='song-wrapper'>
          <h5 className='track-name'>{ trackCensoredName }</h5>
          <audio className='track-audio' src={ previewUrl }  controls />
        </div>
      ))}
    </div>
  );
}

export default Song;