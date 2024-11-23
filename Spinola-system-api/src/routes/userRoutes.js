const express = require("express");
const { createUser, login } = require("../controllers/userController");

const router = express.Router();

router.post("/register-user", createUser);
router.post("/login-user", login);

module.exports = router;