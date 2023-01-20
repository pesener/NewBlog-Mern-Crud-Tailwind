import express, { response } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Post from "../Models/postModel.js";
import jwt from "jsonwebtoken";
import tokenModel from "../Models/tokenModel.js";
import Comment from "../models/commentModel.js";

const router = express.Router();

//////////////////USERS/////////////////////////////////////
router.post("/admin", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password." });

    return res.status(200).json({ user, message: "Successfully signed in" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { name, surname, countries, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      surname,
      countries,
      email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        email: createdUser.email,
        id: createdUser._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "3m" }
    );

    const refreshToken = jwt.sign(
      {
        email: createdUser.email,
        id: createdUser._id,
      },
      process.env.REFRESH_TOKEN_SECRET
    );
    await tokenModel.create({
      userId: createdUser._id,
      refreshToken: refreshToken,
    });
    return res
      .status(201)
      .json(
        { message: "Create user successfull", err: "ok" },
        { createdUser, accessToken }
      );
  } catch (error) {
    console.log(error);
    return res.json({ message: "create user failed" });
  }
});

/////////////////POSTS/////////////////////////////////////

router.post("/newNote", async (req, res) => {
  try {
    console.log(req.body);
    const { title, content, content2, createdAt, email, name, image } =
      req.body;

    const createdPost = await Post.create({
      title,
      content,
      content2,
      createdAt,
      email,
      name,
      image,
    });
    return res
      .status(201)
      .json({ message: "Create post successfull", err: "ok" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Create post failed", err: "notok" });
  }
});

router.get("/newNote", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/newNote/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get", req.params);
  try {
    const post = await Post.findById(id);

    if (!post) return;
    res.status(200).json(post);
    console.log("getPost", post);
  } catch (error) {
    res.status(404).json({ message: "post not found" });
    console.log("Post not ok", error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("delete", req.params);
  try {
    const deletedPost = await Post.findByIdAndRemove(id);
    console.log("deletedPost", deletedPost);
    res.status(201).json({ message: "Deleted a Note" });
  } catch (err) {
    console.log("catch deleted post", err);
    return res.status(500).json({ message: err.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { title, content, image } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
        image,
        _id: id,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
});

////COMMENT/////

router.post("/comment", async (req, res) => {
  try {
    console.log(req.body);
    const { name, comment, email } = req.body;

    const createdComment = await Comment.create({
      comment,
      email,
      name,
    });
    return res
      .status(201)
      .json({ message: "Create comment successfull", err: "ok" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Create comment failed", err: "notok" });
  }
});

router.delete("/delete/comment/:id", async (req, res) => {
  const { id } = req.params;
  console.log("delete", req.params);
  try {
    const deletedComment = await Comment.findByIdAndRemove(id);
    console.log("deletedComment", deletedComment);
    res.status(201).json({ message: "Deleted a Comment" });
  } catch (err) {
    console.log("catch deleted comment", err);
    return res.status(500).json({ message: err.message });
  }
});

router.get("/comment", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
    console.log("getComments", comments);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("Comment not ok", error);
  }
});

router.put("/put/published", async (req, res) => {
  try {
    const { id, isPublish } = req.body;
    await Comment.findOneAndUpdate(
      { _id: id },

      {
        isPublish: isPublish,
      }
    );
    if (!isPublish) res.json({ message: "Unpublished a Comment" });
    else res.json({ message: "Published a Comment" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Comment cannot be Published" });
  }
});

router.get("/comment/pub", async (req, res) => {
  try {
    const comments = await Comment.find({ isPublish: true });
    res.json(comments);
    console.log("Not Failed", comments);
  } catch (err) {
    return res.status(400).json("error:" + err);
  }
});

router.get("/comment/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get", req.params);
  try {
    const comment = await Comment.findById({ id, isPublish: true });

    if (!comment) return;
    res.status(200).json(comment);
    console.log("getComment", comment);
  } catch (error) {
    res.status(404).json({ message: "comment not found" });
    console.log("Comment not ok", error);
  }
});

export default router;
