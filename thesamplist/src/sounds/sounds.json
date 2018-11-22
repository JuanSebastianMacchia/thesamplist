
const sounds = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    link: "https://raw.githubusercontent.com/sebamacchia/thesamplist/master/thesamplist/src/assets/sounds/bateria_espectacular-kick%202.wav"
    title: "kick 2",
    album:"bateria espectacular",
    genre: { "acoustic", "drum"},
    mode: "oneshot",
    publishDate: "2018-01-03T19:04:28.809Z",
    vinyl: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "kick 2",
    album:"bateria espectacular",
    genre: { "acoustic", "drum"},
    mode: "oneshot",
    publishDate: "2018-01-03T19:04:28.809Z",
    vinyl: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "kick 2",
    album:"bateria espectacular",
    genre: { "acoustic", "drum"},
    mode: "oneshot",
    publishDate: "2018-01-03T19:04:28.809Z",
    vinyl: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "kick 2",
    album:"bateria espectacular",
    genre: { "acoustic", "drum"},
    mode: "oneshot",
    publishDate: "2018-01-03T19:04:28.809Z",
    vinyl: true
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
