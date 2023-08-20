import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth/jwt/";
const tokenKey = "access";

http.setJwt(getJwt());

export function login(username, password) {
  return http.post(apiEndpoint + "create/", { username, password });
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}
