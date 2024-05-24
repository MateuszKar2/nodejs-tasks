const express = require("express");
const { auth}  = require("../middleware/authenticateToken.js");

const { signup, login, logout, getCurrentUser, updateUserSubscription} = require("../controllers/user.js");
const upload = require("../middleware/upload.js");
const { UserUpdateAvatar, userUpdateAvatar } = require("../controllers/upload.js")
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, getCurrentUser);
router.patch("/", auth, updateUserSubscription);
router.patch("/avatars", auth, upload.single("avatar"), userUpdateAvatar);

module.exports = router;


