import { msalInstance } from "@/main";
import axios from "axios";
import { loginRequest } from "./authConfig";

const baseURL = import.meta.env.VITE_APP_API_URL;

console.log("🚀 ~ baseURL:", baseURL);

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include the token
axiosInstance.interceptors.request.use(async (config) => {
  try {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
    }
    const response = await msalInstance.acquireTokenSilent(loginRequest);

    if (response) {
      config.headers.Authorization = `Bearer ${response.idToken}`;
    }
  } catch (error) {
    console.log(error);
  }
  return config;
});

const api = axiosInstance;

export default api;
