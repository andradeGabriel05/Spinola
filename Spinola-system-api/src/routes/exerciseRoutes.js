const express = require("express");
const { incrementUserDetails, getUserExercicesDetails, incrementDayStrikeVerification, incrementDayStrike } = require("../controllers/exerciseController");

const router = express.Router();

router.get("/verify-exercise-details/user", getUserExercicesDetails);
router.put("/update-user-details", incrementUserDetails);
router.get("/update-day-strike-verification", incrementDayStrikeVerification);
router.put("/update-day-strike", incrementDayStrike);

module.exports = router;
