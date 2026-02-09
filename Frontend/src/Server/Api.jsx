// Api.jsx
import axios from "axios";

const API = axios.create({
  baseURL: "tfi-assignment-frontend.onrender.com/api",
  headers: {
    "Content-Type": "application/json", // ensure JSON body
  },
});

// Attach token automatically if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
