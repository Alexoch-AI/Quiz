const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const postSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  photo: {
    type: String,
  },
  date: {
    type: Date,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  sub: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Post = model("Post", postSchema);
module.exports = Post;
