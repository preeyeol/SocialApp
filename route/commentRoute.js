const express= require("express");
const commentRoute=express.Router();
const verifyToken=require("../middleware/authMiddleware")

const {comment,getAllcomment}=require("../controller/commentController")

commentRoute.post("/:postId/comment",verifyToken,comment)
commentRoute.get("/:postId/comment",verifyToken,getAllcomment)




module.exports=commentRoute;