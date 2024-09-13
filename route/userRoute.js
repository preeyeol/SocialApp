const express=require("express");
const userRoute=express.Router();

const {signUp,login,getUsers,profileUp}=require("../controller/userController")
const verifyToken=require("../middleware/authMiddleware");
const multerMiddleware=require("../middleware/multer")



userRoute.post("/signup",signUp);
userRoute.post("/login",login);
userRoute.get("/",verifyToken,getUsers)
userRoute.post("/profile",verifyToken,multerMiddleware,profileUp)

module.exports=userRoute;