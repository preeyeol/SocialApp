const mongoose=require("mongoose")


const post =mongoose.Schema({
    title:String,
    body:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    createdAt: { type: Date, default: Date.now },
  });

  const postSchema = mongoose.model("post", post);

  module.exports = postSchema;