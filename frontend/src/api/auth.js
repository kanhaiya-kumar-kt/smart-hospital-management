// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signupUser = (userData) => API.post("/signup", userData);
export const loginUser =(credentials) => API.post("/login",credentials);
