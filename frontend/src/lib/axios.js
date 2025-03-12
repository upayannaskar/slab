import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://slab-backend.onrender.com/api",
    withCredentials: true,
})
