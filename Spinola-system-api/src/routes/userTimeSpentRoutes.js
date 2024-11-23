const express = require("express");
const { timeSpentExercice } = require("../controllers/userTimeSpentController");

const router = express.Router();

router.put("/verify-time-spent", timeSpentExercice);

module.exports = router;
