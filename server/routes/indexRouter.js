const Post = require("../models/post.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find()
    .populate("author")
    .sort([["date", -1]]);
  const allPostsToFilter = [...allPosts];
  const allFiltredPosts = allPostsToFilter.filter(el=>{
    const myDate = new Date
    return el.date >= myDate
  })
  res.render("index", { allFiltredPosts });
});

module.exports = router;
