const exerciseModel = require("../models/exerciceModel");

function incrementUserDetails(req, res) {
  const { userId, pointsValue } = req.body;

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

function incrementDayStrikeVerification(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("O ID está undefined!");
  } else {
    exerciseModel
      .incrementDayStrikeVerification(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error(
          "Houve um erro ao realizar o cadastro!11",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function incrementDayStrike(req, res) {
  const { userId } = req.body;

  if (!userId) {
    res.status(400).send("O ID está undefined!");
  } else {
    exerciseModel
      .incrementDayStrike(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function rankingPoints(req, res) {
  exerciseModel
    .rankingPoints()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
      res.status(500).json({ erro: "Erro ao obter ranking de pontos." });
    });
}

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
  incrementDayStrikeVerification,
  incrementDayStrike,
  rankingPoints,
};
