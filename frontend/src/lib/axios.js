import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://slab-api.vercel.app/api" : "/api",
  withCredentials: true,
});