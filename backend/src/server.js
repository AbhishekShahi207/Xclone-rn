import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
import cors from "cors";
import {clerkMiddleware} from "@clerk/express"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"

const app=express()


//middleware
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


app.get("/health",(req,res)=>{
    res.send("Api is Runing")
})



//api
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes) 

//error handling middleware
app.use((err,req,res)=>{
  console.error("Unhandled Error",err);
  res.status(500).json({error:err.message || "Internal Server Error"})
})


//server 
const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();