const timeSpentModel = require("../models/userTimeSpentModel");

function timeSpentExercise(req, res) {
  const { userId, timeSpent } = req.body;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .timeSpentExercise(userId, timeSpent)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyExercisesUser(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .verifyExercisesUser(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyExercisesUserToday(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .verifyExercisesUserToday(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyExercisesUserYesterday(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .verifyExercisesUserYesterday(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyExercisesUserWeek(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .verifyExercisesUserWeek(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyExercisesUserWeekTotal(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .verifyExercisesUserWeekTotal(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  timeSpentExercise,
  verifyExercisesUser,
  verifyExercisesUserToday,
  verifyExercisesUserYesterday,
  verifyExercisesUserWeek,
  verifyExercisesUserWeekTotal,
};
