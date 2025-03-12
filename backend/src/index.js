import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {app, server} from "./lib/socket.js"

dotenv.config()

const PORT = process.env.PORT

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://slab-beta.onrender.com",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    connectDB()
})