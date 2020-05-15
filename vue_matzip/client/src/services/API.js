import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:5001`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

API.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem("token") || "";

    if (token) {
      console.log("토큰이 존재함");
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
API.interceptors.response.use((response) => {
  // Called on response
  return response;
});

export default API;
