const express = require("express");
const { verifyExercise, getUserExercicesDetails, incrementPoints, getTotalPoints } = require("../controllers/exerciseController");

const router = express.Router();

router.put("/verify-exercise", verifyExercise);
router.get("/verify-exercise-details/user", getUserExercicesDetails);
// router.put("/verify-day-strike", dayStrike);
router.put("/verify-points", incrementPoints);

module.exports = router;
