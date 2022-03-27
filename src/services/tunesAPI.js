export const tunesAPI = async (artist) => {
  const ENCODED = encodeURI(artist).replaceAll('%20', '+');
  const ALBUMS_URL = `https://itunes.apple.com/search?entity=album&term=${ENCODED}&attribute=allArtistTerm`

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
  const REQUEST = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const REQ_JSON= await REQUEST.json();
  return REQ_JSON.results;
};
