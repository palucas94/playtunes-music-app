const FAVORITES = 'tunesFavorites';

if (!JSON.parse(localStorage.getItem(FAVORITES))) {
  localStorage.setItem(FAVORITES, JSON.stringify([]));
}

export const readFavorites = () => JSON.parse(localStorage.getItem(FAVORITES));

const saveFavorites = (favoriteSongs) => localStorage
.setItem(FAVORITES, JSON.stringify(favoriteSongs));

export const addSong = (song) => {
  if (song) {
    const favoriteSongs = readFavorites();
    saveFavorites([...favoriteSongs, song]);
  }
};

export const removeSong = (song) => {
  const favoriteSongs = readFavorites();
  saveFavorites(favoriteSongs.filter((s) => s.trackId !== song.trackId));
};
