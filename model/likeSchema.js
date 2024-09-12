const mongoose = require("mongoose");

const like = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  createdAt: { type: Date, default: Date.now },
});

const likeSchema = mongoose.model("like", like);

module.exports = likeSchema;
