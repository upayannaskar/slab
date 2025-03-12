import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://slab-api.vercel.app/api",
  withCredentials: true,
});