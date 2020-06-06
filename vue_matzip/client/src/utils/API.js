import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",
});

API.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem("token");
  config.headers["authorization"] = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;
