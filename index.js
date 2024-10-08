const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
require("dotenv").config(".env")
const url=process.env.url

const userRoute=require("./route/userRoute")
const postRoute=require("./route/postRoute")
const likeRoute=require("./route/likeRoute")
const commentRoute= require("./route/commentRoute")



app.use("/users",userRoute)
app.use("/posts",postRoute)
app.use("/posts",likeRoute)
app.use("/posts",commentRoute)




mongoose.connect(url).then(()=>{console.log("Connected to mongoDB")}).catch(()=>{console.log("Can't connect to mongoDB")})

app.listen(7070,()=>{console.log("The server is running on port 7070")})