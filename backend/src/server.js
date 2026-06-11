import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'

const app=express()

app.get("/health",(req,res)=>{
    res.send("Api is Runing")
})


connectDB().then(()=>{
    app.listen(ENV.PORT,()=>{
    console.log(`Server is Runing on Port: ${ENV.PORT}`)
})
})