import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Song from '../components/Song';
import { songsAPI } from '../services/tunesAPI';

function Album() {
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [albumData, setAlbumData] = useState();
  const [albumImg, setAlbumImg] = useState();

  const { id } = useParams();
  
  useEffect(() => getAlbum(), []);

  const getAlbum = async () => {
    const album = await songsAPI(id);
    const { collectionName, artistName, artworkUrl100 } = album[0];

    setAlbumData(album);
    setAlbumImg(artworkUrl100);
    setArtist(artistName);
    setAlbumName(collectionName);
    setLoading(false);
  };

  return (
    <div className="album-page">
      < Header />
      { loading && <h1>Loading</h1> }
      {
        albumName && artist &&
        <div className="album-container">
          <div className="album-wrapper">
            <img src={ albumImg } alt={ albumName } />
            <h3>{ artist }</h3>
            <h4>{ albumName }</h4>
            { <Song album={ albumData } />}
          </div>
        </div>
      }
    </div>
  );
}

export default Album;