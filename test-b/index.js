import express from "express"
import cors from "cors"
import { posts } from "./posts.js"
import session from 'express-session';
// import MemoryStore from 'memorystore';
const app = express()
const PORT = process.env.PORT
app.use(cors({
"origin": ["https://nanu-test.netlify.app","http://localhost:5173"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
// const handleSession = (req, res, next)=>{
//     if  (req.session?.id){
//       return  next()
//     }
//     else{
//         res.status(401).send({message:"Unauthorized", success:false})
//     }
// }
// app.use(handleSession)
// const MemoryStoreInstance = MemoryStore(session);
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  // store: new MemoryStoreInstance({
  //   checkPeriod: 86400000 // prune expired entries every 24h
  // })
}));

// Define routes
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times.`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the session example. Refresh the page!');
  }
  // console.log(MemoryStoreInstance)
});

// app.get("/", (req, res)=>{
//     res.status(200).send({message:"hello from server"})
// })
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
