const encode = (artist) => {
  const STRING = artist.toLowerCase().split('');
  const NEW_STRING = [];
  
  STRING.map((s) => {
    if (s === ' ') {
      s = '+';
    }
    if (s === 'ç') {
      s = 'c';
    }
    if (s === 'é' || s === 'è') {
      s = 'e';
    }
    return NEW_STRING.push(s);
  });

  return NEW_STRING.join();
}

export const tunesAPI = async (artist) => {
  const ENCODED = encode(artist);

  const ALBUMS_URL = `https://stormy-wildwood-12924.herokuapp.com/https://itunes.apple.com/search?entity=album&term=${ENCODED}&attribute=allArtistTerm`

  const API_RESPONSE = await fetch(ALBUMS_URL);

  const { results: RESULTS } = await API_RESPONSE.json();

  const RESPONSE = RESULTS.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }),
  );
  return RESPONSE;
};

export const songsAPI = async (id) => {
  const REQUEST = await fetch(`https://stormy-wildwood-12924.herokuapp.com/https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const REQ_JSON= await REQUEST.json();
  return REQ_JSON.results;
};
