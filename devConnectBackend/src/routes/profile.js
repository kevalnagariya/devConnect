const express = require("express");
const profileRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { userAuth } = require("../middlewares/auth");
const {
  validateEditProfileData,
  validateForgotPasswordData,
} = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(400).send("Error: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInuser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInuser[key] = req.body[key]));

    await loggedInuser.save();

    res.json({
      message: `${loggedInuser.firstName} your profile updated successfully`,
      data: loggedInuser,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send("Error: " + err.message);
  }
});

profileRouter.post("/profile/password/forgot", async (req, res) => {
  try {
    // ✅ Validate input using the function from validation.js
    validateForgotPasswordData(req);

    const { emailId, newPassword } = req.body;

    // Find the user
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash and update the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = profileRouter;
