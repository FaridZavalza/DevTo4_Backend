const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img_url: { type: String, required: true },
    description: { type: String },
    content: { type: String, required: true },
    date_post: { type: Date },
    author: { type: Schema.ObjectId, ref: "users" },
    category: { type: String },
    tags: { type: Array, default: [], required: true },
    reactions: { type: Array, default: [] },
    time_read: { type: String },
    comments: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", postSchema);
