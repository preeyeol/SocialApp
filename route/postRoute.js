const express= require("express");
const postRoute= express.Router();

const {createPost,deletePost,updatePost,allPost}= require("../controller/postController");
const verifyToken=require("../middleware/authMiddleware")

postRoute.get("/",verifyToken,allPost)
postRoute.post("/new",verifyToken,createPost)
postRoute.delete("/:id",verifyToken,deletePost)
postRoute.patch("/:id",verifyToken,updatePost);


module.exports=postRoute;