import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000/api", // Backend base URL
});

// Add Authorization Header for each request if token exists
API.interceptors.request.use((req:any) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
