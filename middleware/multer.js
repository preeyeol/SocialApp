const multer=require("multer");
const path=require("path");
const express=require("express");
const app=express();
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))



const pictureStorage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/")
    },
    filename: function(req,file,cb){
const filename=`${Date.now()}${path.extname(filename.originalname)}` ;

cb(null,filename) }
})

const upload=multer({
    storage:pictureStorage,
    limits:{fileSize:1024*1024*3}
})

const multerMiddleware=(upload.single("upload"),(req,res,next)=>{
    console.log(req.file)
    res.json({file:"public/"});

    next()
}
) 
module.exports= multerMiddleware