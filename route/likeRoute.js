const express= require("express");
const likeRoute=express.Router();
const {liked,allLikes} = require("../controller/likeController");
const verifyToken=require("../middleware/authMiddleware")

likeRoute.post("/:postId/like",verifyToken,liked)
likeRoute.get("/:postId/like",verifyToken,allLikes)

module.exports=likeRoute