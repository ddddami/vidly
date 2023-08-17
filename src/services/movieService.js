import http from "./httpService";
import { apiUrl } from "../config.json";
export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(id) {
  return http.delete(apiUrl + "/" + id);
}
