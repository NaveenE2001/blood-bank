const express = require("express");
const User = require("../models/Admin");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

router.post("/users", (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save user" });
    } else {
      res.json(user);
    }
  });
});

router.get("/fetchallnotess", async (req, res) => {
  try {
    const notes = await User.find({});
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
