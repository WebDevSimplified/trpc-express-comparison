import express from "express"
import cors from "cors"
import indexRoutes from "./routers"
import userRoutes from "./routers/users"

const app = express()
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())

app.use("/", indexRoutes)
app.use("/users", userRoutes)

app.listen(3000)
