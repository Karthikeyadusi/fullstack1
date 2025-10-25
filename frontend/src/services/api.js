// src/api.js
import axios from "axios";

// Create an Axios instance with base URL from environment variable
const API = axios.create({
  baseURL: "https://fullstack1-9ei3.onrender.com/api", // Automatically picks local or production URL
});

// Add Authorization header automatically if token exists in localStorage
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
