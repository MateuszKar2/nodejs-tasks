const express = require("express");
const { auth}  = require("../middleware/authenticateToken.js");

const { signup, login, logout, getCurrentUser, updateUserSubscription} = require("../controllers/user.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, getCurrentUser);
router.patch("/", auth, updateUserSubscription);

module.exports = router;


