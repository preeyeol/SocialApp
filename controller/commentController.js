const commentSchema = require("../model/commentSchema");
const postSchema = require("../model/postSchema");

const comment = async (req, res) => {
  try {
    const {postId} = req.params;
    const user = req.user;
    const {text }= req.body;

    const post = await postSchema.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post doesn't exist" });
    }

    const newComment = new commentSchema({
      text: text,
      userId: user._id,
      postId: postId,
    });
    await newComment.save();

    post.comments.push(newComment._id)
    await post.save()

    res.status(200).json({msg:"You have commented on a post",newComment})

  } catch (err) {
    res.status(400).json({ msg: "Server Error" });
  }
};

const getAllcomment = async (req, res) => {
  try {
    const postId = req.params.postId;
console.log(postId)
    const commentsInPost= await postSchema.findById(postId).populate({
        path:"comments",
        select:"text",
        populate:{
            path:"userId",
            select: "username email"
        }
    });
    console.log(commentsInPost)
    res.json(commentsInPost)
  } catch (err) {
    console.log(err);
  }
};

module.exports = { comment, getAllcomment };
