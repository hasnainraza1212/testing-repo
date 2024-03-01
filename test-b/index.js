import express from "express"
import cors from "cors"
import { posts } from "./posts.js"
const app = express()
const PORT = process.env.PORT
app.use(cors({
"origin": ["https://nanu-test.netlify.app","http://localhost:5173"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
const handleSession = (req, res, next)=>{
    if  (req.session.id){
      return  next()
    }
    else{
        res.status(401).send({message:"Unauthorized", success:false})
    }
}
app.use(handleSession)
app.get("/", (req, res)=>{
    res.status(200).send({message:"hello from server"})
})
app.get("/api/v1/", (req, res)=>{
    res.status(200).send(posts)
})
app.get("/api/v1/login", (req, res)=>{
    res.status(200).send(posts)
})
app.use(express.json())
app.listen(PORT, ()=>{
    console.log(`Live at ${PORT}`)
})
