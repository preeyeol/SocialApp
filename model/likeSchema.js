const mongoose = require("mongoose");

const like = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  createdAt: { type: Date, default: Date.now },
});

const likeSchema = mongoose.model("like", like);

module.exports = likeSchema;
