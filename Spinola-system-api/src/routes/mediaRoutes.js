const express = require("express");
const { getTimeMedia, verifyTimeMedia } = require("../controllers/mediaController");

const router = express.Router();

router.get("/get-time-on-media", getTimeMedia);
router.post("/verify-time-on-media", verifyTimeMedia);

module.exports = router;