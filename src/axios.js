import axios from "axios";
import { load, remove } from "helpers/localStorage";

const CancelToken = axios.CancelToken;
export let source = CancelToken.source();

const accessToken = load("accessToken");
// const baseURL = "https://it-universe.herokuapp.com";
const baseURL = "http://localhost:3333";

const addAccessTokenToRequestsHeader = (agent, accessToken) => {
  if (accessToken) {
    agent.defaults.headers.common["Authorization"] = accessToken;
  }
};

const agent = axios.create({
  baseURL,
});

if (accessToken) {
  addAccessTokenToRequestsHeader(agent, accessToken);
}
agent.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    source = CancelToken.source();

    if (error.response?.status === 401 && originalRequest.url !== "/login") {
      remove("currentUser");
      remove("accessToken");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default agent;
