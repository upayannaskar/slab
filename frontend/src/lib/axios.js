import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://slab-beta.vercel.app/api" : "/api",
  withCredentials: true,
});