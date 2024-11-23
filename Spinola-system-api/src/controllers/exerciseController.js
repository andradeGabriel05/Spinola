const exerciseModel = require("../models/exerciceModel");

function incrementUserDetails(req, res) {
  const {userId, pointsValue} = req.body;

  if (!userId) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    exerciseModel
      .incrementUserDetails(userId, pointsValue)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function getUserExercicesDetails(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("O ID está undefined!");
  } else {
    exerciseModel
      .getUserExercicesDetails(userId)
      .then((resultado) => {
        if (resultado.length === 0) {
          res
            .status(404)
            .send("Exercício não encontrado para o usuário informado.");
        } else {
          res.json(resultado);
        }
      })
      .catch((erro) => {
        console.error(
          "Houve um erro ao buscar os exercícios!",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
};
