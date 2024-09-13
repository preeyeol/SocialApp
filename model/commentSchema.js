const mongoose = require("mongoose");

const comment = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: new Date() }, 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
})

const commentSchema = mongoose.model("comment", comment);

module.exports = commentSchema;