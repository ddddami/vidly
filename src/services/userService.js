import http from "./httpService";
import config from "../config.json";
const apiEndpoint = config.apiUrl + "/auth/users/";

export function getUser() {
  return http.get(apiEndpoint);
}

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
  });
}
