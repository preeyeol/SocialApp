const { populate } = require("dotenv");
const likeSchema=require("../model/likeSchema");
const postSchema=require("../model/postSchema")

const liked = async(req,res)=>{
 try{ const { postId } = req.params ;
  const user= req.user;

  const post= await postSchema.findById(postId);

  if(!post){
    return res.status(404).json({msg:"Post doesn't exist"})
  }

const newLike= new likeSchema({
userId:user._id,
postId: postId
    
})

await newLike.save()

post.likes.push(newLike._id)
await post.save()

res.status(200).json({msg:"Post has been liked",newLike})

}catch(err){
    res.status(400).json({msg:"server error"})
}
}

const allLikes= async(req,res)=>{
    try{
 const postId=req.params.id;

const likes= await postSchema.findById(postId).populate({
    path:"likes",
    populate:{
        path:"userId",
        select: "username email"
    }
});

res.json(likes)


    }catch(err){
        res.status(400).json({msg:"Server Error",err})
    }
}

module.exports={liked,allLikes}