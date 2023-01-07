import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Post from "../Models/postModel.js";

const router = express.Router();

//////////////////USERS/////////////////////////////////////
router.post("/signin", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password." });

    return res.status(200).json({ user, message: "Successfull" });
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
    return res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    return res.json({ message: "create user failed" });
  }
});

/////////////////POSTS/////////////////////////////////////

router.post("/newNote", async (req, res) => {
  try {
    console.log(req.body);
    const { title, content, createdAt, email, name, image } = req.body;

    const createdPost = await Post.create({
      title,
      content,
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

export default router;
