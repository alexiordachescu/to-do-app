const { Router } = require("express");
const User = require("../models").user;
const router = new Router();

// Create a new user account and validate the e-mail field

router.post("/", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// Fetch the correct user

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("No user has been found with this ID");
    } else {
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
