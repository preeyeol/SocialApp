const mongoose=require("mongoose")


const post =mongoose.Schema({
    title:String,
    body:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "like" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    createdAt: { type: Date, default: Date.now },
  })

  const postSchema = mongoose.model("post", post);

  module.exports = postSchema;