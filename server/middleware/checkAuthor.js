const Post = require("../models/post.model");

const checkAuthor = async (req, res, next) => {
  const authorItem = await Post.findById(req.params.id);
  if (authorItem.author == req.session.user.id) {
    return next();
  }
  return res.send("Атата, чужое трогать нельзя!");
};

module.exports = checkAuthor;
