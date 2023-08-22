import http from "./httpService";

const apiEndpoint = "/auth/jwt/";
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
