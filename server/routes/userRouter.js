const bcrypt = require("bcrypt");
const Post = require("../models/post.model");
const router = require("express").Router();
const User = require("../models/user.model");
const checkSign = require("../middleware/checkSign");

router.post("/registration", async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPass,
    });
    req.session.user = {
      id: newUser._id,
    };
    return res.json(newUser).status(200);
  }
  res.sendStatus(404);
});

router.get("/logout", (req, res) => {
  console.log('logout')
  req.session.destroy(() => {
    res.clearCookie(req.app.get("cookieName"));
    res.sendStatus(200);
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  if (email && password) {
    const currentUser = await User.findOne({ email });
    if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.user = {
        id: currentUser._id,
      };
      return res.json(currentUser);
    }
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

router.get("/profile", async (req, res) => {
  try {
    const myUser = await User.findById(req.session.user.id);
    const myPosts = await Post.find({ author: req.session.user.id });
    res.render("user/profile", { myUser, myPosts });
  } catch (error) {
    res.render("user/profile");
  }
});

router.post("/profile", checkSign, async (req, res) => {
  const { title, body, photo, date } = req.body;
  if (title && body) {
    await Post.create({
      title,
      body,
      author: req.session.user.id,
      photo,
      date,
    });
    return res.redirect("/");
  }
  return res.redirect("/user/profile");
});

router.get("/createParty", checkSign, (req, res) => {
  res.render("user/createParty");
});

router.get("/useredit", checkSign, (req, res) => {
  res.render("user/useredit");
});

router.post("/useredit", checkSign, async (req, res) => {
  const { email, password, name, photo } = req.body;
  if (name && email && password) {
    const hashPass = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(req.session.user.id, {
      email,
      password: hashPass,
      name,
      photo,
    });
    return res.redirect("/user/profile");
  }
  return res.redirect("/user/edit");
});

router.get("/userdelete", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.session.user.id);
    res.redirect("/user/signout");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
