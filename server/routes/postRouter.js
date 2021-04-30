const Post = require("../models/post.model");
const checkAuthor = require("../middleware/checkAuthor");
const checkSign = require("../middleware/checkSign");

const router = require("express").Router();

router.get("/:id/edit", checkSign, checkAuthor, async (req, res) => {
  const idPost = req.params.id;
  const post = await Post.findById(idPost);
  res.render("post/edit", { post });
});

router.post("/:id/edit", checkSign, checkAuthor, async (req, res) => {
  const idPost = req.params.id;
  const { title, body, photo } = req.body;
  await Post.findByIdAndUpdate(idPost, { title, body, photo });
  res.sendStatus(200);
});

router.get("/:id/delete", checkSign, checkAuthor, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/user/profile");
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/sub", checkSign, async (req, res) => {
  const post = await Post.findById(req.params.id);
  const vote = req.session.user.id;
  try {
    if (post.sub.find((el) => String(el) === String(vote))) {
      post.sub = post.sub.filter((el) => String(el) !== String(vote));
      await post.save();
      res.redirect("/");
    } else {
      post.sub.push(vote);
      await post.save();
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
