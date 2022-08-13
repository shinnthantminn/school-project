const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  },
  { timestamps: true }
);

const post = mongoose.model("post", PostSchema);

module.exports = post;
