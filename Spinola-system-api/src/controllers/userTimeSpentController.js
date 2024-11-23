const timeSpentModel = require("../models/userTimeSpentModel");

function timeSpentExercice(req, res) {
  const { userId, timeSpent } = req.body;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    timeSpentModel
      .timeSpentExercice(userId, timeSpent)
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
  timeSpentExercice,
};
