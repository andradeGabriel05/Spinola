const express = require("express");
const { incrementUserDetails, getUserExercicesDetails, incrementDayStrikeVerification, incrementDayStrike, rankingPoints } = require("../controllers/exerciseController");

const router = express.Router();

router.put("/update-user-details", incrementUserDetails);
router.put("/update-day-strike", incrementDayStrike);
router.get("/verify-exercise-details/user", getUserExercicesDetails);
router.get("/update-day-strike-verification", incrementDayStrikeVerification);
router.get("/ranking-points", rankingPoints);



module.exports = router;
