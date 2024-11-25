const express = require("express");
const {
  timeSpentExercise,
  verifyExercisesUser,
  verifyExercisesUserYesterday,
  verifyExercisesUserToday,
  verifyExercisesUserWeek,
  verifyExercisesUserWeekTotal,
  verifyUserPercentage,
  verifyExercisesMade,
} = require("../controllers/userTimeSpentController");

const router = express.Router();

router.post("/register-exercise", timeSpentExercise);
router.get("/verify-exercises-user/user", verifyExercisesUser);
router.get(
  "/verify-exercises-user-yesterday/user",
  verifyExercisesUserYesterday
);
router.get("/verify-exercises-user-today/user", verifyExercisesUserToday);
router.get("/verify-exercises-user-week/user", verifyExercisesUserWeek);
router.get(
  "/verify-exercises-user-week-total/user",
  verifyExercisesUserWeekTotal
);
router.get("/verify-user-percentage", verifyUserPercentage);
router.get("/verify-exercises-made", verifyExercisesMade);


module.exports = router;
