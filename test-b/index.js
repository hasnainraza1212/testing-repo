import express from "express"
import { posts } from "./posts.js"
const app = express()
const PORT = process.env.PORT

app.get("/api/v1/", (req, res)=>{
    res.status(200).send(posts)
})
app.use(express.json())
app.listen(PORT, ()=>{
    console.log(`Live at ${PORT}`)
})