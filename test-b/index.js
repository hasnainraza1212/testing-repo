import express from "express";
import cors from "cors";
import { posts } from "./posts.js";
import session from "express-session";
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: ["https://nanu-test.netlify.app", "http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.set("trust proxy", 1)
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "none", // Set SameSite attribute to None
      secure: true,
    },
  })
);

// Define routes
app.get("/", (req, res) => {
  console.log("test")
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times.`);
  } else {
    req.session.views = 1;
    res.send("Welcome to the session example. Refresh the page!");
  }
  // console.log(MemoryStoreInstance)
});

// app.get("/", (req, res)=>{
//     res.status(200).send({message:"hello from server"})
// })
app.get("/api/v1/", (req, res) => {
  res.status(200).send(posts);
});
app.post("/api/v1/login", (req, res) => {
  if (req.session.auth) {
    return res.status(200).send(posts);
  } else {
    req.session.auth = true;
    return res.status(200).send(posts);
  }
});
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Live at ${PORT}`);
});
