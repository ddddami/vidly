import axios from "axios";
import { toast } from "react-hot-toast";
import logger from "./logger";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error("An unexpected error occured.");
    logger.log("error");
  }
  return Promise.reject(error);
});
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = jwt && `JWT ${jwt}`;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
