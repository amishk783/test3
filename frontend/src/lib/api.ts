import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axiosInstance;

export default api;
