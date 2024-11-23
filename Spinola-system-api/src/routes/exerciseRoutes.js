const express = require("express");
const { incrementUserDetails, getUserExercicesDetails } = require("../controllers/exerciseController");

const router = express.Router();

router.get("/verify-exercise-details/user", getUserExercicesDetails);
router.put("/update-user-details", incrementUserDetails);

module.exports = router;
