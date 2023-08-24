import http from "./httpService";
const moviesUrl = "/api/movies";
function movieUrl(id) {
  return `/api/movies/${id}/`;
}
export function getMovies() {
  return http.get(moviesUrl);
}
export function getMovie(id) {
  return http.get(movieUrl(id));
}
export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(moviesUrl + '/', movie);
}
export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
