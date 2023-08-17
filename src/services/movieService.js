import http from "./httpService";
import config from "../config.json";
export function getMovies() {
  return http.get(config.apiUrl + "/movies");
}
export function getMovie(id) {
  return http.get(config.apiUrl + "/movies/" + id);
}
export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(config.apiUrl + "/movies/" + movie._id + "/", body);
  }
  return http.post(config.apiUrl + "/movies/", movie);
}
export function deleteMovie(id) {
  return http.delete(config.apiUrl + "/movies/" + id);
}
