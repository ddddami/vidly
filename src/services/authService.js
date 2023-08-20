import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth/jwt/";

export function login(username, password) {
  return http.post(apiEndpoint + "create/", { username, password });
}

export function getJwt() {
  return localStorage.getItem("access");
}
