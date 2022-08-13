const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentModel = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    post: { type: Schema.Types.ObjectId, ref: "post" },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model("comment", commentModel);
module.exports = comment;
